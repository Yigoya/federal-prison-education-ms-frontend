import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'image',
    headerName: 'Profile',
    width: 130,
    editable: true,
    renderCell: (params) => (
      <img src={params.value} className='h-10 w-10 rounded-3xl' alt='Profile' />
    ),
  },
  { field: 'id', headerName: 'ID Number', width: 130 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
];

const rows = [
  { id: 1, department: 'Software Engineering', batch: '2024', section: 'E', email: 'someone@smt.com', phone: '0901010101', lastName: 'Snow', firstName: 'Jon', age: 35, image: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, department: 'Software Engineering', batch: '2024', section: 'E', email: 'someone@smt.com', phone: '0901010101', lastName: 'Lannister', firstName: 'Cersei', age: 42, image: 'https://images.unsplash.com/photo-1604883781269-d121d9ad20f6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, department: 'Software Engineering', batch: '2024', section: 'E', email: 'someone@smt.com', phone: '0901010101', lastName: 'Lannister', firstName: 'Jaime', age: 45, image: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 4, department: 'Software Engineering', batch: '2024', section: 'E', email: 'someone@smt.com', phone: '0901010101', lastName: 'Stark', firstName: 'Arya', age: 16, image: 'https://images.unsplash.com/photo-1593132289185-e439d9c99c73?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 5, department: 'Software Engineering', batch: '2024', section: 'E', email: 'someone@smt.com', phone: '0901010101', lastName: 'Targaryen', firstName: 'Daenerys', age: null, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 6, department: 'Software Engineering', batch: '2024', section: 'E', email: 'someone@smt.com', phone: '0901010101', lastName: 'Melisandre', firstName: null, age: 150, image: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 7, department: 'Software Engineering', batch: '2024', section: 'E', email: 'someone@smt.com', phone: '0901010101', lastName: 'Clifford', firstName: 'Ferrara', age: 44, image: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  },
  { id: 8, department: 'Software Engineering', batch: '2024', section: 'E', email: 'someone@smt.com', phone: '0901010101', lastName: 'Frances', firstName: 'Rossini', age: 36, image: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  },
  { id: 9, department: 'Software Engineering', batch: '2024', section: 'E', email: 'someone@smt.com', phone: '0901010101', lastName: 'Roxie', firstName: 'Harvey', age: 65, image: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  },
];

export default function Students() {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (params) => {
    setSelectedRow(params.row);
  };

  return (
    <div className='flex'>
      <div className='m-1 bg-stone-200 w-3/5 height-100% rounded-2xl'>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 50 },
            },
          }}
          pageSizeOptions={[50, 100]}
          onRowClick={handleRowClick}
        />
      </div>
      {selectedRow && (
        <div className='m-1 bg-stone-200 w-2/5 h-100% w-2/5 rounded-2xl'>
          <div className='mt-4 mb-8 ml-4 font-bold text-2xl'>
            <h1>Personal Information</h1>
          </div>

          <div className='flex flex-col place-items-center'>
            <img src={selectedRow.image} alt="Profile" className='h-44 w-44 mb-4 rounded-full'/>
            <h1 className='text-xl font-semibold'>{selectedRow.firstName} {selectedRow.lastName}</h1>
            <h2 >{selectedRow.id}</h2>
          </div>

          <div>
                <h1 className='text-xl font-semibold ml-4 mb-4'>Basic Detail: </h1>
                <table className='ml-8'>
                    <tbody>
                      <tr>
                        <td>Department </td>
                        <td className='w-20 pl-10'>: </td>
                        <td className="font-semibold">{selectedRow.department}</td>
                      </tr>
                      <tr>
                        <td>Year </td>
                        <td className='w-20 pl-10'>: </td>
                        <td className="font-semibold">{selectedRow.batch}</td>
                      </tr>
                      <tr>
                        <td>Section </td>
                        <td className='w-20 pl-10'>: </td>
                        <td className="font-semibold">{selectedRow.section}</td>
                      </tr>
                      <tr>
                        <td>Email </td>
                        <td className='w-20 pl-10'>: </td>
                        <td className="font-semibold">{selectedRow.email}</td>
                      </tr>
                      <tr>
                        <td>Phone Number </td>
                        <td className='w-20 pl-10'>: </td>
                        <td className="font-semibold">{selectedRow.phone}</td>
                      </tr>
                    </tbody>
                </table>
          </div>
        </div>
      )}
    </div>
  );
}
