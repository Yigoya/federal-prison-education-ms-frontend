import { Table, Typography } from "antd";
const { Text } = Typography;
const columns = [
  {
    title: "Subject",
    dataIndex: "subject",
    onHeaderCell: () => ({
      style: { backgroundColor: "#7c7c80", color: "#fff" },
    }),
  },
  {
    title: "Crhr",
    dataIndex: "crhr",
    onHeaderCell: () => ({
      style: { backgroundColor: "#7c7c80", color: "#fff" },
    }),
  },
  {
    title: "Teacher",
    dataIndex: "teacher",
    onHeaderCell: () => ({
      style: { backgroundColor: "#7c7c80", color: "#fff" },
    }),
  },
  {
    title: "Day",
    dataIndex: "day",
    onHeaderCell: () => ({
      style: { backgroundColor: "#7c7c80", color: "#fff" },
    }),
  },
  {
    title: "Time",
    dataIndex: "time",
    onHeaderCell: () => ({
      style: { backgroundColor: "#7c7c80", color: "#fff" },
    }),
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
  <div className="flex justify-center">
    <div>
    <h1 className="text-xl mb-2 ml-1 font-bold">Class schedule</h1> 
    <Table
    className="w-[700px]"
      borderColor="#0085FF"
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered
      
      rowClassName={(record, index) =>
        index % 2 === 0 ? "bg-zinc-200" : "bg-blue-100"
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
  </div>
);
export default ClassSchedule;
