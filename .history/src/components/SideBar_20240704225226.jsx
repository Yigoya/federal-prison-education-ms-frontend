import { FaHome, FaUserGraduate, FaUserPlus, FaBook, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';

import logo from '../assets/images/fdre_logo.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
function SideBar() {
const {t} = useTranslation()
  return (
    <div className='w-1/4 bg-[#0085FF] rounded-r-3xl '>
          <div className='mt-7 ml-4 flex'>
            <div className='mr-3'>
              <img src={logo} alt="logo" width={'100px'} />
            </div>
            <div>
              <p className ='font-bold text-sm text-white mb-1'>{t('FDRE')}</p>
              <p className='text-gray-200'>{t('kality')}</p>
            </div>
 
          </div>
          <div className='flex flex-col items-center font-bold text-white py-20 mt-10'>
        
            <Link className='hover:border border-gray-200 rounded-full hover:bg-gray-100 hover:text-[#0085FF] p-2 px-16 inline-block mr-4' to='/'> <FaHome className='inline-block mr-2 text-2xl'/>{t('dashboard')}</Link>
            <Link className='hover:border border-gray-200 rounded-full py-2 px-12 hover:bg-gray-100 hover:text-[#0085FF] inline-block mr-10 ' to='/register'><FaUsers className='inline-block mr-2 text-2xl'/> {t('register')}</Link>
            <Link className='hover:border border-gray-200 rounded-full py-2 px-16 hover:bg-gray-100 hover:text-[#0085FF] inline-block mr-10 ' to='/courses'><FaBook className='inline-block mr-3  text-2xl'/>{t('courses')}</Link>
            <Link className='hover:border border-gray-200 rounded-full py-2 px-14 hover:bg-gray-100 hover:text-[#0085FF] inline-block mr-8' to='/students'> <FaUserGraduate className='inline-block mr-5  text-2xl'  />{t('students')}</Link>
            <Link className='hover:border border-gray-200 rounded-full py-2 px-14 hover:bg-gray-100 hover:text-[#0085FF] inline-block mr-10' to='/teachers'><FaChalkboardTeacher className='inline-block  mr-5  text-2xl'/>{t('staff')}</Link>
            <Link className='hover:border border-gray-200 rounded-full py-2 px-14 hover:bg-gray-100 hover:text-[#0085FF] inline-block mr-10' to='/classroom'><FaChalkboardTeacher className='inline-block  mr-5  text-2xl'/>{t('classroom')}</Link>

          </div>
        </div>

  )
}

export default SideBar