import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import logo from '../assets/images/fdre_logo.png'
import { FaGlobe } from 'react-icons/fa';
import avatar from '../assets/images/Avatar.jpg'
function Navbar() {
  return (
    <div className='mr-16 '>
      <div className='bg-white rounded-b-3xl p-6 ml-5 flex justify-between'>
        <div style={{ width: '40px' }} >
          <img src={logo}  alt="logo" />
        </div>
        <div className='flex '>
          <div className='py-1 px-5 border rounded-full bg-gray-300 '>
           <FaGlobe className='inline-block text-white mr-2'/>
            <select className='inline-block bg-gray-300 text-gray-600' id="">
              <option value="">Lang</option>
              <option value="English">En</option>
              <option value="Amharic">አማ</option>
              <option value="Oromifa">Oro</option>
            </select>
          </div>
          <div>
            <img src={avatar} width={'50px'}/>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Navbar