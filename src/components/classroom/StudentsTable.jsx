import { Space, Table, Button } from "antd";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { useEffect, useState } from "react";
import NewStudentDrawer from "./NewStudentDrawer.jsx";
import axios from "axios";

const columns = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
		render: (text) => <a>{text}</a>,
		onHeaderCell: () => ({
			style: { backgroundColor: "#7c7c80", color: "#fff" },
		}),
	},
	{
		title: "ID No.",
		dataIndex: "id",
		key: "id",
		onHeaderCell: () => ({
			style: { backgroundColor: "#7c7c80", color: "#fff" },
		}),
	},
	{
		title: "Year",
		dataIndex: "year",
		key: "year",
		onHeaderCell: () => ({
			style: { backgroundColor: "#7c7c80", color: "#fff" },
		}),
	},
	{
		title: "Type",
		dataIndex: "registrationType",
		key: "type",
		onHeaderCell: () => ({
			style: { backgroundColor: "#7c7c80", color: "#fff" },
		}),
	},
	{
		title: "Operations",
		key: "action",
		onHeaderCell: () => ({
			style: { backgroundColor: "#7c7c80", color: "#fff" },
		}),
		render: () => (
			<Space size="middle">
				<Button type="primary" danger ghost>
					Delete
				</Button>
			</Space>
		),
	},
];

// eslint-disable-next-line react/prop-types
const StudentsTable = ({ data, classroomId }) => {
	const [student, setStudent] = useState([]);
	const [drawerVisiblity, setDrawerVisiblity] = useState(false);
	const handleClick = () => {
		setDrawerVisiblity((prevState) => !prevState);
	};
	useEffect(() => {
		setStudent(data);
	}, [data]);
	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			render: (text) => <a>{text}</a>,
			onHeaderCell: () => ({
				style: { backgroundColor: "#7c7c80", color: "#fff" },
			}),
		},
		{
			title: "ID No.",
			dataIndex: "id",
			key: "id",
			onHeaderCell: () => ({
				style: { backgroundColor: "#7c7c80", color: "#fff" },
			}),
		},
		{
			title: "Year",
			dataIndex: "year",
			key: "year",
			onHeaderCell: () => ({
				style: { backgroundColor: "#7c7c80", color: "#fff" },
			}),
		},
		{
			title: "Type",
			dataIndex: "registrationType",
			key: "type",
			onHeaderCell: () => ({
				style: { backgroundColor: "#7c7c80", color: "#fff" },
			}),
		},
		{
			title: "Operations",
			key: "action",
			onHeaderCell: () => ({
				style: { backgroundColor: "#7c7c80", color: "#fff" },
			}),
			render: (_, record) => (
				<Space size="middle">
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

	const onDelete = async (id) => {
		try {
			const response = await axios.delete(
				`${process.env.API_URL}/classroom/removeStudent/${id}/${classroomId}`
			);
			console.log(response.data);
			await reload();
		} catch (error) {
			console.error(error);
		}
	};
	console.log(student);
	return (
		<div>
			<Button
				className="bg-[#7c7c80] mb-2"
				type="primary"
				onClick={handleClick}
			>
				<AddBoxOutlinedIcon />
				Add student
			</Button>
			{drawerVisiblity && (
				<NewStudentDrawer
					classroomId={classroomId}
					data={student}
					visiblity={drawerVisiblity}
					setStudent={setStudent}
					handleClick={handleClick}
				/>
			)}
			<Table
				className="w-[900px]"
				columns={columns}
				dataSource={student.map((item, index) => ({
					...item,
					key: item.id,
				}))}
			/>
		</div>
	);
};
export default StudentsTable;
