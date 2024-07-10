import { Space, Table, Button } from "antd";
import { sectionsData as data } from "../../data/classroomArrayData.js";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Room",
    dataIndex: "room",
    key: "room",
  },
  {
    title: "Capacity",
    dataIndex: "capacity",
    key: "capacity",
  },
  {
    title: "Operations",
    key: "action",
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

const SectionsTable = () => {
  return (
    <div>
      <Button className="bg-indigo-800 mb-2" type="primary">
        <AddBoxOutlinedIcon />
        Add student
      </Button>
      <Table
        columns={columns}
        dataSource={}
      />
      {console.log("the section clicked is : ", section)}
    </div>
  );
};
export default SectionsTable;
