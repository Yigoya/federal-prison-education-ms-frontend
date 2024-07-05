import { Space, Table, Button } from "antd";
import { sectionsData as data } from "../../data/classroomArrayData.js";
import { useState } from "react";
import StudentsTable from "./StudentsTable.jsx";
import ClassSchedule from "./ClassSchedule.jsx";
import CoursesList from "./CoursesList.jsx";
import InstructorDetails from "./InstructorDetails.jsx";

const SectionsTable = () => {
  const [activeSection, setActiveSection] = useState(null);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a onClick={() => handleSectionClick(text)}>{text}</a>,
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

  const handleSectionClick = (sectionName) => {
    setActiveSection((prev) => (prev === sectionName ? null : sectionName));
  };

  return (
    <div>
      <Table columns={columns} dataSource={data} />
      {activeSection && (
        <div>
          <StudentsTable section={activeSection} />
          <div className="flex gap-3">
            <ClassSchedule /> <br />
            <CoursesList />
          </div>
          <h1 className="text-xl mb-2 mt-4 ml-1 font-bold">Instructors</h1>
          <div className="flex">
            <InstructorDetails instructor={"gemechu")/>
            <InstructorDetails />
            <InstructorDetails />
          </div>
        </div>
      )}
    </div>
  );
};
export default SectionsTable;
