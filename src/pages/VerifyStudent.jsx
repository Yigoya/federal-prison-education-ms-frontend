import React, { useEffect, useState } from "react";
import { Table, message, Input, Button, Row } from "antd";
import axios from "axios";
import UploadCenter from "../components/classroom/UploadCenter";

const { Search } = Input;

const VerifyStudent = () => {
	const [students, setStudents] = useState([]);
	const [filteredStudents, setFilteredStudents] = useState([]);
	const [selectedStudent, setSelectedStudent] = useState(null);
	const [phone, setPhone] = useState("");
	const [file, setFile] = useState(null);
	const fetchStudents = async () => {
		try {
			const response = await axios.get(
				`${process.env.API_URL}/registration/getRegisteredStudentsForEnroll`
			); // Replace with your API endpoint
			setStudents(response.data);
			setFilteredStudents(response.data);
		} catch (error) {
			message.error("Error fetching students data");
			console.log(error);
		}
	};
	useEffect(() => {
		fetchStudents();
	}, []);
	const handleRowClick = (record) => {
		setSelectedStudent(record);
	};

	const handleSearch = (value) => {
		const filteredData = students.filter(
			(student) =>
				student.name.toLowerCase().includes(value.toLowerCase()) ||
				student.id.toString().includes(value)
		);
		setFilteredStudents(filteredData);
	};

	const onVerify = async () => {
		const year = new Date(selectedStudent.registrationDate).getFullYear();
		const formData = new FormData();
		formData.append("name", selectedStudent.name);
		formData.append("phoneNumber", phone);
		formData.append("year", year);
		formData.append("language", selectedStudent.language);
		formData.append("dateOfBirth", selectedStudent.dateOfBirth);
		formData.append("departmentId", selectedStudent.department.id);
		formData.append("gender", selectedStudent.gender);
		formData.append("status", selectedStudent.status);
		formData.append("image", selectedStudent.image);
		formData.append("specialNeed", false);
		formData.append("document", file);

		formData.append("registrationId", selectedStudent.id);
		try {
			const response = await axios.post(
				`${process.env.API_URL}/student/CreateStudent`,
				formData
			);
			await fetchStudents();
			message.success("Student verified");
		} catch (error) {
			message.error("Error verifying student");
			console.log(error);
		}
	};
	const onDecline = () => {};

	const studentColumns = [
		{ title: "Name", dataIndex: "name", key: "name" },
		{ title: "Crime", dataIndex: "crimeType", key: "crimeType" },
		{
			title: "Period",
			dataIndex: "sentencedPeriod",
			key: "sentencedPeriod",
		},
	];

	const courseColumns = [
		{ title: "Completed", dataIndex: "completed", key: "completed" },
		{ title: "Ongoing", dataIndex: "ongoing", key: "ongoing" },
		{ title: "Future", dataIndex: "future", key: "future" },
	];

	return (
		<div className="p-2 px-5 bg-white rounded-lg">
			<h1 className="text-2xl font-bold mb-4">Registered Students</h1>
			<Search
				placeholder="Search by Name or ID"
				enterButton="Search"
				size="medium"
				onSearch={handleSearch}
				className="mb-4 w-72 ml-16"
			/>
			<div className="lg:flex justify-evenly  mx-10 bg-gray-100 rounded-lg">
				<div className="w-full px-2 m-3 mt-4">
					<Table
						dataSource={filteredStudents}
						columns={studentColumns}
						rowKey="id"
						onRow={(record) => ({
							onClick: () => handleRowClick(record),
						})}
					/>
				</div>
				{selectedStudent && (
					<div className="w-full px-8 bg-white rounded-lg m-3 lg:mt-6 flex flex-col pb-8">
						<div className="justify-center mb-5 items-center lg:ml-24 lg:mt-16">
							<img
								src={`${process.env.API_URL}/image/${selectedStudent.image}`}
								className="lg:w-44 w-32 lg:h-36 h-24 rounded-full"
							/>
						</div>
						<div className="mt-3 flex flex-wrap">
							<p className="p-2 inline">
								<strong className="lg:px-4">Name:</strong>{" "}
								{selectedStudent.name}
							</p>
							<p className="p-2">
								<strong className="lg:px-4">Zone:</strong>{" "}
								{selectedStudent.zone}
							</p>
							<p className="p-2">
								<strong className="lg:px-4">Age:</strong>{" "}
								{selectedStudent.age}
							</p>
							<p className="p-2">
								<strong className="lg:px-4">
									Sentenced Period:
								</strong>{" "}
								{selectedStudent.sentencedPeriod}
							</p>
							<p className="p-2">
								<strong className="lg:px-4">Status:</strong>{" "}
								{selectedStudent.status}
							</p>
							<p className="p-2">
								<strong className="lg:px-4">Language:</strong>{" "}
								{selectedStudent.language}
							</p>
							<p className="p-2">
								<strong className="lg:px-4">Ethnicity:</strong>{" "}
								{selectedStudent.ethnicity}
							</p>
							<p className="p-2">
								<strong className="lg:px-4">Department:</strong>{" "}
								{selectedStudent.department.name}
							</p>
						</div>
						<p className="pt-4 pb-3">
							Additional Information To verify Student
						</p>
						<div className="flex flex-col space-y-2">
							<label
								htmlFor="name"
								className="uppercase text-sm mt-2"
							>
								Phone Number
								<span className="text-red-400 m-1">*</span>
							</label>
							<Input
								name="sentencedPeriod"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								className="mb-4 w-96"
							/>
							<UploadCenter
								text={"Ducument"}
								color={"bg-gray-500"}
								info={"Upload student document"}
								setFile={setFile}
							/>
							<Row className="mt-12 justify-around ">
								<Button
									onClick={onVerify}
									style={{
										width: "48%",
										color: "white",
										backgroundColor: "#0085FF",
									}}
								>
									Verify
								</Button>
								<Button
									onClick={onDecline}
									style={{
										width: "48%",
										color: "white",
										backgroundColor: "#FF0000",
									}}
								>
									Declined
								</Button>
							</Row>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default VerifyStudent;
