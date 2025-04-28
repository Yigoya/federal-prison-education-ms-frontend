import React, { useState } from "react";
import { Layout, Menu, Typography, theme, Button, Dropdown } from "antd";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/images/fdre_logo.png";
import Avatar from "../assets/images/Avatar.jpg";
import { useTranslation } from "react-i18next";
import { GlobalOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
	return {
		key,
		icon,
		children,
		label,
	};
}

const RootLayout = () => {
	const [current, setCurrent] = useState("Dashboard");
	const { Title, Text } = Typography;
	const { t, i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	const languageItems = [
		{
			key: "en",
			label: <span onClick={() => changeLanguage("en")}>English</span>,
		},
		{
			key: "am",
			label: <span onClick={() => changeLanguage("am")}>{t("amharic")}</span>,
		},
	];

	const items = [
		getItem(
			<Link to="/" className="text-base">
				{t("DashBoard")}
			</Link>,
			"DashBoard",
			<DashboardIcon style={{ fontSize: "20px" }} />
		),
		getItem(
			<Link to="/register" className="text-base">
				{t("Registration")}
			</Link>,
			"Registration",
			<DashboardIcon style={{ fontSize: "20px" }} />,
			[
				getItem(
					<Link to="/register" className="text-sm">
						{t("Register Student")}
					</Link>,
					"Register Student"
				),
				getItem(
					<Link to="/verfystudent" className="text-sm">
						{t("Verify Student")}
					</Link>,
					"Register"
				),
			]
		),
		getItem(
			<Link to="/students" className="text-base">
				{t("Student")}
			</Link>,
			"Student",
			<DashboardIcon style={{ fontSize: "20px" }} />
		),
		getItem(
			<Link to="/courses" className="text-base">
				{t("Course")}
			</Link>,
			"Course",
			<DashboardIcon style={{ fontSize: "20px" }} />,
			[
				getItem(
					<Link to="/allcourse" className="text-sm">
						{t("All Courses")}
					</Link>,
					"All Courses"
				),
				getItem(
					<Link to="/addcourse" className="text-sm">
						{t("Add Course")}
					</Link>,
					"Add Courses"
				),
				getItem(
					<Link to="/managecourse" className="text-sm">
						{t("Manage Course")}
					</Link>,
					"Manage Courses"
				),
			]
		),
		getItem(
			<Link to="/departments" className="text-base">
				{t("Department")}
			</Link>,
			"Department",
			<DashboardIcon style={{ fontSize: "20px" }} />,
			[
				getItem(
					<Link to="/alldepartment" className="text-sm">
						{t("All Department")}
					</Link>,
					"All Departments"
				),
				getItem(
					<Link to="/adddepartment" className="text-sm">
						{t("Add Department")}
					</Link>,
					"Add Department"
				),
				getItem(
					<Link to="/managedepartment" className="text-sm">
						{t("Manage Department")}
					</Link>,
					"Manage department"
				),
			]
		),
		getItem(
			<Link to="/classroom" className="text-base">
				{t("Class Room")}
			</Link>,
			"Class Room",
			<DashboardIcon style={{ fontSize: "20px" }} />
		),
		getItem(
			<Link to="/grading" className="text-base">
				{t("Grading")}
			</Link>,
			"Grading",
			<DashboardIcon style={{ fontSize: "20px" }} />
		),
		getItem(
			<Link to="/staffprofile" className="text-base">
				{t("Staff profile")}
			</Link>,
			"Staff profile",
			<DashboardIcon style={{ fontSize: "20px" }} />
		),
		getItem(
			<Link to="/examscheduling" className="text-base">
				{t("Exam Scheduling")}
			</Link>,
			"Exam Scheduling",
			<DashboardIcon style={{ fontSize: "20px" }} />
		),
	];

	const onClick = (e) => {
		setCurrent(e.key);
	};
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	return (
		<Layout hasSider>
			<Sider
				width={280}
				style={{
					overflow: "auto",
					height: "100vh",
					color: "white",
					position: "fixed",
					padding: "0 16px",
					left: 0,
					top: 0,
					bottom: 0,
				}}
			>
				<div className="demo-logo-vertical" />
				<div className="flex flex-row gap-2 items-center m-2 mb-6 mt-4">
					<div className="logo w-14">
						<img src={logo} alt="logo" />
					</div>
					<div className="text">
						<h1 className="text-base">{t("College Management")}</h1>
						<p className="text-sm opacity-75">{t("Kilinto Maremia")}</p>
					</div>
				</div>
				<Menu
					onClick={onClick}
					className=""
					theme="dark"
					mode="inline"
					defaultSelectedKeys={["DashBoard"]}
					items={items}
				/>
			</Sider>
			<Layout
				style={{
					marginLeft: 280,
				}}
			>
				<Header
					style={{
						height: "auto",
						padding: 0,
						background: colorBgContainer,
					}}
				>
					<div className="flex flex-row gap-2 items-center justify-between py-4 px-8">
						<Title level={4}>{t(current)}</Title>
						<div className="flex flex-row gap-4 items-center">
							<Dropdown
								menu={{ items: languageItems }}
								placement="bottomRight"
								arrow
							>
								<Button type="text" icon={<GlobalOutlined />}>
									{i18n.language === "en" ? "English" : t("amharic")}
								</Button>
							</Dropdown>
							<div className="flex flex-row gap-2 items-center">
								<div className="logo w-14">
									<img
										src={Avatar}
										alt="logo"
									/>
								</div>
								<div className="text">
									<h1 className="text-base">John Peter</h1>
									<p className="text-sm opacity-75">{t("teacher")}</p>
								</div>
							</div>
						</div>
					</div>
				</Header>
				<Content
					style={{
						margin: "24px 16px 0",
						overflow: "initial",
					}}
				>
					<Outlet />
				</Content>
				<Footer
					style={{
						textAlign: "center",
					}}
				>
					{t("The Footer")}
				</Footer>
			</Layout>
		</Layout>
	);
};

export default RootLayout;
