import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { DatePicker, Select, Input, Button, Checkbox, message } from "antd";
import axios from "axios";
import moment from "moment";
const { Option } = Select;

export const StudentRegistration = () => {
	const { t } = useTranslation();
	const [formData, setFormData] = useState({
		name: "",
		zone: "",
		age: "",
		registrationId: "",
		sentencedPeriod: "",
		crimeType: "",
		sentenceStartDate: null,
		releaseWithParole: null,
		releaseWithoutParole: null,
		status: "New",
		language: "Amharic",
		ethnicity: "",
		department: "",
		profileImage: "",
	});
	const [departments, setDepartments] = useState([]);
	const [errors, setErrors] = useState({});

	const ethnicities = [
		"Ethiopian",
		"Kenyan",
		"Arab",
		"Bengali",
		"Burmese",
		"Chinese",
		"Fulani",
		"Hausa",
		"Japanese",
		"Korean",
		"Maasai",
		"Amherican",
		"Pashtun",
		"Punjabi",
		"Sindhi",
	];

	useEffect(() => {
		const fetchDepartments = async () => {
			try {
				const response = await axios.get(
					"http://localhost:3001/departments"
				); //api to be corrected
				setDepartments(response.data);
			} catch (error) {
				message.error("Error fetching departments");
			}
		};

		fetchDepartments();
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		setErrors({ ...errors, [name]: "" });
	};

	const handleDateChange = (date, dateString, fieldName) => {
		setFormData({ ...formData, [fieldName]: dateString });
		setErrors({ ...errors, [fieldName]: "" });
	};

	const handleSelectChange = (value, fieldName) => {
		setFormData({ ...formData, [fieldName]: value });
		setErrors({ ...errors, [fieldName]: "" });
	};

	const handleImageUpload = (event) => {
		const uploadedFile = event.target.files[0];
		if (!uploadedFile) return;
		const reader = new FileReader();
		reader.readAsDataURL(uploadedFile);
		reader.onload = (e) =>
			setFormData({ ...formData, profileImage: e.target.result });
		reader.onerror = (error) => console.error(error);
	};

	const validateForm = () => {
		const newErrors = {};
		if (!formData.name) newErrors.name = "Name is required";
		if (!formData.zone) newErrors.zone = "Zone is required";
		if (!formData.age) newErrors.age = "Age is required";
		if (!formData.registrationId) newErrors.ID = "ID is required";
		if (!formData.sentencedPeriod)
			newErrors.sentencedPeriod = "Sentenced period is required";
		if (!formData.crimeType) newErrors.crimeType = "Crime type is required";
		if (!formData.sentenceStartDate)
			newErrors.sentenceStartDate = "Sentence start date is required";
		if (!formData.releaseWithParole)
			newErrors.releaseWithParole =
				"Release with parole date is required";
		if (!formData.releaseWithoutParole)
			newErrors.releaseWithoutParole =
				"Release without parole date is required";
		if (!formData.department)
			newErrors.department = "Department is required";
		if (!formData.profileImage)
			newErrors.profileImage = "Profile image is required";

		if (
			formData.sentenceStartDate &&
			formData.releaseWithParole &&
			formData.releaseWithoutParole
		) {
			if (
				new Date(formData.sentenceStartDate) >
				new Date(formData.releaseWithParole)
			) {
				newErrors.sentenceStartDate =
					"Start date must be earlier than the parole date";
			}
			if (
				new Date(formData.sentenceStartDate) >
				new Date(formData.releaseWithoutParole)
			) {
				newErrors.sentenceStartDate =
					"Start date must be earlier than the end date";
			}
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async () => {
		if (!validateForm()) {
			message.error("Please fill out all required fields correctly.");
			return;
		}

		try {
			const response = await axios.post(
				"http://localhost:3001/register",
				formData
			); // api to be corrected
			if (response.status === 201) {
				message.success("Student registered successfully");
				setFormData({
					name: "",
					zone: "",
					age: "",
					registrationId: "",
					sentencedPeriod: "",
					crimeType: "",
					sentenceStartDate: null,
					releaseWithParole: null,
					releaseWithoutParole: null,
					status: "New",
					language: "Amharic",
					ethnicity: "",
					department: "",
					profileImage: "",
				});
				setErrors({});
			} else {
				message.error("Error registering student");
			}
		} catch (error) {
			message.error("Error registering student");
		}
	};

	return (
		<div className="bg-white rounded-lg m-8 p-8 mb-32">
			<div className="lg:flex justify-between">
				<div className="m-2 p-4 flex-1">
					<div className="mb-4">
						<h1 className="text-2xl font-bold">
							{t("studentregistration")}
						</h1>
					</div>
					<div>
						<form>
							<div className="flex flex-col space-y-2">
								<label
									htmlFor="name"
									className="uppercase text-sm mt-2"
								>
									{t("fullname")}
									<span className="text-red-400 m-1">*</span>
								</label>
								<Input
									placeholder={t("enter")}
									name="name"
									value={formData.name}
									onChange={handleChange}
									className="mb-4 w-96"
								/>
								{errors.name && (
									<div className="text-red-500">
										{errors.name}
									</div>
								)}
							</div>
							<div className="flex space-y-2 m-4 items-center">
								<div className="mt-2">
									<label htmlFor="registrationId">
										{t("registrationId")}
										<span className="text-red-400 m-1">
											*
										</span>
									</label>
									<Input
										name="registrationId"
										value={formData.registrationId}
										onChange={handleChange}
										className="w-16 mb-4 mx-4"
									/>
									{errors.registrationId && (
										<div className="text-red-500">
											{errors.registrationId}
										</div>
									)}
								</div>
								<div className="mt-2">
									<label htmlFor="zone">
										{t("zone")}
										<span className="text-red-400 m-1">
											*
										</span>
									</label>
									<Input
										name="zone"
										value={formData.zone}
										onChange={handleChange}
										className="w-16 mb-4"
									/>
									{errors.zone && (
										<div className="text-red-500">
											{errors.zone}
										</div>
									)}
								</div>
								<div className="m-4">
									<label htmlFor="age">
										{t("age")}
										<span className="text-red-400 m-1">
											*
										</span>
									</label>
									<Input
										name="age"
										value={formData.age}
										onChange={handleChange}
										className="w-16 mb-4"
									/>
									{errors.age && (
										<div className="text-red-500">
											{errors.age}
										</div>
									)}
								</div>
								<div>
									<label htmlFor="sentencedPeriod">
										{t("period")}
										<span className="text-red-400 m-1">
											*
										</span>
									</label>
									<Input
										name="sentencedPeriod"
										value={formData.sentencedPeriod}
										onChange={handleChange}
										className="w-16 mb-4"
									/>
									{errors.sentencedPeriod && (
										<div className="text-red-500">
											{errors.sentencedPeriod}
										</div>
									)}
								</div>
							</div>
							<div className="flex flex-col space-y-2">
								<label
									htmlFor="crimeType"
									className="uppercase text-sm mt-2"
								>
									{t("crime")}
									<span className="text-red-400 m-1">*</span>
								</label>
								<Input
									placeholder={t("enter")}
									name="crimeType"
									value={formData.crimeType}
									onChange={handleChange}
									className="mb-4 w-96"
								/>
								{errors.crimeType && (
									<div className="text-red-500">
										{errors.crimeType}
									</div>
								)}
							</div>
							<div className="flex flex-col space-y-2 mt-2">
								<label
									htmlFor="sentenceStartDate"
									className="uppercase text-sm mt-2"
								>
									{t("start")}
									<span className="text-red-400 m-1">*</span>
								</label>
								<DatePicker
									name="sentenceStartDate"
									value={
										formData.sentenceStartDate
											? moment(formData.sentenceStartDate)
											: null
									}
									onChange={(date, dateString) =>
										handleDateChange(
											date,
											dateString,
											"sentenceStartDate"
										)
									}
									className="w-96 mb-4"
								/>
								{errors.sentenceStartDate && (
									<div className="text-red-500">
										{errors.sentenceStartDate}
									</div>
								)}
							</div>
							<div className="flex flex-col space-y-2 mt-2">
								<label
									htmlFor="releaseWithParole"
									className="uppercase text-sm mt-2"
								>
									{t("parol")}
									<span className="text-red-400 m-1">*</span>
								</label>
								<DatePicker
									name="releaseWithParole"
									value={
										formData.releaseWithParole
											? moment(formData.releaseWithParole)
											: null
									}
									onChange={(date, dateString) =>
										handleDateChange(
											date,
											dateString,
											"releaseWithParole"
										)
									}
									className="w-96 mb-4"
								/>
								{errors.releaseWithParole && (
									<div className="text-red-500">
										{errors.releaseWithParole}
									</div>
								)}
							</div>
							<div className="flex flex-col space-y-2 m-2">
								<label
									htmlFor="releaseWithoutParole"
									className="uppercase text-sm mt-2"
								>
									{t("end")}
									<span className="text-red-400 m-1">*</span>
								</label>
								<DatePicker
									name="releaseWithoutParole"
									value={
										formData.releaseWithoutParole
											? moment(
													formData.releaseWithoutParole
											  )
											: null
									}
									onChange={(date, dateString) =>
										handleDateChange(
											date,
											dateString,
											"releaseWithoutParole"
										)
									}
									className="w-96 mb-4"
								/>
								{errors.releaseWithoutParole && (
									<div className="text-red-500">
										{errors.releaseWithoutParole}
									</div>
								)}
							</div>
						</form>
					</div>
				</div>
				<div className="lg:w-0.5 lg:h-96 mt-32 mx-3 lg:bg-gray-500" />
				<div className="m-2 mt-16 ml-6 p-4 flex-1">
					<div className="flex flex-col space-y-2">
						<label
							htmlFor="department"
							className="uppercase text-sm mt-2"
						>
							{t("Department")}
							<span className="text-red-400 m-1">*</span>
						</label>
						<Select
							id="department"
							onChange={(value) =>
								handleSelectChange(value, "department")
							}
							className="w-64 mb-4"
						>
							<Option value="">{t("enterDepartment")}</Option>
							{departments.map((department, index) => (
								<Option key={index} value={department.name}>
									{department.name}
								</Option>
							))}
						</Select>
						{errors.department && (
							<div className="text-red-500">
								{errors.department}
							</div>
						)}
					</div>
					<div className="flex mt-4">
						<p className="uppercase p-2 mt-1">{t("status")}:</p>
						<div className="mt-3 ml-4">
							<Checkbox
								name="status"
								checked={formData.status === "New"}
								onChange={() =>
									setFormData({ ...formData, status: "New" })
								}
							>
								{t("new")}
							</Checkbox>
						</div>
						<div className="mt-3 ml-8">
							<Checkbox
								name="status"
								checked={formData.status === "Existing"}
								onChange={() =>
									setFormData({
										...formData,
										status: "Existing",
									})
								}
							>
								{t("existing")}
							</Checkbox>
						</div>
					</div>
					<div className="flex mt-4">
						<p className="uppercase p-2 mt-1">{t("language")}:</p>
						<div className="mt-3 ml-4">
							<Checkbox
								name="language"
								checked={formData.language === "Amharic"}
								onChange={() =>
									setFormData({
										...formData,
										language: "Amharic",
									})
								}
							>
								{t("amharic")}
							</Checkbox>
						</div>
						<div className="mt-3 ml-8">
							<Checkbox
								name="language"
								checked={formData.language === "AfanOromo"}
								onChange={() =>
									setFormData({
										...formData,
										language: "AfanOromo",
									})
								}
							>
								{t("oromifa")}
							</Checkbox>
						</div>
						<div className="mt-3 ml-8">
							<Checkbox
								name="language"
								checked={formData.language === "English"}
								onChange={() =>
									setFormData({
										...formData,
										language: "English",
									})
								}
							>
								{t("english")}
							</Checkbox>
						</div>
					</div>

					<div className="flex mt-4">
						<label htmlFor="ethnicity" className="mx-2 uppercase">
							{t("ethnicity")}:
						</label>
						<Select
							id="ethnicity"
							onChange={(value) =>
								handleSelectChange(value, "ethnicity")
							}
							className="w-96 mb-4"
						>
							<Option value="">{t("entereth")}</Option>
							{ethnicities.map((ethnicity, index) => (
								<Option key={index} value={ethnicity}>
									{ethnicity}
								</Option>
							))}
						</Select>
					</div>
					<div className="flex flex-col space-y-2 mt-2">
						<label
							htmlFor="profileImage"
							className="uppercase text-sm mt-2"
						>
							{t("profileImage")}
							<span className="text-red-400 m-1">*</span>
						</label>
						<Input
							type="file"
							accept="image/*"
							onChange={handleImageUpload}
							className="w-64 mb-4"
						/>
						{errors.profileImage && (
							<div className="text-red-500">
								{errors.profileImage}
							</div>
						)}
					</div>
				</div>
			</div>
			<div className="flex justify-center mt-3 ml-56 md:ml-0">
				<Button
					type="primary"
					className="bg-blue-950 text-white rounded-full w-96 hover:bg-white hover:text-blue-300"
					onClick={handleSubmit}
				>
					{t("registerStudents")}
				</Button>
			</div>
		</div>
	);
};
