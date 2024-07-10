import { Space, Table, Button } from "antd";
import { sectionsData as data } from "../../data/classroomArrayData.js";
import { useState } from "react";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => <a onClick={() => handleSectionClick(record)}>{text}</a>,
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
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
      />
      
    </div>
  );
};
export default SectionsTable;
