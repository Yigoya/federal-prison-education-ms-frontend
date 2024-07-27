import React from "react";
import { FaArrowRight, FaEdit, FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const DepartmentsCard = ({ department, showdescription }) => {
	console.log(department);
	const id = department.id;
	const cid = department.departmentCode;
	const value = `/departmentdescription/${id}`;
	const manage = `/managedepartment/${id}`;
	return (
		<div>
			{!showdescription && (
				<Link to={value}>
					<div className="shadow-lg w-full my-5 pb-7 rounded-xl transform transition-transform duration-500 hover:scale-110">
						<img
							src="../src/assets/images/image.jpg"
							className=" rounded-t-3xl mb-0 w-full"
						/>
						<div className="flex justify-between items-center">
							<div className="text-xl px-3 font-medium pt-8  mt-0">
								{department.name}
							</div>
							<div className="mt-8 bg-[#7979BD] text-white font-bold px-3 ">
								{department.departmentCode}
							</div>
						</div>
						<p className="line-clamp-4  px-3 py-1">
							{department.description}
						</p>
					</div>
				</Link>
			)}
		</div>
	);
};

export default DepartmentsCard;
