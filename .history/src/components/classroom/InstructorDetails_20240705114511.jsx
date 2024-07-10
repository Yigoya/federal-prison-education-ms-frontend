import React from 'react'

const InstructorDetails = () => {
  return (
    <div>
        <div className='m-1 bg-white h-100% w-2/5 rounded-2xl'>
          <div className='mt-4 mb-8 ml-4 font-bold text-2xl'>
            <h1>{t('personalInfo')}</h1>
          </div>

          <div className='flex flex-col place-items-center'>
            <img src='https://img.freepik.com/premium-vector/user-vector-icon-outline-style-isolated-white-background-mobile-app-website-logotype-ui-human-symbol-man-silhouette-social-member-sign-personal-profile-sign-10-eps_824631-3088.jpg?w=740' alt="Profile" className='h-44 w-44 mb-4 rounded-full'/>
            <h1 className='text-xl font-semibold'>Hailu Kebede</h1>
            <h2 ></h2>
          </div>

          <div>
                <h1 className='text-xl font-semibold ml-4 mb-4'>{t('basicDetail')} :</h1>
                <table className='ml-8'>
                    <tbody>
                      <tr>
                        <td>{t('department')} </td>
                        <td className='w-20 pl-10'>: </td>
                        <td className="font-semibold">{selectedRow.department}</td>
                      </tr>
                      <tr>
                        <td>{t('pyear')} </td>
                        <td className='w-20 pl-10'>: </td>
                        <td className="font-semibold">{selectedRow.batch}</td>
                      </tr>
                      <tr>
                        <td>{t('section')} </td>
                        <td className='w-20 pl-10'>: </td>
                        <td className="font-semibold">{selectedRow.section}</td>
                      </tr>
                      <tr>
                        <td>{t('email')} </td>
                        <td className='w-20 pl-10'>: </td>
                        <td className="font-semibold">{selectedRow.email}</td>
                      </tr>
                      <tr>
                        <td>{t('phoneNo')}</td>
                        <td className='w-20 pl-10'>: </td>
                        <td className="font-semibold">{selectedRow.phone}</td>
                      </tr>
                    </tbody>
                </table>
          </div>
        </div>
    </div>
  )
}

export default InstructorDetails