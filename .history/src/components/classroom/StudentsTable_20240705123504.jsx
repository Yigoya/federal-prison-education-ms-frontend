import { Space, Table, Button } from "antd";
import { studentsData as data } from "../../data/classroomArrayData.js";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
    onHeaderCell: () => ({
      style: { backgroundColor: "#7c7c80", color: "#fff" },
    }),
  },
  {
    title: "ID No.",
    dataIndex: "id",
    key: "id",
    onHeaderCell: () => ({
      style: { backgroundColor: "#7c7c80", color: "#fff" },
    }),
  },
  {
    title: "Year",
    dataIndex: "year",
    key: "year",
    onHeaderCell: () => ({
      style: { backgroundColor: "#7c7c80", color: "#fff" },
    }),
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    onHeaderCell: () => ({
      style: { backgroundColor: "#7c7c80", color: "#fff" },
    }),
  },
  {
    title: "Operations",
    key: "action",
    onHeaderCell: () => ({
      style: { backgroundColor: "#7c7c80", color: "#fff" },
    }),
    render: () => (
      <Space size="middle">
        <Button type="primary" ghost>
          Edit
        </Button>
        <Button type="primary" danger ghost>
          Delete
        </Button>
      </Space>
    ),
  },
];

// eslint-disable-next-line react/prop-types
const StudentsTable = ({ section }) => {
  return (
    <div>
      <Button className="bg-[#0085FF] mb-2" type="primary">
        <AddBoxOutlinedIcon />
        Add student
      </Button>
      <Table
      
        columns={columns}
        dataSource={data.filter((student) => student.section === section)}
      />
      {console.log("the section clicked is : ", section)}
    </div>
  );
};
export default StudentsTable;
