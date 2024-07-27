import { Space, Table, Button } from "antd";
import { sectionsData as data } from "../../data/classroomArrayData.js";
import { useState } from "react";
import StudentsTable from "./StudentsTable.jsx";
import ClassSchedule from "./ClassSchedule.jsx";
import CoursesList from "./CoursesList.jsx";
import InstructorDetails from "./InstructorDetails.jsx";
import UploadCenter from "./UploadCenter.jsx";
import axios from "axios";
import NewSectionDrawer from "./NewSectionDrawer.jsx";

const SectionsTable = ({ data, reload }) => {
	const [selectedstudents, setSelectedStudents] = useState(null);
	const [classroomId, setClassroomId] = useState(null);
	const [drawerVisiblity, setDrawerVisiblity] = useState(false);
	const [options, setOptions] = useState({});
	const onDelete = async (id) => {
		try {
			const response = await axios.delete(
				`${process.env.API_URL}/classroom/deleteClassroom/${id}`
			);
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	const onEdit = async (record) => {
		console.log(record);
		setOptions({
			id: record.id,
			departmentId: record.departmentId,
			year: record.year,
			semester: record.semester,
			name: record.name,
			roomNo: record.roomNo,
			capacity: record.capacity,
		});
		setDrawerVisiblity((prevState) => !prevState);
	};
	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			render: (text, record) => (
				<a onClick={() => handleSectionClick(record.id)}>{text}</a>
			),
		},
		{
			title: "Room",
			dataIndex: "roomNo",
			key: "roomNo",
		},
		{
			title: "Capacity",
			dataIndex: "capacity",
			key: "capacity",
		},
		{
			title: "Operations",
			key: "action",
			render: (_, record) => (
				<Space size="middle">
					<Button onClick={() => onEdit(record)} type="primary" ghost>
						Edit
					</Button>
					<Button
						onClick={() => onDelete(record.id)}
						type="primary"
						danger
						ghost
					>
						Delete
					</Button>
				</Space>
			),
		},
	];

	const handleSectionClick = (id) => {
		const classroom = data.find((item) => item.id === id);
		console.log(classroom);
		setSelectedStudents(classroom.student);
		setClassroomId(id);
	};
	console.log(selectedstudents);
	return (
		<div>
			<Table
				columns={columns}
				dataSource={data.map((item) => ({
					...item,
					key: item.id,
				}))}
			/>
			{drawerVisiblity && (
				<NewSectionDrawer
					reload={reload}
					options={options}
					visiblity={drawerVisiblity}
					edit={true}
					handleClick={() =>
						setDrawerVisiblity((prevState) => !prevState)
					}
				/>
			)}
			{selectedstudents && (
				<div>
					<StudentsTable
						classroomId={classroomId}
						data={selectedstudents}
					/>
					<div className="flex flex-col gap-4 my-4">
						<UploadCenter
							text={"Attendance"}
							color={"bg-gray-500"}
							info={"upload semester attendance in excel file"}
						/>
						<UploadCenter
							text={"Grade"}
							color={"bg-yellow-700"}
							info={"upload semester grade in excel file"}
						/>
					</div>
					<div className="flex gap-3 flex-col items-start">
						<ClassSchedule classroomId={classroomId} /> <br />
						<CoursesList />
					</div>
					<h1 className="text-xl mb-2 mt-4 ml-1 font-bold">
						Instructors
					</h1>
					<div className="flex">
						<InstructorDetails instructor={"Hailu"} />
						<InstructorDetails instructor={"Gemechu"} />
						<InstructorDetails instructor={"Meklit"} />
					</div>
				</div>
			)}
		</div>
	);
};
export default SectionsTable;
