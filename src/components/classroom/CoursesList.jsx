import { Table } from "antd";

const columns = [
  {
    title: "Course",
    dataIndex: "course",
    onHeaderCell: () => ({
      style: { backgroundColor: "#7c7c80", color: "#fff" },
    }),
  },
  {
    title: "Instructor",
    dataIndex: "instructor",
    onHeaderCell: () => ({
        style: { backgroundColor: "#7c7c80", color: "#fff" }
      })
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
        <div>
        <h1 className="text-xl mb-2 font-bold">Courses</h1> 
      <Table
        className="w-[400px]"
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        rowClassName={(record, index) =>
          index % 2 === 0 ? "bg-zinc-200" : "bg-zinc-100"
        }
      />
        </div>
    
    </div>
  </>
);
export default CoursesList;
