import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import logo from '../assets/images/fdre_logo.png'
import { FaGlobe } from 'react-icons/fa';
import avatar from '../assets/images/Avatar.jpg'
import { useTranslation } from 'react-i18next';
function Navbar() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div className='mr-16 '>
      <div className='bg-white rounded-b-3xl p-6 ml-5 flex justify-between'>
        <div style={{ width: '40px' }} >
          <img src={logo}  alt="logo" />
        </div>
        <div className='flex '>
          <div className='py-1 px-5 border rounded-full bg-gray-300 '>
           <FaGlobe className='inline-block text-white mr-2'/>
            <select onChange={handleLanguageChange} className='inline-block bg-gray-300 text-gray-600' id="">
              <option value="am">አማ</option>
              <option value="en">En</option>
              <option value="or">Oro</option>
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