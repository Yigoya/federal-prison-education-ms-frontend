import { Table } from "antd";

const columns = [
  {
    title: "Course",
    dataIndex: "course",
    onHeaderCell: () => ({
      style: { backgroundColor: "#0085FF", color: "#fff" },
    }),
  },
  {
    title: "Instructor",
    dataIndex: "instructor",
    onHeaderCell: () => ({
        style: { backgroundColor: "#0085FF", color: "#fff" }
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

        </div>
    
    </div>
  </>
);
export default CoursesList;
