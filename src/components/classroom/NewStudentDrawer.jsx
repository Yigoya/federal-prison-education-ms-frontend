import { useEffect, useState } from "react";
import { Button, Col, Drawer, Form, Row, Space } from "antd";
import ComboBox from "./ComboBox.jsx";
import { studentsData } from "../../data/classroomArrayData.js";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const NewStudentDrawer = ({
	visiblity,
	data,
	classroomId,
	setStudent,
	handleClick,
}) => {
	const [open, setOpen] = useState(visiblity);
	const [students, setStudents] = useState([]);
	const [selectedStudents, setSelectedStudents] = useState([]);
	const onClose = () => {
		setOpen((prev) => !prev);
	};

	const handleSubmit = async () => {
		try {
			const response = await axios.post(
				`${process.env.API_URL}/classroom/addStudents`,
				{
					classroomId: classroomId,
					studentIds: selectedStudents,
				}
			);
			console.log(response.data);
			console.log(
				students.filter((item) => selectedStudents.includes(item.id))
			);
			setStudent(
				students.filter((item) => selectedStudents.includes(item.id))
			);
			handleClick();
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		const fetchStudents = async () => {
			try {
				const response = await axios.get(
					`${process.env.API_URL}/student/getAllStudents`
				);
				console.log(response.data);
				setStudents(response.data.students);
			} catch (error) {
				console.error(error);
			}
		};
		fetchStudents();
		setSelectedStudents(data.map((item, index) => item.id));
	}, [data]);
	console.log(selectedStudents);
	console.log(students);
	return (
		<>
			<Drawer
				title="Add students to classroom"
				width={720}
				onClose={handleClick}
				open={visiblity}
				styles={{
					body: {
						paddingBottom: 80,
					},
				}}
				extra={
					<Space>
						<Button onClick={handleClick}>Cancel</Button>
						<Button
							className="bg-[#0085FF]"
							onClick={handleSubmit}
							type="primary"
						>
							Submit
						</Button>
					</Space>
				}
			>
				<Form layout="vertical" hideRequiredMark>
					<Row gutter={16}>
						<Col span={24}>
							<Form.Item
								name="students"
								label="Students"
								rules={[
									{
										required: true,
										message: "Please choose students",
									},
								]}
							>
								<ComboBox
									onChange={setSelectedStudents}
									options={students.map((item, index) => {
										return {
											label: item.name,
											value: item.id,
										};
									})}
									defaults={data.map((item, index) => {
										return {
											label: item.name,
											value: item.id,
										};
									})}
								/>
							</Form.Item>
						</Col>
					</Row>
				</Form>
			</Drawer>
		</>
	);
};
export default NewStudentDrawer;
