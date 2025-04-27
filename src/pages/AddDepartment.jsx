import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiCloudUpload, BiTrash } from "react-icons/bi";
import Select from "react-select";
import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Form } from "antd";
import ComboBox from "../components/ComboBox";
import { courseOptions } from "../data/classroomArrayData";

const AddDepartment = ({ isEdit }) => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [options, setOptions] = useState([]);
	const [courses, setCourses] = useState([]);
	const [departmentCourses, setDepartmentCourses] = useState([]);
	const [instructors, setInstructors] = useState([]);
	const [college, setCollege] = useState([]);
	const [form, setForm] = useState({
		id: "",
		name: "",
		departmentCode: "",
		totalYear: 0,
		totalSemester: 0,
		description: "",
		courses: null,
		instructor: null,
	});
	const [errors, setErrors] = useState({});
	const [apiError, setApiError] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCourses, setSelectedCourses] = useState([]);
	const [selectedDepartment, setSelectedDepartment] = useState([]);
	const [selectedInstructor, setSelectedInstructor] = useState({});
	const [selectedCollege, setSelectedCollege] = useState({});
	var semesters = [];
	console.log(selectedCourses);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`${process.env.API_URL}/course/getAllCourses`
				); // Replace with your API endpoint
				console.log(response.data)

				let courses = response.data.courses.map((course) => ({
					value: course.id,
					label: course.name,
				}));
				
				setCourses(courses); // Assuming the response data is an array
			} catch (error) {
				console.error("Error fetching data:", error);
				setApiError("Failed to fetch department options.");
			}
			try {
				const response = await axios.get(
					`${process.env.API_URL}/college/getAllColleges`
				); // Replace with your API endpoint
				console.log(response.data)
				let courses = response.data.colleges.map((college) => ({
					value: college.id,
					label: college.name,
				}));
				
				setCollege(courses); // Assuming the response data is an array
			} catch (error) {
				console.error("Error fetching data:", error);
				setApiError("Failed to fetch department options.");
			}
		};

		fetchData();
	}, []);
	console.log(college);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`${process.env.API_URL}/department/getAllDepartments`
				); // Replace with your API endpoint
				setOptions(response.data.data); // Assuming the response data is an array
			} catch (error) {
				console.error("Error fetching data:", error);
				setApiError("Failed to fetch department options.");
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`${process.env.API_URL}/user/getAllUsers`
				); // Replace with your API endpoint
				setInstructors(response.data.users); // Assuming the response data is an array
			} catch (error) {
				console.error("Error fetching data:", error);
				setApiError("Failed to fetch instructor options.");
			}
		};

		fetchData();
	}, []);

	const fetchDepartment = async (selectedDepartment) => {
		try {
			const response = await axios.get(
				`${process.env.API_URL}/course/getCourseByDepartmentId/${selectedDepartment.id}`
			); // Replace with your API endpoint
			console.log(response.data);
			setDepartmentCourses(response.data.courses);
			const data = semesters.map((item, index) => {
				return calculateIndex(response.data.courses, index);
			});
			console.log(data);
			setSelectedCourses(data);
		} catch (error) {
			setDepartmentCourses([]);
			setSelectedCourses(
				Array(Number(selectedDepartment.totalSemester)).fill([])
			);
			console.error("Error fetching data:", error);
			setApiError("Failed to fetch department options.");
		}
	};

	const handleChange = (selectedOption, actionMeta) => {
		if (selectedOption) {
			setForm((prevForm) => ({
				...prevForm,
				[actionMeta.name]: selectedOption.value,
			}));
			if (actionMeta.name === "instructor") {
				setSelectedInstructor(selectedOption);
			}
			if (actionMeta.name === "collegeId") {
				setSelectedCollege(selectedOption);
			}
		} else {
			setForm((prevForm) => ({
				...prevForm,
				[actionMeta.name]: [],
			}));
		}
	};
	console.log(form);
	const validateForm = () => {
		let formErrors = {};
		if (!form.name) formErrors.name = "Department name is required";
		if (form.credit <= 0)
			formErrors.credit = "Credit hour must be greater than 0";
		if (form.lectureHour <= 0)
			formErrors.lectureHour = "Lecture hour must be greater than 0";
		if (!form.description)
			formErrors.description = "Department description is required";

		return formErrors;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formErrors = validateForm();
		if (Object.keys(formErrors).length > 0) {
			setErrors(formErrors);
			console.log(formErrors);
			return;
		}
		const courses = JSON.stringify(selectedCourses);
		try {
			const departmentData = {
				...form,
				courses: selectedCourses,
			};
			console.log(departmentData);
			const response = isEdit
				? await axios.put(
						`${process.env.API_URL}/department/updateDepartment/${form.id}`,
						departmentData
				  ) // Replace with your API endpoint
				: await axios.post(
						`${process.env.API_URL}/department/createDepartment`,
						departmentData
				  ); // Replace with your API endpoint

			console.log("Form submitted successfully:", response.data);
			setSuccessMessage(
				isEdit
					? "Department updated successfully!"
					: "Department added successfully!"
			);
			if (!isEdit) {
				setForm({
					id: "",
					name: "",
					departmentCode: "",
					credit: 0,
					lectureHour: 0,
					description: "",
					courses: null,
					instructor: null,
				});
			} else {
				setTimeout(() => {
					navigate("/alldepartment"); // Redirect to the departments list page or another appropriate page
				}, 1000);
			}
			setErrors({});
			setApiError("");
		} catch (error) {
			console.error("Error submitting form:", error);
			setApiError("Failed to submit the form.");
		}
	};

	const handleDelete = async () => {
		if (
			!window.confirm("Are you sure you want to delete this department?")
		) {
			return;
		}

		try {
			await axios.delete(
				`${process.env.API_URL}/department/deleteDepartment/${form.id}`
			); // Replace with your API endpoint
			setSuccessMessage("Department deleted successfully!");
			setForm({
				id: "",
				name: "",
				departmentCode: "",
				credit: 0,
				lectureHour: 0,
				description: "",
				courses: null,
				instructor: null,
			});
			setErrors({});
			setApiError("");
			setTimeout(() => {
				navigate("/departments"); // Redirect to the departments list page or another appropriate page
			}, 1500);
		} catch (error) {
			console.error("Error deleting department:", error);
			setApiError("Failed to delete the department.");
		}
	};

	const filteredDepartments = options.filter((option) =>
		option.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleDepartmentSelection = async (department) => {
		setForm({
			id: department.id,
			name: department.name,
			totalSemester: department.totalSemester,
			totalYear: department.totalYear,
			description: department.description,
			collegeId: department.college.id,
			instructor: department.departmentHead.id,
		});
		console.log(department);
		console.log({
			value: department.departmentHead.id,
			label: `${department.departmentHead.name} - ${department.departmentHead.title}`,
		});
		setSelectedInstructor({
			value: department.departmentHead.id,
			label: `${department.departmentHead.name} - ${department.departmentHead.title}`,
		});
		setSelectedCollege({
			value: department.college.id,
			label: `${department.college.name}`,
		});
		try {
			const response = await axios.get(
				`${process.env.API_URL}/course/getCourseByDepartmentId/${department.id}`
			); // Replace with your API endpoint
			console.log(response.data);
			setDepartmentCourses(response.data.courses);
			const data = Array(Number(department.totalSemester))
				.fill([])
				.map((item, index) => {
					return calculateIndex(response.data.courses, index);
				});
			console.log(data);
			setSelectedCourses(data);
		} catch (error) {
			setDepartmentCourses([]);
			setSelectedCourses(
				Array(Number(department.totalSemester)).fill([])
			);
			console.error("Error fetching data:", error);
			setApiError("Failed to fetch department options.");
		}
		// setSelectedCourses(Array(Number(department.totalSemester)).fill([]));
		setSelectedDepartment(department);
		setSearchTerm("");
	};

	const calculateIndex = (departmentCourses, index) => {
		index = index + 1;
		const data = departmentCourses.filter((course) => {
			if (course.semester == 1) {
				return course.year + course.year - 1 == index;
			} else {
				return course.year * 2 == index;
			}
		});
		return data.map((course) => course.courseId);
		// if (selectedDepartment)
	};
	console.log(departmentCourses);
	// console.log(calculateIndex(3));
	return (
		<div className="bg-white mx-60 rounded-2xl">
			<h1 className="text-center font-bold text-2xl pt-4 pb-10">
				{isEdit ? "Manage Department" : "Add Department"}
			</h1>
			{isEdit && (
				<div className="mb-4">
					<input
						type="text"
						placeholder="Search for a department..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="mx-10 w-1/3 px-3 py-2 rounded-lg bg-gray-200 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
					/>
				</div>
			)}
			{isEdit && searchTerm && (
				<div className="mb-4">
					{filteredDepartments.map((department, index) => (
						<div
							key={index}
							className="py-2 px-4 border-b cursor-pointer hover:bg-gray-100"
							onClick={() =>
								handleDepartmentSelection(department)
							}
						>
							<p className="font-bold">{department.name}</p>
							<p className="text-sm text-gray-600">
								{department.departmentCode}
							</p>
						</div>
					))}
				</div>
			)}
			<form onSubmit={handleSubmit} className="px-10">
				<div>
					<p className="text-[#2A467C] text-opacity-70 font-bold mb-1">
						Department Name
					</p>
					<input
						name="name"
						type="text"
						className="py-2 px-6 rounded-lg text-left w-full"
						placeholder="Click to enter value"
						value={form.name}
						onChange={(e) =>
							setForm({ ...form, name: e.target.value })
						}
					/>
					{errors.name && (
						<div className="text-red-500">{errors.name}</div>
					)}
				</div>
				<div className="flex mt-5 mr-20">
					<div>
						<p className="text-[#2A467C] text-opacity-70 font-bold mb-1">
							Total Year
						</p>
						<input
							name="departmentCode"
							type="text"
							className="py-2 px-6 rounded-lg text-left"
							placeholder="Code"
							value={form.totalYear}
							onChange={(e) => {
								setForm({
									...form,
									totalYear: e.target.value,
									totalSemester: e.target.value * 2,
								});
								setSelectedCourses(
									Array(e.target.value * 2).fill([])
								);
							}}
						/>
						{errors.totalYear && (
							<div className="text-red-500">
								{errors.totalYear}
							</div>
						)}
					</div>
					<div>
						<p className="text-[#2A467C] text-opacity-70 font-bold mb-1">
							Total Semester
						</p>
						<input
							name="credit"
							type="number"
							className="py-2 px-6 text-left"
							placeholder="2"
							value={form.totalSemester}
							onChange={(e) => {
								setForm({
									...form,
									totalSemester: e.target.value,
								});
								setSelectedCourses(
									Array(Number(e.target.value)).fill([])
								);
							}}
						/>
						{errors.totalSemester && (
							<div className="text-red-500">
								{errors.totalSemester}
							</div>
						)}
					</div>
				</div>
				<div>
					<p className="text-[#2A467C] text-opacity-70 font-bold mb-1">
						Department Description
					</p>
					<textarea
						name="description"
						className="w-full px-3 py-2 rounded-lg bg-[#E6E6E6] border-2 border-gray-300 focus:outline-none focus:border-blue-500"
						placeholder="Describe the department"
						style={{ resize: "none", height: "150px" }}
						value={form.description}
						onChange={(e) =>
							setForm({ ...form, description: e.target.value })
						}
					/>
					{errors.description && (
						<div className="text-red-500">{errors.description}</div>
					)}
				</div>
				<div>
					<Form>
						{selectedCourses &&
							selectedCourses.map((item, index) => (
								<Form.Item
									key={index}
									name="courses"
									label={`Semister ${index + 1}`}
									rules={[
										{
											required: true,
											message:
												"Please select atleast one course",
										},
									]}
								>
									<ComboBox
										onChange={setSelectedCourses}
										defaults={selectedCourses[index]}
										options={courses}
										// defaults={courses.filter((item) =>
										// 	calculateIndex(index).includes(item.value)
										// )}
										index={index}
									/>
								</Form.Item>
							))}
					</Form>
				</div>
				<div>
					<p className="text-[#2A467C] text-opacity-70 font-bold mb-1">
						Dine instructor
					</p>
					<Select
						name="instructor"
						options={instructors.map((instr) => ({
							value: instr.id,
							label: `${instr.name} - ${instr.title}`,
						}))}
						className="basic-multi-select"
						classNamePrefix="select"
						onChange={handleChange}
						value={selectedInstructor}
					/>
					{errors.instructor && (
						<div className="text-red-500">{errors.instructor}</div>
					)}
				</div>
				<div>
					<p className="text-[#2A467C] text-opacity-70 font-bold mb-1">
						College
					</p>
					<Select
						name="collegeId"
						options={college}
						className="basic-multi-select"
						classNamePrefix="select"
						onChange={handleChange}
						value={selectedCollege}
					/>
					{errors.instructor && (
						<div className="text-red-500">{errors.instructor}</div>
					)}
				</div>
				{apiError && (
					<div className="text-red-500 text-center font-bold text-xl mt-2 mb-4">
						{apiError}
					</div>
				)}
				{successMessage && (
					<div className="text-green-500 text-center font-bold mt-2 mb-4">
						{successMessage}
					</div>
				)}
				<div className="flex justify-center mt-5">
					<button
						type="submit"
						className="bg-[#3B54AB] mb-5 px-5 py-1 text-white font-bold"
					>
						<BiCloudUpload className="inline-block text-2xl mr-1 mb-1" />{" "}
						{isEdit ? "Update" : "Submit"}
					</button>
				</div>
				{isEdit && (
					<div className="flex justify-center">
						<button
							type="button"
							onClick={handleDelete}
							className="bg-red-500 mb-5 px-5 py-1 text-white font-bold"
						>
							<BiTrash className="inline-block text-2xl mr-1 mb-1" />{" "}
							Delete
						</button>
					</div>
				)}
			</form>
		</div>
	);
};

export default AddDepartment;
