import { Space, Table, Button } from "antd";
import { sectionsData as data } from "../../data/classroomArrayData.js";
import { useState } from "react";
import StudentsTable from "./StudentsTable.jsx";
import ClassSchedule from "./ClassSchedule.jsx";
import SectionTeachers from "./SectionTeachers.jsx";
import CoursesList from "./CoursesList.jsx";

const SectionsTable = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [hoveredRow, setHoveredRow] = useState(null);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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

  const handleRowClick = (record) => {
    setActiveSection((prev) => (prev === record.name ? null : record.name));
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
          onMouseEnter: () => setHoveredRow(record.name),
          onMouseLeave: () => setHoveredRow(null),
          style: {
            backgroundColor: record.name === activeSection
              ? 'gray'
              : hoveredRow === record.name
              ? 'lightgray'
              : 'white',
            cursor: 'pointer',
          },
        })}
      />
      {activeSection && (
        <div>
          <StudentsTable section={activeSection} />
          <div className="flex gap-3">
            <ClassSchedule /> <br />
            <CoursesList />
          </div>
          <SectionTeachers />
        </div>
      )}
    </div>
  );
};

export default SectionsTable;
