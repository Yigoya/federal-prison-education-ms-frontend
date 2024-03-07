import React from 'react'
import { MdPerson } from 'react-icons/md';
import { Link } from 'react-router-dom';

function DashBoard() 
{
  return (
    <div className=' w-full h-screen lg:flex flex-col m-4 p-8'>
      <div className='lg:flex justify-around  '>
         <div className='bg-white px-2 rounded-2xl flex py-4 shadow-lg w-44 '>
          <div><MdPerson size={32} className='mr-2 text-blue-400 mt-2' /></div>
            <div> 
              <p className='text-gray-500  '>Students</p>
              <p className='text-gray-600 font-bold'>12,456</p>
            </div>
         </div>
         <div className='bg-white px-2 rounded-2xl flex py-4 shadow-lg w-44  my-4 sm:m-0'>
          <div><MdPerson size={32} className='mr-2 text-blue-400 mt-2' /></div>
            <div> 
              <p className='text-gray-500  '>Techers</p>
              <p className='text-gray-600 font-bold'>356</p>
            </div>
         </div>
         <div className='bg-white px-2 rounded-2xl flex py-4 shadow-lg w-44 my-4 sm:m-0'>
          <div><MdPerson size={32} className='mr-2 text-blue-400 mt-2'/></div>
            <div> 
              <p className='text-gray-500  '>Staff</p>
              <p className='text-gray-600 font-bold'>216</p>
            </div>
         </div >
         <div className='bg-white px-2 rounded-2xl flex py-4 shadow-lg w-44'>
          <div><MdPerson size={32} className='mr-2 text-blue-400 mt-2' /></div>
            <div> 
              <p className='text-gray-500 mt-3 '>Admin</p>
            </div>
         </div>
         
      </div>
      <div className='max-md:mr-32 max-md:text-sm max-md:flex'>
        <div className='lg:flex bg-white rounded-2xl m-16 justify-between w-full  '>
                <div>
                <div className='mr-32'>
                          <Link to='/studentregistration'> 
                <div className='p-4 flex bg-gradient-to-l from-blue-200 to-blue-600 rounded-2xl m-8 '>
                  <div>
                            <h1 className='text-1xl font-bold text-gray-200 text-center'>Register Student</h1>
                            <p className='text-gray-200 max-md:hidden'>Click here to register a student</p>
                    </div>
                      <div>
                              <span className='text-5xl text-gray-200 text-center mx-4 max-md:hidden'>→</span>
                    </div>
                  </div>
                </Link>
                        
              </div>
                <div> 
                <div className='mr-32'>
                          <Link to='/register'> 
                <div className='p-4 flex bg-gradient-to-l from-blue-200 to-blue-600 rounded-2xl m-8'>
                  <div>
                            <h1 className='text-1xl font-bold text-gray-200 text-center'>Register Staff</h1>
                            <p className='text-gray-200 max-md:hidden'>Click here to register a staff member</p>
                    </div>
                      <div>
                              <span className='text-5xl text-gray-200 text-center mx-4 max-md:hidden'>→</span>
                    </div>
                  </div>
                </Link>
                        
              </div>
                  </div>
                </div>
                <div>
                <div className='mr-32'>
                          <Link to='/register'> 
                <div className='p-4 flex bg-gradient-to-l from-blue-200 to-blue-600 rounded-2xl m-8'>
                  <div>
                            <h1 className='text-1xl font-bold text-gray-200 text-center '>View Student</h1>
                            <p className='text-gray-200 max-md:hidden'>Click here to see students</p>
                    </div>
                      <div>
                              <span className='text-5xl text-gray-200 text-center mx-4 max-md:hidden'>→</span>
                    </div>
                  </div>
                </Link>
                        
              </div>
            <div> 
              <div className='mr-32'>
                          <Link to='/register'> 
                <div className='p-4 flex bg-gradient-to-l from-blue-200 to-blue-600 rounded-2xl m-8'>
                  <div>
                            <h1 className='text-1xl font-bold text-gray-200 text-center '>View Staff</h1>
                            <p className='text-gray-200 max-md:hidden'>Click here to see a staff member</p>
                    </div>
                      <div>
                              <span className='text-5xl text-gray-200 text-center mx-4 max-md:hidden'>→</span>
                    </div>
                  </div>
                </Link>
                        
              </div>
           </div>
        
          </div>
                    
        </div>
                    
      </div>
    </div>
  )
}

export default DashBoard