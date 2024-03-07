import React from 'react'

export const StudentRegistration = () => {
    const ethnicities = [
      "Ethiopian",
      "Kenyan",
      "Arab",
      "Bengali",
      "Burmese",
      "Chinese",
      "Fulani",
      "Hausa",
      "Japanese",
      "Korean",
      "Maasai",
      "Amherican",
      "Pashtun",
      "Punjabi",
      "Sindhi"
  ];
    return (
      <div className='bg-white  rounded-lg m-8 p-8 mb-32  '>
          <div className=' lg:flex justify-between'>
              <div className='m-2 p-4'>
                <div className='mb-4'>
                  <h1 className='text-2xl font-bold'>Student Registration</h1>
                </div>
                <div>
                  <form>
                    <div className=' flex flex-col space-y-2'>
                         <label htmlFor="name" className="uppercase text-sm mt-2">Full Name<span className='text-red-400 m-1'>*</span></label>
                         <input type='text' name='name' placeholder='Enter Name'  className="border-2 rounded-lg p-1 border-gray-300 shadow-lg text-sm hover:border-blue-300" />
                    </div>
                    <div className=' flex  space-y-2 m-4 items-center'>
                        <div className='mt-2'>
                        <label htmlFor="zone">Zone<span className='text-red-400 m-1'>*</span></label>
                            <input type='text' name='zone' className="border-2 rounded-lg p-1 border-gray-200 shadow-lg text-sm w-16 hover:border-blue-300" />
                        </div>
                        <div className='m-4'>
                        <label htmlFor="age">Age<span className='text-red-400 m-1'>*</span></label>
                            <input type='text' name='age' className="border-2 rounded-lg p-1 border-gray-200 shadow-lg text-sm w-16 hover:border-blue-300" />
                        </div>
                        <div>
                        <label htmlFor="period">Period<span className='text-red-400 m-1'>*</span></label>
                            <input type='text' name='period'className="border-2 rounded-lg p-1 border-gray-200 shadow-lg text-sm w-16 hover:border-blue-300 " />
                        </div>
                    </div>
                    <div className=' flex flex-col space-y-2 '>
                            <label htmlFor="crime" className="uppercase text-sm mt-2">Crime<span className='text-red-400 m-1'>*</span></label>
                            <input type='text' name='crime' placeholder='click to enter value' className="border-2 rounded-lg p-1 border-gray-200 shadow-lg text-sm hover:border-blue-300" />
                      </div>
                      <div className=' flex flex-col space-y-2 mt-2'>
                            <label htmlFor="start"  className="uppercase text-sm mt-2">Start<span className='text-red-400 m-1'>*</span></label>
                            <input type='date' name='start' placeholder='mm/yyyy' className="border-2 rounded-lg p-1 border-gray-200 shadow-lg text-sm w-44 text-gray-400 hover:border-blue-300"  />
                      </div>
                      <div className=' flex flex-col space-y-2 mt-2'>
                            <label htmlFor="parole"  className="uppercase text-sm mt-2">Parole<span className='text-red-400 m-1'>*</span></label>
                            <input type='date' name='parole' placeholder='mm/yyyy' className="border-2 rounded-lg p-1 border-gray-200 shadow-lg text-sm w-44 text-gray-400 hover:border-blue-300"  />
                      </div>
                      <div className=' flex flex-col space-y-2 m-2'>
                            <label htmlFor="end"  className="uppercase text-sm mt-2">End<span className='text-red-400 m-1'>*</span></label>
                            <input type='date' name='end' placeholder='mm/yyyy' className="border-2 rounded-lg p-1 border-gray-200 shadow-lg text-sm w-44 text-gray-400 hover:border-blue-300 "  />
                      </div>
                  </form>
                </div>
              </div>
              <div className="max-md:hidden h-72 bg-gray-500 w-0.5 mx-8 mt-32" />
  
              <div className='mr-16 mt-16'>
              <div className=' flex flex-col space-y-2'>
                         <label htmlFor="grade" className="uppercase text-sm mt-2">Chosen Grade<span className='text-red-400 m-1'>*</span></label>
                         <input type='text' name='grade' placeholder='Enter Value'  className="border-2 rounded-lg p-1 border-gray-300 shadow-lg text-sm hover:border-blue-300" />
                    </div>
                  <div className='flex mt-4 '>
                    <p className='uppercase p-2 mt-1'>Status:</p>
                    <div className='mt-3 ml-4'>
                        <label htmlFor="new">New</label>
                        <input type='checkbox' name='new' className='ml-4  h-4 w-4  '  />
                    </div>
                    <div className='mt-3 ml-8'>
                        <label htmlFor="old">Old</label>
                        <input type='checkbox' name='old' className='ml-4 h-4 w-4 '  />
                    </div>
                  </div> 
                  <div className='flex mt-4 '>
                    <p className='uppercase p-2 mt-1'>Language:</p>
                    <div className='mt-3 ml-4'>
                        <label htmlFor="amh">Amharic</label>
                        <input type='checkbox' name='amh' className='ml-4  h-4 w-4  ' />
                    </div>
                    <div className='mt-3 ml-8'>
                        <label htmlFor="oro">Oromifa</label>
                        <input type='checkbox' name='oro' className='ml-4 h-4 w-4 '  />
                    </div>
                  </div>
                  <div className='flex mt-4'>
              <label htmlFor="ethnicity" className='mx-2 uppercase'> Ethnicity:</label>
              <select id="ethnicity" className="border-2 rounded-lg p-1 border-gray-300 shadow-lg text-sm hover:border-blue-300 mx-4 text-gray-400">
                  <option value="">Select Ethnicity</option>
                  {ethnicities.map((ethnicity, index) => (
                      <option key={index} value={ethnicity}>{ethnicity}</option>
                  ))}
              </select>
          </div>
              </div>
      </div>
        <div className=''>
          <div className='flex justify-center  '>
            <button className=' bg-gradient-to-r from-blue-200 to-blue-600 text-white rounded-full p-2 w-96 hover:bg-white hover:text-blue-300'> Register</button>
          </div>
        </div>
    </div>
    )
  }