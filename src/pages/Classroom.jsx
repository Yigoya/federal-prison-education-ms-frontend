import { useEffect, useState } from "react";
import Selector from "../components/classroom/Selector.jsx";
import SectionsTable from "../components/classroom/SectionsTable.jsx";
import NewSectionDrawer from "../components/classroom/NewSectionDrawer.jsx";
import {
	departmentOptions,
	yearOptions,
	semesterOptions,
} from "../data/classroomArrayData.js";
import { Button } from "antd";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import axios from "axios";
const Classroom = () => {
	const [drawerVisiblity, setDrawerVisiblity] = useState(false);
	const [departments, setDepartments] = useState([]);
	const [departmentOption, setDepartmentOption] = useState([]);
	const [yearOption, setYearOption] = useState(yearOptions);
	const [selectedDepartment, setSelectedDepartment] = useState(null);
	const [selectedYear, setSelectedYear] = useState(null);
	const [selectedSemester, setSelectedSemester] = useState(null);
	const [classrooms, setClassrooms] = useState([]);
	const handleClick = () => {
		setDrawerVisiblity((prevState) => !prevState);
	};
	const fetchDepartment = async () => {
		try {
			const response = await axios.get(
				`${process.env.API_URL}/department/getAllDepartments`
			);
			console.log(response.data);
			const data = response.data.departments.map((department) => ({
				label: department.name,
				value: department.id,
			}));
			setDepartments(response.data.departments);
			setYearOption(Array(response.data.departments));
			setDepartmentOption(data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchDepartment();
	}, []);

	const reload = async () => {
		console.log("reload called");
		if (selectedDepartment && selectedYear && selectedSemester) {
			try {
				const response = await axios.get(
					`${process.env.API_URL}/classroom/getClassroom`,
					{
						params: {
							departmentId: selectedDepartment,
							year: selectedYear,
							semester: selectedSemester,
						},
					}
				);
				console.log(response.data);
				setClassrooms(response.data.classroom);
			} catch (error) {
				console.log(error);
			}
		}
	};

	const semisterChange = async (value) => {
		console.log(
			`selected ${value}, ${selectedDepartment}, ${selectedYear}`
		);
		try {
			const response = await axios.get(
				`${process.env.API_URL}/classroom/getClassroom`,
				{
					params: {
						departmentId: selectedDepartment,
						year: selectedYear,
						semester: value,
					},
				}
			);
			console.log(response.data);
			setClassrooms(response.data.classroom);
		} catch (error) {
			console.log(error);
		}
		setSelectedSemester(value);
	};

	const departmentChange = (value) => {
		console.log(`selected ${value}`);
		setSelectedDepartment(value);
		let year = departments.find(
			(department) => department.id === value
		).totalYear;
		console.log(year);
		setYearOption(
			Array(year)
				.fill(null)
				.map((_, i) => ({ label: i + 1, value: i + 1 }))
		);
		reload();
	};

	return (
		<div className="p-8 ">
			<Selector
				typeName="Department"
				options={departmentOption}
				onChange={departmentChange}
			/>
			<Selector
				disabled={!selectedDepartment}
				typeName="Batch"
				options={yearOption}
				onChange={(value) => {
					setSelectedYear(value);
					reload();
				}}
			/>
			<Selector
				disabled={!selectedYear}
				typeName="Semester"
				options={semesterOptions}
				onChange={semisterChange}
			/>

			{/* sections table */}
			<div className="mt-4">
				{drawerVisiblity && (
					<NewSectionDrawer
						reload={reload}
						options={{
							departmentId: selectedDepartment,
							year: selectedYear,
							semester: selectedSemester,
						}}
						visiblity={drawerVisiblity}
						handleClick={handleClick}
					/>
				)}
				<div className="grid justify-items-end">
					<Button
						disabled={
							!selectedDepartment ||
							!selectedYear ||
							!selectedSemester
						}
						className="bg-[#0085FF] mb-2"
						type="primary"
						onClick={handleClick}
					>
						<AddBoxOutlinedIcon />
						Add section
					</Button>
				</div>
				<SectionsTable data={classrooms} reload={reload} />
			</div>
		</div>
	);
};

export default Classroom;
