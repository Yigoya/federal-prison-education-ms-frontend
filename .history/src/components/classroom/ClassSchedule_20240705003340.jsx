import React from 'react';
import { Table, Typography } from 'antd';
const { Text } = Typography;
const columns = [
  {
    title: 'Subject',
    dataIndex: 'subject',
  },
  {
    title: 'Crhr',
    dataIndex: 'crhr',
  },
  {
    title: 'Teacher',
    dataIndex: 'teacher',
  },
];
const data = [
  {
    key: '1',
    subject: 'HR',
    crhr: 3,
    teacher: "Melkamu",
  },
  {
    key: '2',
    subject: 'Statstics',
    crhr: 3,
    teacher: "Hailu",
  },
  {
    key: '3',
    subject: 'SWE',
    crhr: 3,
    teacher: "Gemechu",
  },
  {
    key: '3',
    subject: 'UI Design',
    crhr: 3,
    teacher: "Meklit",
  },
];


const ClassSchedule = () => (
  <>
  <h1 className='text-xl font-bold pl-2'>Class schedule</h1>
    <Table
    
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered
      summary={(pageData) => {
        let totalCrhr = 0;
        pageData.forEach(({ crhr }) => {
          totalCrhr += crhr;
        });
        return (
          <>
            <Table.Summary.Row className='font-bold text-[#0085FF]'>
              <Table.Summary.Cell index={0}>Total CrHr</Table.Summary.Cell>
              <Table.Summary.Cell index={1} >
                <Text className='text-[#0085FF]'>{totalCrhr}</Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </>
        );
      }}
    />
  </>
);
export default ClassSchedule;