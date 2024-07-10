import { Table, Typography } from "antd";
const { Text } = Typography;
const columns = [
  {
    title: "Course",
    dataIndex: "course",
  },
  {
    title: "Instructor",
    dataIndex: "instructor",
  },
];
const data = [
  {
    key: "1",
    course: "Hr",
    instructor: "Melkamu"
  },
  {
    key: "2",
    course: "DSA",
    instructor: "Meklit"
  },
  {
    key: "3",
    course: "DLD",
    instructor: "Wesen"
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
