import React, { useState } from "react";
import { Layout, Menu, Typography, theme } from "antd";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link, Outlet } from "react-router-dom";

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

  const items = [
    getItem(
      <Link to="/" className="text-base">
        DashBoard
      </Link>,
      "DashBoard",
      <DashboardIcon style={{ fontSize: "20px" }} />
    ),
    getItem(
      <Link to="/register" className="text-base">
        Registration
      </Link>,
      "Registration",
      <DashboardIcon style={{ fontSize: "20px" }} />
    ),
    getItem(
      <Link to="/students" className="text-base">
        Student
      </Link>,
      "Student",
      <DashboardIcon style={{ fontSize: "20px" }} />
    ),
    getItem(
      <Link to="/courses" className="text-base">
        Course
      </Link>,
      "Course",
      <DashboardIcon style={{ fontSize: "20px" }} />,
      [
        getItem(
          <Link to="/allcourse" className="text-sm">
            All Courses
          </Link>,
          "All Courses"
        ),
        getItem(
          <Link to="/addcourse" className="text-sm">
            Add Course
          </Link>,
          "Add Courses"
        ),
        getItem(
          <Link to="/managecourse" className="text-sm">
            Manage Course
          </Link>,
          "Manage Courses"
        ),
      ]
    ),
    getItem(
      <Link to="/classroom" className="text-base">
        Class Room
      </Link>,
      "Class Room",
      <DashboardIcon style={{ fontSize: "20px" }} />
    ),
    getItem(
      <Link to="/grading" className="text-base">
        Grading
      </Link>,
      "Grading",
      <DashboardIcon style={{ fontSize: "20px" }} />
    ),
    getItem(
      <Link to="/staffprofile" className="text-base">
        Staff profile
      </Link>,
      "Staff profile",
      <DashboardIcon style={{ fontSize: "20px" }} />
    ),
    getItem(
      <Link to="/examscheduling" className="text-base">
        Exam Scheduling
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
            <img src="src/assets/images/fdre_logo.png" alt="logo" />
          </div>
          <div className="text">
            <h1 className="text-base">College Management</h1>
            <p className="text-sm opacity-75">Kilinto Maremia</p>
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
            <Title level={4}>{current}</Title>
            <div className="flex flex-row gap-2 items-center">
              <div className="logo w-14">
                <img src="src/assets/images/Avatar.jpg" alt="logo" />
              </div>
              <div className="text">
                <h1 className="text-base">John Peter</h1>
                <p className="text-sm opacity-75">teacher</p>
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
          The Footer
        </Footer>
      </Layout>
    </Layout>
  );
};
// export default App;

// function RootLayout() {
//   return (
//     <div className='flex flex-row w-full h-screen gap-8 bg-[#E9E9E9]'>
//       <SideBar />
//       <div className='w-full h-screen'>
//         <Navbar />
//         <section >
//             <Outlet />
//         </section>
//       </div>
//     </div>
//   )
// }

export default RootLayout;
