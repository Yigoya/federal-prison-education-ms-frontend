import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiCloudUpload, BiTrash } from 'react-icons/bi';
import Select from 'react-select';
import { useParams, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddCourse = ({ isEdit }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [options, setOptions] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [form, setForm] = useState({
    id: '',
    name: '',
    courseCode: '',
    credit: '',
    lectureHour: '',
    description: '',
    preRequisites: [],
    instructor: []
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.API_URL); // Replace with your API endpoint
        setOptions(response.data); // Assuming the response data is an array
      } catch (error) {
        console.error('Error fetching data:', error);
        setApiError('Failed to fetch course options.');
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.INST_URL); // Replace with your API endpoint
        setInstructors(response.data); // Assuming the response data is an array
      } catch (error) {
        console.error('Error fetching data:', error);
        setApiError('Failed to fetch instructor options.');
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (isEdit && id) {
      const fetchCourse = async () => {
        try {
          const response = await axios.get(`${process.env.API_URL}/${id}`); // Replace with your API endpoint
          const course = response.data;
          setForm({
            id: course.id,
            name: course.name,
            courseCode: course.courseCode,
            credit: course.credit,
            lectureHour: course.lectureHour,
            description: course.description,
            preRequisites: course.preRequisites,
            instructor: course.instructor
          });
        } catch (error) {
          console.error('Error fetching course data:', error);
          setApiError('Failed to fetch course data.');
        }
      };

      fetchCourse();
    }
  }, [isEdit, id]);

  const handleChange = (selectedOption, actionMeta) => {
    if (selectedOption) {
      setForm(prevForm => ({
        ...prevForm,
        [actionMeta.name]: selectedOption.map(option => option.value)
      }));
    } else {
      setForm(prevForm => ({
        ...prevForm,
        [actionMeta.name]: []
      }));
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!form.name) formErrors.name = 'Course name is required';
    if (!form.courseCode) formErrors.courseCode = 'Course code is required';
    if (form.credit <= 0) formErrors.credit = 'Credit hour must be greater than 0';
    if (form.lectureHour <= 0) formErrors.lectureHour = 'Lecture hour must be greater than 0';
    if (!form.description) formErrors.description = 'Course description is required';
    if (form.preRequisites.length === 0) formErrors.preRequisites = 'At least one prerequisite is required';
    if (form.instructor.length === 0) formErrors.instructor = 'At least one instructor is required';
    return formErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const courseData = {
        ...form,
        id: isEdit ? form.id : uuidv4(),
      };

      const response = isEdit
        ? await axios.put(`${process.env.API_URL}/${form.id}`, courseData) // Replace with your API endpoint
        : await axios.post(process.env.API_URL, courseData); // Replace with your API endpoint

      console.log('Form submitted successfully:', response.data);
      setSuccessMessage(isEdit ? 'Course updated successfully!' : 'Course added successfully!');
      if (!isEdit) {
        setForm({
          id: '',
          name: '',
          courseCode: '',
          credit: 0,
          lectureHour: 0,
          description: '',
          preRequisites: [],
          instructor: []
        });
      }
      setErrors({});
      setApiError('');
    } catch (error) {
      console.error('Error submitting form:', error);
      setApiError('Failed to submit the form.');
    }
  };

  const handleDelete = async () => {
    if (!id) return;

    if (!window.confirm("Are you sure you want to delete this course?")) {
      return;
    }

    try {
      await axios.delete(`${process.env.API_URL}/${id}`); // Replace with your API endpoint
      setSuccessMessage('Course deleted successfully!');
      setForm({
        id: '',
        name: '',
        courseCode: '',
        credit: 0,
        lectureHour: 0,
        description: '',
        preRequisites: [],
        instructor: []
      });
      setErrors({});
      setApiError('');
      setTimeout(() => {
        navigate('/courses'); // Redirect to the courses list page or another appropriate page
      }, 1500);
    } catch (error) {
      console.error('Error deleting course:', error);
      setApiError('Failed to delete the course.');
    }
  };

  const filteredCourses = options.filter(option => 
    option.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    option.courseCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCourseSelection = (course) => {
    setForm({
      id: course.id,
      name: course.name,
      courseCode: course.courseCode,
      credit: course.credit,
      lectureHour: course.lectureHour,
      description: course.description,
      preRequisites: course.preRequisites,
      instructor: course.instructor
    });
    setSearchTerm('');
  };

  return (
    <div className='bg-white mx-60 rounded-2xl'>
      <h1 className='text-center font-bold text-2xl pt-4 pb-10'>{isEdit ? 'Manage Course' : 'Add Course'}</h1>
      {isEdit && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search for a course..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mx-10 w-1/3 px-3 py-2 rounded-lg bg-gray-200 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
      )}
      {isEdit && searchTerm && (
        <div className="mb-4">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="py-2 px-4 border-b cursor-pointer hover:bg-gray-100"
              onClick={() => handleCourseSelection(course)}
            >
              <p className="font-bold">{course.name}</p>
              <p className="text-sm text-gray-600">{course.courseCode}</p>
            </div>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit} className='px-10'>
        <div>
          <p className='text-[#2A467C] text-opacity-70 font-bold mb-1'>Course Name</p>
          <input
            name='name'
            type="text"
            className='py-2 px-6 rounded-lg text-left w-full'
            placeholder='Click to enter value'
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <div className="text-red-500">{errors.name}</div>}
        </div>
        <div className='flex mt-5 mr-20'>
          <div>
            <p className='text-[#2A467C] text-opacity-70 font-bold mb-1'>Course Code</p>
            <input
              name='courseCode'
              type="text"
              className='py-2 px-6 rounded-lg text-left'
              placeholder='Code'
              value={form.courseCode}
              onChange={(e) => setForm({ ...form, courseCode: e.target.value })}
            />
            {errors.courseCode && <div className="text-red-500">{errors.courseCode}</div>}
          </div>
          <div>
            <p className='text-[#2A467C] text-opacity-70 font-bold mb-1'>Credit Hour</p>
            <input
              name='credit'
              type="number"
              className='py-2 px-6 text-left'
              placeholder='2'
              value={form.credit}
              onChange={(e) => setForm({ ...form, credit: e.target.value })}
            />
            {errors.credit && <div className="text-red-500">{errors.credit}</div>}
          </div>
          <div>
            <p className='text-[#2A467C] text-opacity-70 font-bold mb-1'>Lecture Hour</p>
            <input
              name='lectureHour'
              type="number"
              className='py-2 px-6 text-left'
              placeholder='2'
              value={form.lectureHour}
              onChange={(e) => setForm({ ...form, lectureHour: e.target.value })}
            />
            {errors.lectureHour && <div className="text-red-500">{errors.lectureHour}</div>}
          </div>
        </div>
        <div>
          <p className='text-[#2A467C] text-opacity-70 font-bold mb-1'>Course Description</p>
          <textarea
            name='description'
            className="w-full px-3 py-2 rounded-lg bg-[#E6E6E6] border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder='Describe the course'
            style={{ resize: 'none', height: '150px' }}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          {errors.description && <div className="text-red-500">{errors.description}</div>}
        </div>
        <div>
          <p className='text-[#2A467C] text-opacity-70 font-bold mb-1'>Prerequisite</p>
          <Select
            isMulti
            name='preRequisites'
            options={filteredCourses.map(option => ({ value: option, label: `${option.name} - ${option.courseCode}` }))}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={handleChange}
            value={form.preRequisites.map(pr => ({ value: pr, label: `${pr.name} - ${pr.courseCode}` }))}
          />
          {errors.preRequisites && <div className="text-red-500">{errors.preRequisites}</div>}
        </div>
        <div>
          <p className='text-[#2A467C] text-opacity-70 font-bold mb-1'>Instructor</p>
          <Select
            isMulti
            name='instructor'
            options={instructors.map(instr => ({ value: instr, label: `${instr.name} - ${instr.title}` }))}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={handleChange}
            value={form.instructor.map(instr => ({ value: instr, label: `${instr.name} - ${instr.title}` }))}
          />
          {errors.instructor && <div className="text-red-500">{errors.instructor}</div>}
        </div>
        {apiError && <div className="text-red-500 text-center font-bold text-xl mt-2 mb-4">{apiError}</div>}
        {successMessage && <div className="text-green-500 text-center font-bold mt-2 mb-4">{successMessage}</div>}
        <div className='flex justify-center mt-5'>
          <button type='submit' className='bg-[#3B54AB] mb-5 px-5 py-1 text-white font-bold'>
            <BiCloudUpload className='inline-block text-2xl mr-1 mb-1' /> {isEdit ? 'Update' : 'Submit'}
          </button>
        </div>
        {isEdit && (
          <div className='flex justify-center'>
            <button type='button' onClick={handleDelete} className='bg-red-500 mb-5 px-5 py-1 text-white font-bold'>
              <BiTrash className='inline-block text-2xl mr-1 mb-1' /> Delete
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default AddCourse;
