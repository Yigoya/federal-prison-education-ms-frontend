import React from 'react'
import { useTranslation } from 'react-i18next';

export const StudentRegistration = () => {
  const {t} =useTranslation();
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
                  <h1 className='text-2xl font-bold'>{t('studentregistration')}</h1>
                </div>
                <div>
                  <form>
                    <div className=' flex flex-col space-y-2'>
                         <label htmlFor="name" className="uppercase text-sm mt-2">{t('fullname')}<span className='text-red-400 m-1'>*</span></label>
                         <input type='text' name='name' placeholder={t('enter')}  className="border-2 rounded-lg p-1 border-gray-300 shadow-lg text-sm hover:border-blue-300" />
                    </div>
                    <div className=' flex  space-y-2 m-4 items-center'>
                        <div className='mt-2'>
                        <label htmlFor="zone">{t('zone')}<span className='text-red-400 m-1'>*</span></label>
                            <input type='text' name='zone' className="border-2 rounded-lg p-1 border-gray-200 shadow-lg text-sm w-16 hover:border-blue-300" />
                        </div>
                        <div className='m-4'>
                        <label htmlFor="age">{t('age')}<span className='text-red-400 m-1'>*</span></label>
                            <input type='text' name='age' className="border-2 rounded-lg p-1 border-gray-200 shadow-lg text-sm w-16 hover:border-blue-300" />
                        </div>
                        <div>
                        <label htmlFor="period">{t('period')}<span className='text-red-400 m-1'>*</span></label>
                            <input type='text' name='period'className="border-2 rounded-lg p-1 border-gray-200 shadow-lg text-sm w-16 hover:border-blue-300 " />
                        </div>
                    </div>
                    <div className=' flex flex-col space-y-2 '>
                            <label htmlFor="crime" className="uppercase text-sm mt-2">{t('crime')}<span className='text-red-400 m-1'>*</span></label>
                            <input type='text' name='crime' placeholder={t('enter')} className="border-2 rounded-lg p-1 border-gray-200 shadow-lg text-sm hover:border-blue-300" />
                      </div>
                      <div className=' flex flex-col space-y-2 mt-2'>
                            <label htmlFor="start"  className="uppercase text-sm mt-2">{t('start')}<span className='text-red-400 m-1'>*</span></label>
                            <input type='date' name='start' placeholder='mm/yyyy' className="border-2 rounded-lg p-1 border-gray-200 shadow-lg text-sm w-44 text-gray-400 hover:border-blue-300"  />
                      </div>
                      <div className=' flex flex-col space-y-2 mt-2'>
                            <label htmlFor="parole"  className="uppercase text-sm mt-2">{t('parol')}<span className='text-red-400 m-1'>*</span></label>
                            <input type='date' name='parole' placeholder='mm/yyyy' className="border-2 rounded-lg p-1 border-gray-200 shadow-lg text-sm w-44 text-gray-400 hover:border-blue-300"  />
                      </div>
                      <div className=' flex flex-col space-y-2 m-2'>
                            <label htmlFor="end"  className="uppercase text-sm mt-2">{t('end')}<span className='text-red-400 m-1'>*</span></label>
                            <input type='date' name='end' placeholder='mm/yyyy' className="border-2 rounded-lg p-1 border-gray-200 shadow-lg text-sm w-44 text-gray-400 hover:border-blue-300 "  />
                      </div>
                  </form>
                </div>
              </div>
              <div className="max-md:hidden h-72 bg-gray-500 w-0.5 mx-8 mt-32" />
  
              <div className='mr-16 mt-16'>
              <div className=' flex flex-col space-y-2'>
                         <label htmlFor="grade" className="uppercase text-sm mt-2">{t('chosenGrade')}<span className='text-red-400 m-1'>*</span></label>
                         <input type='text' name='grade' placeholder={t('enter')}  className="border-2 rounded-lg p-1 border-gray-300 shadow-lg text-sm hover:border-blue-300" />
                    </div>
                  <div className='flex mt-4 '>
                    <p className='uppercase p-2 mt-1'>{t('status')}:</p>
                    <div className='mt-3 ml-4'>
                        <label htmlFor="new">{t('new')}</label>
                        <input type='checkbox' name='new' className='ml-4  h-4 w-4  '  />
                    </div>
                    <div className='mt-3 ml-8'>
                        <label htmlFor="old">{t('old')}</label>
                        <input type='checkbox' name='old' className='ml-4 h-4 w-4 '  />
                    </div>
                  </div> 
                  <div className='flex mt-4 '>
                    <p className='uppercase p-2 mt-1'>{t('language')}:</p>
                    <div className='mt-3 ml-4'>
                        <label htmlFor="amh">{t('amharic')}</label>
                        <input type='checkbox' name='amh' className='ml-4  h-4 w-4  ' />
                    </div>
                    <div className='mt-3 ml-8'>
                        <label htmlFor="oro">{t('oromifa')}</label>
                        <input type='checkbox' name='oro' className='ml-4 h-4 w-4 '  />
                    </div>
                  </div>
                  <div className='flex mt-4'>
              <label htmlFor="ethnicity" className='mx-2 uppercase'> {t('ethnicity')}:</label>
              <select id="ethnicity" className="border-2 rounded-lg p-1 border-gray-300 shadow-lg text-sm hover:border-blue-300 mx-4 text-gray-400">
                  <option value="">{t('entereth')}</option>
                  {ethnicities.map((ethnicity, index) => (
                      <option key={index} value={ethnicity}>{ethnicity}</option>
                  ))}
              </select>
          </div>
              </div>
      </div>
        <div className=''>
          <div className='flex justify-center  '>
            <button className=' bg-gradient-to-r from-blue-200 to-blue-600 text-white rounded-full p-2 w-96 hover:bg-white hover:text-blue-300'>{t('registerStudents')}</button>
          </div>
        </div>
    </div>
    )
  }