import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import { FaArrowRight, FaCloudDownloadAlt, FaEdit } from "react-icons/fa";
const CourseDescrition = () => {
	const [course, setCourse] = useState([]);
	const { id } = useParams();
	console.log(id);
	useEffect(() => {
		console.log("first");
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`${process.env.API_URL}/course/getCourseById/${id}`
				);
				setCourse(response.data.course);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);
	return (
		<div>
			<div>
				<div>
					{console.log(course.name)}
					<div className="px-40 py-10 bg-white rounded-xl ">
						<p className="text-4xl font-bold inline-block ">
							{course.name}
						</p>
						<span className="text-md inline-block ml-2 bg-[#7979BD] px-2 text-white rounded-md">
							{course.courseCode}
						</span>
						<p className="px-3 mb-1 mt-5">
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
						<div>
							<div className="flex justify-between">
								<div className="flex-row mt-3">
									<a
										href="#pre"
										className="text-[#5F5FAC] ml-3 underline "
									>
										Prerequisites{" "}
										<FaArrowRight className="text-[#5F5FAC] inline-block" />
									</a>{" "}
									<br />
									<a
										href="#inst"
										className="text-[#5F5FAC] ml-3 underline"
									>
										instructors{" "}
										<FaArrowRight className="text-[#5F5FAC] inline-block" />
									</a>
								</div>
								<div className="flex flex-col space-y-2">
									<Link
										// to={manage}
										className="bg-[#C1AA2C] text-white font-bold py-1 px-8 rounded-md"
									>
										<FaEdit className="inline-block mb-1 mr-3" />
										Edit Course
									</Link>
									<button className="bg-[#3B54AB] font-bold text-white py-1 px-8 rounded-md">
										<FaCloudDownloadAlt className="inline-block mb-1 mr-3" />
										Get Outline
									</button>
								</div>
							</div>
							<p className=" mt-5 p-3">{course.description}</p>
							<h1 className="px-3 text-xl font-bold my-3">
								Prerequisites
							</h1>
							{course.prerequisites &&
							course.prerequisites.length > 0 ? (
								<div className="mb-5" id="pre">
									{course.prerequisites.map(
										(prerequisite, index) => (
											<div
												className="px-3 text-[#424278] text-opacity-70 font-bold text-md underline"
												key={index}
											>
												{prerequisite.name}
											</div>
										)
									)}
								</div>
							) : (
								<p className="px-3 text-[#424278] my-5 font-bold text-md">
									No prerequisite courses
								</p>
							)}
							<h3 className="px-3 text-xl font-bold">
								Instructors
							</h3>
							{course.CourseInstructor &&
							course.CourseInstructor.length > 0 ? (
								<div
									className="grid-cols-3 grid gap-52 ml-20"
									id="inst"
								>
									{course.CourseInstructor.map(
										(instructors, index) => (
											<div
												className="px-3 flex justify-center"
												key={index}
											>
												<div className=" shadow-lg  p-3 rounded-xl my-5">
													<div className="flex  justify-center items-center">
														<img
															src={`${process.env.API_URL}/image/${instructors.image}`}
															width={100}
															height={100}
														/>
													</div>
													<h3 className="text-lg font-medium mt-3 text-center pt-2">
														{instructors.title}{" "}
														{instructors.name}
													</h3>
													<p className="text-gray-500 text-center font-bold mb-2">
														{instructors.role}
													</p>
													<div className="bg-[#2A467C] bg-opacity-15 rounded-lg">
														<div className="flex justify-between px-5 py-6 ">
															<div className="mr-10">
																<div className="text-[#2A467C] text-opacity-70 font-bold ">
																	Department
																</div>
																<div className="font-bold">
																	{
																		instructors.graduationDepartment
																	}
																</div>
															</div>
															<div>
																<div className=" font-bold text-[#2A467C] text-opacity-70">
																	Hired Date
																</div>
																<div className="font-bold">
																	{
																		instructors.hireDate
																	}
																</div>
															</div>
														</div>
														<p className="px-5 font-bold">
															{instructors.email}
														</p>
														<p className="px-5 pb-3 font-bold">
															{instructors.phone}
														</p>
													</div>
												</div>
											</div>
										)
									)}
								</div>
							) : (
								<p className="px-3 text-[#424278] font-bold text-md">
									No Instructors assigned for this courses
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseDescrition;
