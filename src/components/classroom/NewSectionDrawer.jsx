import { useState } from "react";
import {
	Button,
	Col,
	DatePicker,
	Drawer,
	Form,
	Input,
	Row,
	Space,
	Typography,
} from "antd";
import ComboBox from "./ComboBox.jsx";
import { courseOptions, studentsData } from "../../data/classroomArrayData.js";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const NewSectionDrawer = ({
	handleClick,
	visiblity,
	options,
	edit,
	reload,
}) => {
	const { Text } = Typography;
	const [open, setOpen] = useState(visiblity);
	const { semester } = options;
	const [form, setForm] = useState({
		id: options.id,
		departmentId: options.departmentId,
		year: options.year,
		semester: options.semester,
		name: options.name,
		capacity: options.capacity,
		roomNo: options.roomNo,
	});
	console.log(typeof reload);

	const handleSubmit = async () => {
		if (edit) {
			try {
				const response = await axios.put(
					`${process.env.API_URL}/classroom/updateClassroom/${form.id}`,
					form
				);
				console.log(response.data);
				await reload();
			} catch (e) {
				console.log(e);
			}
		} else {
			try {
				const response = await axios.post(
					`${process.env.API_URL}/classroom/createClassroom`,
					form
				);
				console.log(response.data);
				await reload();
			} catch (e) {
				console.log(e);
			}
		}

		handleClick();
	};

	return (
		<>
			<Drawer
				title="Create a new section"
				width={720}
				onClose={() => handleClick()}
				open={visiblity}
				styles={{
					body: {
						paddingBottom: 80,
					},
				}}
				extra={
					<Space>
						<Button onClick={() => handleClick()}>Cancel</Button>
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
				<div className="flex flex-row gap-4">
					<div className="flex flex-col gap-4">
						<Text>section name</Text>
						<Input
							placeholder="Please enter the section name"
							onChange={(e) =>
								setForm({
									...form,
									name: e.target.value,
								})
							}
							value={form.name}
						/>
					</div>

					<div className="flex flex-col gap-4">
						<Text>Capacity</Text>
						<Input
							value={form.capacity}
							onChange={(e) =>
								setForm({
									...form,
									capacity: e.target.value,
								})
							}
							style={{
								width: "100%",
							}}
							type="number"
						/>
					</div>

					<div className="flex flex-col gap-4">
						<Text>Room No</Text>
						<Input
							value={form.roomNo}
							onChange={(e) =>
								setForm({
									...form,
									roomNo: e.target.value,
								})
							}
							style={{
								width: "100%",
							}}
						/>
					</div>
				</div>
			</Drawer>
		</>
	);
};
export default NewSectionDrawer;
