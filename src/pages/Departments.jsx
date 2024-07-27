import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import DepartmentsCard from "./DepartmentsCard";
import { Link } from "react-router-dom";

function Departments() {
	const [query, setQuery] = useState("");
	const [departments, setDepartments] = useState([]);
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [filterCriteria, setFilterCriteria] = useState({
		name: "",
		departmentCode: "",
	});

	useEffect(() => {
		const fetchDepartments = async () => {
			try {
				const response = await axios.get(
					`${process.env.API_URL}/department/getAllDepartments`
				);
				setDepartments(response.data.departments);
			} catch (error) {
				console.error("Error fetching departments:", error);
			}
		};

		fetchDepartments();
	}, []);

	const handleSearch = (e) => {
		e.preventDefault();
	};

	const handleFilterChange = (e) => {
		setFilterCriteria({
			...filterCriteria,
			[e.target.name]: e.target.value,
		});
	};

	const toggleFilterModal = () => {
		setIsFilterOpen(!isFilterOpen);
	};
	console.log(departments);
	const filteredDepartments = departments.filter((department) => {
		const matchesName = department.name
			.toLowerCase()
			.includes(filterCriteria.name.toLowerCase());
		// const matchesDepartmentCode = department.departmentCode
		// 	.toLowerCase()
		// 	.includes(filterCriteria.departmentCode.toLowerCase());
		const matchesQuery =
			query === "" ||
			department.name.toLowerCase().includes(query.toLowerCase());
		// department.departmentCode
		// 	.toLowerCase()
		// 	.includes(query.toLowerCase());
		return matchesName && matchesQuery;
	});

	return (
		<div className="bg-white p-10 rounded-lg">
			{/* Intro */}
			<h1 className="text-3xl font-bold mt-5">All Departments</h1>
			<p>All Departments Given By Our College</p>
			<div className="flex justify-between items-center mt-7">
				{/* Search */}
				<div className="w-full max-w-lg">
					<form onSubmit={handleSearch} className="mb-4">
						<div className="relative text-gray-900">
							<span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<FaSearch className="text-gray-900" />
							</span>
							<input
								type="text"
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								className="px-20 py-2 text-gray-900 rounded-lg shadow-md"
								placeholder="Search Departments"
							/>
						</div>
					</form>
					{query && filteredDepartments.length === 0 && (
						<div className="text-red-500">
							No departments found matching your query.
						</div>
					)}
				</div>
				<div className="flex space-x-4">
					<Link
						to="/adddepartment"
						className="bg-[#266994] hover:scale-110 text-white font-bold py-1 px-4"
					>
						Add Department
					</Link>
					<Link
						to="/managedepartment"
						className="bg-[#2C4455] font-bold hover:scale-110 text-white py-1 px-4"
					>
						Manage
					</Link>
					<button
						className="bg-[#6A90A9] text-white hover:scale-110 py-1 font-bold px-4"
						onClick={toggleFilterModal}
					>
						Filter
					</button>
				</div>
			</div>
			{/* Filter Modal */}
			{isFilterOpen && (
				<div className="fixed inset-0 flex items-center justify-center z-50">
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<h2 className="text-xl font-bold mb-4">
							Filter Departments
						</h2>
						<div className="mb-4">
							<label className="block text-gray-700">
								Department Name
							</label>
							<input
								type="text"
								name="name"
								value={filterCriteria.name}
								onChange={handleFilterChange}
								className="w-full p-2 border border-gray-300 rounded-lg"
								placeholder="Enter department name"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-gray-700">
								Department Code
							</label>
							<input
								type="text"
								name="departmentCode"
								value={filterCriteria.departmentCode}
								onChange={handleFilterChange}
								className="w-full p-2 border border-gray-300 rounded-lg"
								placeholder="Enter department code"
							/>
						</div>
						<div className="flex justify-end space-x-4">
							<button
								className="bg-gray-500 text-white py-1 px-4 rounded-lg"
								onClick={toggleFilterModal}
							>
								Cancel
							</button>
							<button
								className="bg-blue-500 text-white py-1 px-4 rounded-lg"
								onClick={toggleFilterModal}
							>
								Apply
							</button>
						</div>
					</div>
				</div>
			)}
			{/* Cards */}
			<div className="lg:grid my-10 px-2 grid-cols-3 gap-10">
				{filteredDepartments.map((department) => (
					<DepartmentsCard
						key={department.id}
						department={department}
						showdescription={false}
					/>
				))}
			</div>
		</div>
	);
}

export default Departments;
