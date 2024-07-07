import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import CoursesCard from './CoursesCard';
import { Link } from 'react-router-dom';

function Courses() {
  const [query, setQuery] = useState('');
  const [courses, setCourses] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState({ name: '', courseCode: '' });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(process.env.API_URL);
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleFilterChange = (e) => {
    setFilterCriteria({
      ...filterCriteria,
      [e.target.name]: e.target.value
    });
  };

  const toggleFilterModal = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const filteredCourses = courses.filter(course => {
    const matchesName = course.name.toLowerCase().includes(filterCriteria.name.toLowerCase());
    const matchesCourseCode = course.courseCode.toLowerCase().includes(filterCriteria.courseCode.toLowerCase());
    const matchesQuery = query === '' || course.name.toLowerCase().includes(query.toLowerCase()) || course.courseCode.toLowerCase().includes(query.toLowerCase());
    return matchesName && matchesCourseCode && matchesQuery;
  });

  return (
    <div className='bg-white p-10 rounded-lg'>
      {/* Intro */}
      <h1 className="text-3xl font-bold mt-5">All Courses</h1>
      <p>All Courses Given By Our College</p>
      <div className='flex justify-between items-center mt-7'>
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
                placeholder="Search Courses"
              />
            </div>
          </form>
          {query && filteredCourses.length === 0 && (
            <div className="text-red-500">No courses found matching your query.</div>
          )}
        </div>
        <div className='flex space-x-4'>
          <Link to='/addcourse' className='bg-[#266994] hover:scale-110 text-white font-bold py-1 px-4'>Add Course</Link>
          <Link to='/managecourse' className='bg-[#2C4455] font-bold hover:scale-110 text-white py-1 px-4'>Manage</Link>
          <button className='bg-[#6A90A9] text-white hover:scale-110 py-1 font-bold px-4' onClick={toggleFilterModal}>Filter</button>
        </div>
      </div>
      {/* Filter Modal */}
      {isFilterOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Filter Courses</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Course Name</label>
              <input
                type="text"
                name="name"
                value={filterCriteria.name}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter course name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Course Code</label>
              <input
                type="text"
                name="courseCode"
                value={filterCriteria.courseCode}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter course code"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button className="bg-gray-500 text-white py-1 px-4 rounded-lg" onClick={toggleFilterModal}>Cancel</button>
              <button className="bg-blue-500 text-white py-1 px-4 rounded-lg" onClick={toggleFilterModal}>Apply</button>
            </div>
          </div>
        </div>
      )}
      {/* Cards */}
      <div className='lg:grid my-10 px-2 grid-cols-3 gap-10'>
        {filteredCourses.map((course) => (
          <CoursesCard key={course.id} course={course} showdescription={false} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
