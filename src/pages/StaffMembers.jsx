import React, { useEffect, useState } from "react";
import { Table, message, Input, Dropdown, Button, Popconfirm } from "antd";
import axios from "axios";
import { EllipsisOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Search } = Input;

const StaffMembers = () => {
	const [users, setUsers] = useState([]);
	const [filteredUsers, setFilteredUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await axios.get(
					`${process.env.API_URL}/user/getAllUsers`
				);
				if (response.status === 200) {
					setUsers(response.data.users);
					setFilteredUsers(response.data.users);
				} else if (response.status === 404) {
					message.error("No user found");
				} else {
					message.error("Error fetching users data");
				}
			} catch (error) {
				message.error("No user found");
			}
		};

		fetchUsers();
	}, []);

	const handleRowClick = (record) => {
		setSelectedUser(record);
	};

	const handleSearch = (value) => {
		const filteredData = users.filter(
			(user) =>
				user.name.toLowerCase().includes(value.toLowerCase()) ||
				user.id.toString().includes(value)
		);
		setFilteredUsers(filteredData);
	};

	const confirm = (e, id) => {
		try {
			const response = axios.delete(
				`${process.env.API_URL}/user/deleteUser/${e}`
			);
			message.success("User deleted successfully");
		} catch (error) {
			message.error("Failed to delete the user");
		}
		console.log(e);
		message.success("Click on Yes");
	};

	const action = (id) => [
		{
			key: "1",
			label: (
				<Link
					to={`/editstaff/${id}`}
					type="text"
					style={{
						color: "#1890ff",
					}}
					className="w-full"
				>
					Edit
				</Link>
			),
		},
		{
			key: "2",
			label: (
				<Popconfirm
					title="Delete the task"
					description="Are you sure to delete this task?"
					onConfirm={() => confirm(id)}
					okText="Yes"
					cancelText="No"
				>
					<p
						type="text"
						style={{
							color: "red",
						}}
						className="w-full"
					>
						Delete
					</p>
				</Popconfirm>
			),
		},
	];

	const userColumns = [
		{
			title: "Profile",
			dataIndex: "image",
			render: (image) => {
				return (
					<img
						src={`${process.env.API_URL}/image/${image}`}
						className=" w-8 h-8 rounded-full"
					/>
				);
			},
			key: "image",
		},
		{ title: "Id", dataIndex: "id", key: "id" },
		{ title: "Name", dataIndex: "name", key: "name" },

		{ title: "Role", dataIndex: "role", key: "role" },
		{
			render: (_, record) => (
				<Dropdown
					menu={{ items: action(record.id) }}
					trigger={["click"]}
				>
					<Button type="text" icon={<EllipsisOutlined />} />
				</Dropdown>
			),
		},
	];

	const courseColumns = [
		{ title: "Completed", dataIndex: "completed", key: "completed" },
		{ title: "Ongoing", dataIndex: "ongoing", key: "ongoing" },
		{ title: "Future", dataIndex: "future", key: "future" },
	];

	return (
		<div className="m-8 p-8 bg-white rounded-lg">
			<h1 className="text-2xl font-bold mb-4">Registered Users</h1>
			<div className="flex justify-between items-center">
				<Search
					placeholder="Search by Name or ID"
					enterButton="Search"
					size="medium"
					onSearch={handleSearch}
					className="mb-4 w-72 ml-16"
				/>
				<Link
					to="/addstaff"
					className="bg-[#1e67d4] hover:scale-110 text-white font-bold py-1 px-4 rounded-lg mb-4"
				>
					Add Course
				</Link>
			</div>
			<div className="lg:flex justify-evenly p-4 mx-10 bg-gray-100 rounded-lg">
				<div className="w-full px-8 m-3 mt-6">
					<Table
						dataSource={filteredUsers}
						columns={userColumns}
						rowKey="id"
						onRow={(record) => ({
							onClick: () => handleRowClick(record),
						})}
					/>
				</div>
				{selectedUser && (
					<div className="w-full px-8 bg-white rounded-lg m-3 lg:mt-6 flex flex-col">
						<div className="justify-center mb-5 items-center lg:ml-24 lg:mt-16">
							<img
								src={`${process.env.API_URL}/image/${selectedUser.image}`}
								className="lg:w-44 w-32 lg:h-36 h-24 rounded-full"
							/>
						</div>
						<div className="mt-3">
							<p className="p-2">
								<strong className="lg:px-4">Name:</strong>{" "}
								{selectedUser.name}
							</p>
							<p className="p-2">
								<strong className="lg:px-4">Email:</strong>{" "}
								{selectedUser.email}
							</p>
							<p className="p-2">
								<strong className="lg:px-4">Phone:</strong>{" "}
								{selectedUser.phone}
							</p>
							<p className="p-2">
								<strong className="lg:px-4">Role:</strong>{" "}
								{selectedUser.role}
							</p>
							<p className="p-2">
								<strong className="lg:px-4">Hired Date:</strong>{" "}
								{selectedUser.hireDate}
							</p>
							<p className="p-2">
								<strong className="lg:px-4">
									Education Level:
								</strong>{" "}
								{selectedUser.educationLevel}
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default StaffMembers;
