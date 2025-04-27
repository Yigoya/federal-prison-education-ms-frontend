import React, { useEffect, useState } from "react";
import { Table, message, Input } from "antd";
import axios from "axios";

const { Search } = Input;

const Students = () => {
	const [students, setStudents] = useState([]);
	const [filteredStudents, setFilteredStudents] = useState([]);
	const [selectedStudent, setSelectedStudent] = useState(null);

	useEffect(() => {
		const fetchStudents = async () => {
			try {
				const response = await axios.get(
					`${process.env.API_URL}/student/getAllStudents`
				); // Replace with your API endpoint

				console.log(response.data);
				setStudents(response.data.students);
				setFilteredStudents(response.data.students);
			} catch (error) {
				console.error("Error fetching students data:", error);
				message.error("Error fetching students data");
			}
		};

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

	const studentColumns = [
		{ title: "Id", dataIndex: "id", key: "id" },
		{ title: "Name", dataIndex: "name", key: "name" },
		{
			title: "Department",
			dataIndex: ["department", "name"],
			key: "department",
		},
		{ title: "Year", dataIndex: "year", key: "year" },
	];

	const courseColumns = [
		{ title: "Completed", dataIndex: "completed", key: "completed" },
		{ title: "Ongoing", dataIndex: "ongoing", key: "ongoing" },
		{ title: "Future", dataIndex: "future", key: "future" },
	];

	return (
		<div className="m-8 p-8 bg-white rounded-lg">
			<h1 className="text-2xl font-bold mb-4">Registered Students</h1>
			<Search
				placeholder="Search by Name or ID"
				enterButton="Search"
				size="medium"
				onSearch={handleSearch}
				className="mb-4 w-72 ml-16"
			/>
			<div className="lg:flex justify-evenly p-4 mx-10 bg-gray-100 rounded-lg">
				<div className="w-full px-8 m-3 mt-6">
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
					<div className="w-full px-8 bg-white rounded-lg m-3 lg:mt-6 flex flex-col">
						<div className="justify-center mb-5 items-center lg:ml-24 lg:mt-16">
							<img
								src={`${process.env.API_URL}/image/${selectedStudent.image}`}
								className="lg:w-44 w-32 lg:h-36 h-24 rounded-full"
							/>
						</div>
						<div className="mt-3">
							<p className="p-2">
								<strong className="lg:px-4">Name:</strong>{" "}
								{selectedStudent.name}
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
								<strong className="lg:px-4">Department:</strong>{" "}
								{selectedStudent.department.name}
							</p>
						</div>
					</div>
				)}
			</div>
			<div className="w-full m-3 mt-8">
				{selectedStudent && (
					<div className="w-full mt-4">
						<p className="p-6 font-bold text-2xl">Courses</p>
						<Table
							dataSource={selectedStudent.courses}
							columns={courseColumns}
							rowKey="id"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Students;
