import React, { useEffect, useState } from "react";
import { Form, Input, DatePicker, Select, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import moment from "moment";
import { useParams } from "react-router-dom";

const { Option } = Select;

const AddStaff = ({ edit }) => {
	const [form] = Form.useForm();
	const [file, setFile] = useState(null);
	const { id } = useParams();
	const onFinish = async (values) => {
		const formData = new FormData();

		formData.append("image", file);

		const payload = {
			...values,
			birthDate: values.birthDate.toISOString(),
			hireDate: values.hireDate.toISOString(),
		};

		Object.keys(payload).forEach((key) => {
			formData.append(key, payload[key]);
		});
		if (edit) {
			try {
				const response = await axios.put(
					`${process.env.API_URL}/user/updateUser/${id}`,
					formData,
					{
						headers: {
							"Content-Type": "multipart/form-data",
						},
					}
				);
				message.success("Form submitted successfully!");
			} catch (error) {
				message.error("Failed to submit the form.");
			}
		} else {
			try {
				const response = await axios.post(
					`${process.env.API_URL}/user/createUser`,
					formData,
					{
						headers: {
							"Content-Type": "multipart/form-data",
						},
					}
				);
				message.success("Form submitted successfully!");
			} catch (error) {
				message.error("Failed to submit the form.");
			}
		}
	};

	useEffect(() => {
		if (edit) {
			const fetchUser = async () => {
				try {
					const response = await axios.get(
						`${process.env.API_URL}/user/getUserById/${id}`
					);
					const user = response.data.user;
					form.setFieldsValue({
						name: user.name,
						age: user.age,
						title: user.title
							? user.title.toUpperCase()
							: undefined,
						gender: user.gender,
						birthDate: moment(user.birthDate),
						hireDate: moment(user.hireDate),
						phone: user.phone,
						address: user.address,
						email: user.email,
						educationLevel: user.educationLevel,
						graduationInstitution: user.graduationInstitution,
						graduationDepartment: user.graduationDepartment,
						serviceYear: user.serviceYear,
						password: user.password,
						role: user.role,
						roleDescription: user.roleDescription,
					});
				} catch (error) {
					message.error("Error fetching user data");
				}
			};
			fetchUser();
		}
	});

	const handleFileChange = (info) => {
		console.log(info.file);
		setFile(info.file);
		if (info.file.status === "done") {
			message.success(`${info.file.name} file uploaded successfully`);
		} else if (info.file.status === "error") {
			message.error(`${info.file.name} file upload failed.`);
		}
	};

	return (
		<div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
			<h1 className="text-2xl font-bold mb-6 text-center">
				User Registration Form
			</h1>
			<Form
				form={form}
				layout="vertical"
				onFinish={onFinish}
				className="space-y-6"
			>
				<Form.Item
					name="name"
					label="Name"
					rules={[
						{ required: true, message: "Please input your name!" },
					]}
				>
					<Input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
				</Form.Item>

				<Form.Item
					name="age"
					label="Age"
					rules={[
						{ required: true, message: "Please input your age!" },
					]}
				>
					<Input
						type="number"
						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</Form.Item>

				<Form.Item
					name="title"
					label="Title"
					rules={[
						{
							required: true,
							message: "Please select your title!",
						},
					]}
				>
					<Select className="w-full px-0.5  border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
						<Option value="Mr.">Mr.</Option>
						<Option value="Ms.">Ms.</Option>
					</Select>
				</Form.Item>

				<Form.Item
					name="gender"
					label="Gender"
					rules={[
						{
							required: true,
							message: "Please select your gender!",
						},
					]}
				>
					<Select className="w-full px-0.5border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
						<Option value="MALE">Male</Option>
						<Option value="FEMALE">Female</Option>
					</Select>
				</Form.Item>

				<Form.Item
					name="birthDate"
					label="Birth Date"
					rules={[
						{
							required: true,
							message: "Please select your birth date!",
						},
					]}
				>
					<DatePicker className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
				</Form.Item>

				<Form.Item
					name="hireDate"
					label="Hire Date"
					rules={[
						{
							required: true,
							message: "Please select your hire date!",
						},
					]}
				>
					<DatePicker className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
				</Form.Item>

				<Form.Item
					name="phone"
					label="Phone"
					rules={[
						{
							required: true,
							message: "Please input your phone number!",
						},
					]}
				>
					<Input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
				</Form.Item>

				<Form.Item
					name="address"
					label="Address"
					rules={[
						{
							required: true,
							message: "Please input your address!",
						},
					]}
				>
					<Input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
				</Form.Item>

				<Form.Item
					name="email"
					label="Email"
					rules={[
						{ required: true, message: "Please input your email!" },
					]}
				>
					<Input
						type="email"
						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</Form.Item>

				<Form.Item
					name="educationLevel"
					label="Education Level"
					rules={[
						{
							required: true,
							message: "Please select your education level!",
						},
					]}
				>
					<Select className="w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
						<Option value="Degree">Degree</Option>
						<Option value="Master">Master</Option>
						<Option value="PhD">PhD</Option>
					</Select>
				</Form.Item>

				<Form.Item
					name="graduationInstitution"
					label="Graduation Institution"
					rules={[
						{
							required: true,
							message:
								"Please input your graduation institution!",
						},
					]}
				>
					<Input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
				</Form.Item>

				<Form.Item
					name="graduationDepartment"
					label="Graduation Department"
					rules={[
						{
							required: true,
							message: "Please input your graduation department!",
						},
					]}
				>
					<Input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
				</Form.Item>

				<Form.Item
					name="serviceYear"
					label="Service Year"
					rules={[
						{
							required: true,
							message: "Please input your service year!",
						},
					]}
				>
					<Input
						type="number"
						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</Form.Item>

				{!edit && (
					<Form.Item
						name="password"
						label="Password"
						rules={[
							{
								required: true,
								message: "Please input your password!",
							},
						]}
					>
						<Input.Password className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
					</Form.Item>
				)}

				<Form.Item
					name="role"
					label="Role"
					rules={[
						{ required: true, message: "Please input your role!" },
					]}
				>
					<Input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
				</Form.Item>

				<Form.Item
					name="roleDescription"
					label="Role Description"
					rules={[
						{
							required: true,
							message: "Please input your role description!",
						},
					]}
				>
					<Input className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
				</Form.Item>

				<Form.Item
					name="file"
					label="Upload Image"
					rules={[
						{ required: !edit, message: "Please upload an image!" },
					]}
				>
					<Upload
						name="image"
						listType="picture"
						maxCount={1}
						beforeUpload={() => false}
						onChange={handleFileChange}
					>
						<Button icon={<UploadOutlined />}>
							Click to Upload
						</Button>
					</Upload>
				</Form.Item>

				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
					>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default AddStaff;
