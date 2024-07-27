import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Register from "./pages/Register";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import RootLayout from "./layout/RootLayout";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Login";
import Teachers from "./pages/Teachers";
import { useTranslation } from "react-i18next";
import { StudentRegistration } from "./pages/StudentRegistration";
import Classroom from "./pages/Classroom";
import StaffMembers from "./pages/StaffMembers";
import AddCourse from "./pages/AddCourse";
import CourseDescrition from "./pages/CourseDescrition";
import VerifyStudent from "./pages/VerifyStudent";
import Departments from "./pages/Departments";
import AddDepartment from "./pages/AddDepartment";
import AddStaff from "./pages/AddStaff";
import DepartmentDescrition from "./pages/DepartmentDescrition";
function App() {
	const [count, setCount] = useState(0);
	const { t } = useTranslation();
	console.log(process.env.API_URL);
	return (
		<>
			<Routes>
				<Route element={<AuthLayout />}>
					<Route path="/login" element={<Login />} />
				</Route>
				<Route element={<RootLayout />}>
					<Route path="/" element={<DashBoard />} />
					<Route path="/register" element={<StudentRegistration />} />
					<Route path="/verfystudent" element={<VerifyStudent />} />
					<Route path="/students" element={<Students />} />
					<Route path="/courses" element={<Courses />} />
					<Route path="/allcourse" element={<Courses />} />
					<Route path="/addcourse" element={<AddCourse />} />
					<Route
						path="/managecourse/:id"
						element={<AddCourse isEdit={true} />}
					/>
					<Route
						path="/managecourse"
						element={<AddCourse isEdit={true} />}
					/>
					<Route path="/departments" element={<Departments />} />
					<Route path="/alldepartment" element={<Departments />} />
					<Route path="/adddepartment" element={<AddDepartment />} />
					<Route
						path="/managedepartment/:id"
						element={<AddDepartment isEdit={true} />}
					/>
					<Route
						path="/managedepartment"
						element={<AddDepartment isEdit={true} />}
					/>
					<Route path="/classroom" element={<Classroom />} />
					<Route path="/grading" element={<Courses />} />
					<Route path="/staffprofile" element={<StaffMembers />} />
					<Route path="/addstaff" element={<AddStaff />} />
					<Route
						path="/editstaff/:id"
						element={<AddStaff edit={true} />}
					/>
					<Route path="/examscheduling" element={<Teachers />} />
					<Route
						path="/coursedescription/:id"
						element={<CourseDescrition />}
					/>
					<Route
						path="/departmentdescription/:id"
						element={<DepartmentDescrition />}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
