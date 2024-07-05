import { Table, Typography } from "antd";
const { Text } = Typography;
const columns = [
  {
    title: "Course",
    dataIndex: "instructor",
  },
  {
    title: "Crhr",
    dataIndex: "crhr",
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

const CoursesList = () => (
  <>
    <Table
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
  </>
);
export default CoursesList;
