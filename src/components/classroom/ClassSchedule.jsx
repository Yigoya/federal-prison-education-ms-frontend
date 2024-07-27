import { Button, Table, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import NewStudentDrawer from "./NewStudentDrawer";
import { render } from "react-dom";
import NewScheduleDrawer from "./NewScheduleDrawer";
const { Text } = Typography;

const ClassSchedule = ({ classroomId }) => {
	const [drawerVisiblity, setDrawerVisiblity] = useState(false);
	const [data, setData] = useState([]);
	const [form, setForm] = useState({});
	const columns = [
		{
			title: "Course",
			dataIndex: "course",
			onHeaderCell: () => ({
				style: { backgroundColor: "#7c7c80", color: "#fff" },
			}),
		},
		{
			title: "Monday",
			dataIndex: "monday",
			onHeaderCell: () => ({
				style: { backgroundColor: "#7c7c80", color: "#fff" },
			}),
			render: (text, record) => (
				<Button onClick={() => handleClick(record, "monday")}>
					{text != "" ? text : <Text type="secondary">Add</Text>}
				</Button>
			),
		},
		{
			title: "Tuesday",
			dataIndex: "tuesday",
			onHeaderCell: () => ({
				style: { backgroundColor: "#7c7c80", color: "#fff" },
			}),
			render: (text, record) => (
				<Button onClick={() => handleClick(record, "tuesday")}>
					{text != "" ? text : <Text type="secondary">Add</Text>}
				</Button>
			),
		},
		{
			title: "Wednesday",
			dataIndex: "wednesday",
			onHeaderCell: () => ({
				style: { backgroundColor: "#7c7c80", color: "#fff" },
			}),
			render: (text, record) => (
				<Button onClick={() => handleClick(record, "wednesday")}>
					{text != "" ? text : <Text type="secondary">Add</Text>}
				</Button>
			),
		},
		{
			title: "Thursday",
			dataIndex: "thursday",
			onHeaderCell: () => ({
				style: { backgroundColor: "#7c7c80", color: "#fff" },
			}),
			render: (text, record) => (
				<Button onClick={() => handleClick(record, "thursday")}>
					{text != "" ? text : <Text type="secondary">Add</Text>}
				</Button>
			),
		},
		{
			title: "Friday",
			dataIndex: "friday",
			onHeaderCell: () => ({
				style: { backgroundColor: "#7c7c80", color: "#fff" },
			}),
			render: (text, record) => (
				<Button onClick={() => handleClick(record, "friday")}>
					{text != "" ? text : <Text type="secondary">Add</Text>}
				</Button>
			),
		},
	];
	const handleClick = (record, day) => {
		console.log(record);
		setForm({
			...form,
			courseId: record.courseId,
			classroomId: classroomId,
			day: day,
			start: record[day] ? record[day].split("-")[0] : "",
			end: record[day] ? record[day].split("-")[1] : "",
		});
		setDrawerVisiblity((prevState) => !prevState);
	};

	const fetchSchedule = async () => {
		try {
			const response = await axios.get(
				`${process.env.API_URL}/classroom/getClassSchedule/${classroomId}`
			);
			console.log(response.data);
			const data = response.data.schedule.map((item) => ({
				...item,
				key: item.id,
			}));
			setData(data);
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		fetchSchedule();
	}, []);
	return (
		<div className="flex justify-center">
			<div>
				<h1 className="text-xl mb-2 ml-1 font-bold">Class schedule</h1>
				{drawerVisiblity && (
					<NewScheduleDrawer
						classroomId={classroomId}
						data={data}
						visiblity={drawerVisiblity}
						form={form}
						fetchSchedule={fetchSchedule}
						handleClick={() =>
							setDrawerVisiblity((prevState) => !prevState)
						}
					/>
				)}
				<Table
					className="w-[700px]"
					borderColor="#0085FF"
					columns={columns}
					dataSource={data}
				/>
			</div>
		</div>
	);
};
export default ClassSchedule;
