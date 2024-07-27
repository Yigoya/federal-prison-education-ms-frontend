import React from "react";
import { FaArrowRight, FaEdit, FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const CoursesCard = ({ course, showdescription }) => {
	console.log(course);
	const id = course.id;
	const cid = course.courseCode;
	const value = `/coursedescription/${id}`;
	const manage = `/managecourse/${id}`;
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
								{course.name}
							</div>
							<div className="mt-8 bg-[#7979BD] text-white font-bold px-3 ">
								{course.courseCode}
							</div>
						</div>
						<a
							href="#pre"
							className="text-[#5F5FAC] ml-3 underline text-lg inline-block"
						>
							instructors
						</a>{" "}
						<FaArrowRight className="text-[#5F5FAC] inline-block" />
						<p className="line-clamp-4  px-3 py-1">
							{course.description}
						</p>
						<a
							href="#inst"
							className="text-[#5F5FAC] ml-3 underline text-lg inline-block"
						>
							Prerequisites
						</a>{" "}
						<FaArrowRight className="text-[#5F5FAC] inline-block" />
						<p className="px-3 mb-1">
							Credit hour{" "}
							<span className="ml-7 bg-gray-300 px-3 rounded-md">
								{course.credit}
							</span>
						</p>
						<p className="px-3">
							Lecture hour{" "}
							<span className="ml-5 bg-gray-300 px-3 rounded-md">
								{course.lectureHour}
							</span>
						</p>
					</div>
				</Link>
			)}
		</div>
	);
};

export default CoursesCard;
