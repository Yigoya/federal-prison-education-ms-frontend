import React from 'react'
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useTranslation } from 'react-i18next';
import { AiOutlineSearch } from 'react-icons/ai';



const rows = [
  { id: 1, Role: 'Teacher', DateOfBirth: '12/04/2024', HomeAddress: 'bole', email: 'someone@smt.com', phone: '0901010101', officeLocation: 'B12 R012', fullName: 'Jon Doe', emergencyContact: '0901010103', image: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, Role: 'Chief Director', DateOfBirth: '12/04/2024', HomeAddress: 'bole', email: 'someone@smt.com', phone: '0901010101', officeLocation: 'B16 R016', fullName: 'Cersei Marsi', emergencyContact: '0901010105', image: 'https://images.unsplash.com/photo-1604883781269-d121d9ad20f6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, Role: 'Admin', DateOfBirth: '12/04/2024', HomeAddress: 'bole', email: 'someone@smt.com', phone: '0901010101', officeLocation: 'B17 R122', fullName: 'Jaim Lannistere', emergencyContact:'0901010109', image: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 4, Role: 'Staff Coordinator', DateOfBirth: '12/04/2024', HomeAddress: 'bole', email: 'someone@smt.com', phone: '0901010101', officeLocation: 'B27 R011', fullName: 'Arya Stark', emergencyContact: '0901010100', image: 'https://images.unsplash.com/photo-1593132289185-e439d9c99c73?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 5, Role: 'Group Leader', DateOfBirth: '12/04/2024', HomeAddress: 'bole', email: 'someone@smt.com', phone: '0901010101', officeLocation: 'B17 R017', fullName: 'Daenerys Tarag', emergencyContact: '0901010101', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 6, Role: 'Teacher', DateOfBirth: '12/04/2024', HomeAddress: 'bole', email: 'someone@smt.com', phone: '0901010101', officeLocation: 'B20 R022', fullName: 'Hanna Wonde', emergencyContact:'0901010103', image: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 7, Role: 'Admin', DateOfBirth: '12/04/2024', HomeAddress: 'goro', email: 'someone@smt.com', phone: '0901010101', officeLocation: 'B25 R025', fullName: 'Ferrara Clifford', emergencyContact: '0901010101', image: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  },
  { id: 8, Role: 'Admin', DateOfBirth: '12/04/2024', HomeAddress: 'goro', email: 'someone@smt.com', phone: '0901010101', officeLocation: 'B29 R029', fullName: 'Rossini Frances', emergencyContact: '0901010101', image: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  },
  { id: 9, Role: 'Admin', DateOfBirth: '12/04/2024', HomeAddress: 'goro', email: 'someone@smt.com', phone: '0901010101', officeLocation: 'B30 R030', fullName: 'Harvey Specter', emergencyContact: '0901010107', image: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  },
  { id: 11, Role: 'Teacher', DateOfBirth: '12/04/2024', HomeAddress: 'goro', email: 'someone@smt.com', phone: '0901010101', officeLocation: 'B12 R012', fullName: 'Jon Snow', emergencyContact: '0901010101', image: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 12, Role: 'Teacher', DateOfBirth: '12/04/2024', HomeAddress: 'goro', email: 'someone@smt.com', phone: '0901010101', officeLocation: 'B17 R122', fullName: 'Cersei Lannister', emergencyContact: '0901010105', image: 'https://images.unsplash.com/photo-1604883781269-d121d9ad20f6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 13, Role: 'Teacher', DateOfBirth: '12/04/2024', HomeAddress: 'goro', email: 'someone@smt.com', phone: '0901010101', officeLocation: 'B17 R122', fullName: 'Jaime Stark', emergencyContact:'0901010109', image: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 14, Role: 'Teacher', DateOfBirth: '12/04/2024', HomeAddress: 'goro', email: 'someone@smt.com', phone: '0901010101', officeLocation: 'B27 R011', fullName: 'Arya Tarek', emergencyContact: '0901010101', image: 'https://images.unsplash.com/photo-1593132289185-e439d9c99c73?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 15, Role: 'Teacher', DateOfBirth: '12/04/2024', HomeAddress: 'goro', email: 'someone@smt.com', phone: '0901010101', officeLocation: 'B17 R017', fullName: 'Daenerys Glims', emergencyContact: '0901010129', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 16, Role: 'Assistant', DateOfBirth: '12/04/2024', HomeAddress: 'goro', email: 'someone@smt.com', phone: '0901010101', officeLocation: 'B20 R022', fullName: 'Hanna Tarik', emergencyContact:'0901010103', image: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 17, Role: 'Assistant', DateOfBirth: '12/04/2024', HomeAddress: 'goro', email: 'someone@smt.com', phone: '0901010101', officeLocation: 'B25 R025', fullName: 'Ferrara Cliff', emergencyContact: '0901010101', image: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  },
  { id: 18, Role: 'Assistant', DateOfBirth: '12/04/2024', HomeAddress: 'goro', email: 'someone@smt.com', phone: '0901010101', officeLocation: 'B29 R029', fullName: 'Rossini Glims', emergencyContact: '0901010101', image: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  },
  { id: 19, Role: 'Assistant', DateOfBirth: '12/04/2024', HomeAddress: 'goro', email: 'someone@smt.com', phone: '0901010101', officeLocation: 'B30 R030', fullName: 'Harvey Grof', emergencyContact: '0901010107', image: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  },
  { id: 20, Role: 'Assistant', DateOfBirth: '12/04/2024', HomeAddress: 'goro', email: 'someone@smt.com', phone: '0901010101', officeLocation: 'B30 R030', fullName: 'Harvey Grof', emergencyContact: '0901010107', image: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  },
];

function StaffMembers() {
  const {t} =useTranslation();
  const columns = [
    {
      field: 'image',
      headerName: t('profile'),
      width: 130,
      editable: true,
      renderCell: (params) => (
        <img src={params.value} className='h-10 w-10 rounded-3xl' alt='Profile' />
      ),
    },
    { field: 'fullName', headerName: t('Full name'), width: 130 },
    { field: 'Role', headerName: t('Role'), width: 130 },
    { field: 'id', headerName: t('ID'), width: 130 },
  ];
  
  const [selectedRow, setSelectedRow] = useState({id: 0,Role: 'Y', fullName: 'X', image: 'https://img.freepik.com/premium-vector/user-vector-icon-outline-style-isolated-white-background-mobile-app-website-logotype-ui-human-symbol-man-silhouette-social-member-sign-personal-profile-sign-10-eps_824631-3088.jpg?w=740'});

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const fetchData = (value) => {
    fetch()
    .then((response) => response.json())
    .then((json) => {
      const results = json.filter((user) =>{
        return (
          value &&
          user&&
          user.name&&
          user.name.toLowerCase().includes(value)
        );
      });
      console.log(results);
    })
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // fetchData(event.target.value);
  };

  const filteredRows = rows.filter((row) =>
    `${row.fullName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );
  




  
  return (

    <div className='flex mt-5'>
      <div className='m-1 bg-white w-3/5 h-full rounded-2xl'>
       <form className='w-[440px] relative m-5'> 
        <div className='relative'>
          <input type='search' placeholder='Search by Id or name' className='w-full p-4 rounded-full bg-slate-100 shadow-inner'  label = "Search" value={searchTerm} onChange={handleSearch} />
          <button className='absolute left-1 top-1/2 -translate-y-1/2 p-4 rounded-full bg-blue-500 text-white'>
            <AiOutlineSearch/>
          </button>
        </div>

        {
          searchTerm.length > 0 &&(
            <div className='absolute top-20 w-full bg-white shadow-xl rounded-xl left-0 p-4 z-10'>
              {
               filteredRows.map((row, index) => (
                  <div key={index}className="block p-2 rounded bg-blue-50 hover:bg-blue-100 cursor-pointer" onClick={() => handleRowClick(row)}>{`${row.fullName}`}</div>
                ))
              }
            </div>
          )
        }
       </form> 

        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight={true}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          onRowClick={(params) => handleRowClick(params.row)}
        />
      </div>
      {selectedRow && (
        <div className='m-1 bg-white h-100% w-2/5 rounded-2xl'>
          <div className='mt-4 mb-8 ml-4 font-bold text-2xl'>
            <h1>{t('personalInfo')}</h1>
          </div>

          <div className='flex flex-col place-items-center'>
            <img src={selectedRow.image} alt="Profile" className='h-44 w-44 mb-4 rounded-full'/>
            <h1 className='text-xl font-semibold'>{selectedRow.fullName} {selectedRow.Role}</h1>
            <h2 >FPS {selectedRow.id}</h2>
          </div>

          <div>
                <h1 className='text-xl font-semibold ml-4 mb-4'>{t('basicDetail')} :</h1>
                <table className='ml-8'>
                    <tbody>
                      <tr>
                        <td>{t('Role')} </td>
                        <td className='w-20 pl-10'>: </td>
                        <td className="font-semibold">{selectedRow.Role}</td>
                      </tr>
                      <tr>
                        <td>{t('Date of birth')} </td>
                        <td className='w-20 pl-10'>: </td>
                        <td className="font-semibold">{selectedRow.DateOfBirth}</td>
                      </tr>
                      <tr>
                        <td>{t('Home Address')} </td>
                        <td className='w-20 pl-10'>: </td>
                        <td className="font-semibold">{selectedRow.HomeAddress}</td>
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
                      <tr>
                        <td>{t('Emergency Contact')}</td>
                        <td className='w-20 pl-10'>: </td>
                        <td className="font-semibold">{selectedRow.emergencyContact}</td>
                      </tr>
                      <tr>
                        <td>{t('Office Location')}</td>
                        <td className='w-20 pl-10'>: </td>
                        <td className="font-semibold">{selectedRow.officeLocation}</td>
                      </tr>
                    </tbody>
                </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default StaffMembers