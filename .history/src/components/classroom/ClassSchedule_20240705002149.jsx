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
  
];

const fixedData = [];
for (let i = 0; i < 5; i += 1) {
  fixedData.push({
    key: i,
    name: ['Light', 'Bamboo', 'Little'][i % 3],
    description: 'Everything that has a beginning, has an end.',
  });
}
const ClassSchedule = () => (
  <>
  <h1 className='text-xl font-bold pl-2'>Class schedule</h1>
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered
      summary={(pageData) => {
        let totalBorrow = 0;
        let totalRepayment = 0;
        pageData.forEach(({ borrow, repayment }) => {
          totalBorrow += borrow;
          totalRepayment += repayment;
        });
        return (
          <>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
              <Table.Summary.Cell index={1}>
                <Text type="danger">{totalBorrow}</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={2}>
                <Text>{totalRepayment}</Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0}>Balance</Table.Summary.Cell>
              <Table.Summary.Cell index={1} colSpan={2}>
                <Text type="danger">{totalBorrow - totalRepayment}</Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </>
        );
      }}
    />
  </>
);
export default ClassSchedule;