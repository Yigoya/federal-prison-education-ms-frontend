import React, { useEffect, useState } from 'react'
import Course from '../Courses'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CoursesCard from './CoursesCard';
const CourseDescrition = () => {
  const [Course, setCourse] = useState([]);
  const {id} = useParams();
  console.log(id)
  useEffect(()=>{
    axios.get(process.env.API_URL)
    .then(res=>{
      setCourse(res.data);
    })
  })
  return (
    <div>
        <div >
        {Course.map((course) => (
          course.id.toString() === id ? <CoursesCard key={course.id} course={course} showdescription={true}/> : null
        ))}
      </div>
    </div>
  )
}

export default CourseDescrition