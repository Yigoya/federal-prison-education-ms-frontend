import { Table } from "antd";
import '../../App.css';

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
    instructor: "Melkamu",
  },
  {
    key: "2",
    course: "DSA",
    instructor: "Meklit",
  },
  {
    key: "3",
    course: "DLD",
    instructor: "Wesen",
  },
];

const CoursesList = () => (
  <>
    <div className="flex justify-center">
      <Table
        className="w-[500px]"
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        rowClassName={(record, index) =>
          index % 2 === 0 ? "bg-blue-400" : "bg-blue-300"
        }
      />
    </div>
  </>
);
export default CoursesList;
