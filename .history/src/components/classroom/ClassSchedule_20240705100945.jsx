import { Table, Typography } from "antd";
const { Text } = Typography;
const columns = [
  {
    title: "Subject",
    dataIndex: "subject",
  },
  {
    title: "Crhr",
    dataIndex: "crhr",
  },
  {
    title: "Teacher",
    dataIndex: "teacher",
  },
  {
    title: "Day",
    dataIndex: "day",
  },
  {
    title: "Time",
    dataIndex: "time",
  },
];
const data = [
  {
    key: "1",
    subject: "HR",
    crhr: 3,
    teacher: "Melkamu",
    day: "monday",
    time: "2:30 - 4:00"
  },
  {
    key: "2",
    subject: "Statstics",
    crhr: 3,
    teacher: "Hailu",
    day: "tuesday",
    time: "2:30 - 4:00"
  },
  {
    key: "3",
    subject: "SWE",
    crhr: 3,
    teacher: "Gemechu",
    day: "friday",
    time: "2:30 - 4:00"
  },
  {
    key: "3",
    subject: "UI Design",
    crhr: 3,
    teacher: "Meklit",
    day: "wednesday",
    time: "2:30 - 4:00"
  },
];

const ClassSchedule = () => (
  <div >
    <h1 className="text-xl font-bold pl-2 w-">Class schedule</h1>
    <Table
      borderColor="#0085FF"
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered
      
      rowClassName={(record, index) =>
        index % 2 === 0 ? "bg-blue-400" : "bg-blue-300"
      }
      summary={(pageData) => {
        let totalCrhr = 0;
        pageData.forEach(({ crhr }) => {
          totalCrhr += crhr;
        });
        return (
          <>
            <Table.Summary.Row className="font-bold bg-gray-300">
              <Table.Summary.Cell index={0}>Total CrHr</Table.Summary.Cell>
              <Table.Summary.Cell index={1}>
                <Text>{totalCrhr}</Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </>
        );
      }}
    />
  </div>
);
export default ClassSchedule;
