import { useEffect, useState } from "react";
import { Button, Col, DatePicker, Drawer, Form, Row, Space } from "antd";
import ComboBox from "./ComboBox.jsx";
import { studentsData } from "../../data/classroomArrayData.js";
import axios from "axios";
import moment from "moment/moment.js";

// eslint-disable-next-line react/prop-types
const NewScheduleDrawer = ({
	visiblity,
	data,
	classroomId,
	form,
	handleClick,
	fetchSchedule,
}) => {
	const [time, setTime] = useState([]);

	console.log(form);
	const handleSubmit = async () => {
		try {
			const data = {
				...form,
				start: time[0],
				end: time[1],
			};
			const response = await axios.post(
				`${process.env.API_URL}/classroom/createSchedule`,
				data
			);
			console.log(response.data);
			fetchSchedule();
			handleClick();
		} catch (error) {
			console.error(error);
		}
	};
	const handleClock = (value) => {
		const time = value.map((item) => item.format("HH:mm"));
		console.log(time);
		setTime(time);
	};

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
						<Col span={12}>
							<Form.Item
								name="dateTime"
								label="Time start - Time end"
								rules={[
									{
										required: true,
										message: "Please choose the dateTime",
									},
								]}
							>
								<DatePicker.RangePicker
									picker="time"
									defaultValue={
										!form.start || !form.end
											? undefined
											: [
													moment(form.start, "HH:mm"),
													moment(form.end, "HH:mm"),
											  ]
									}
									style={{
										width: "100%",
									}}
									getPopupContainer={(trigger) =>
										trigger.parentElement
									}
									onChange={handleClock}
								/>
							</Form.Item>
						</Col>
					</Row>
				</Form>
			</Drawer>
		</>
	);
};
export default NewScheduleDrawer;
