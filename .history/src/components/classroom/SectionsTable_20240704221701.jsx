import { Space, Table, Button } from "antd";
import { sectionsData as data } from "../../data/classroomArrayData.js";
import { useState } from "react";
import StudentsTable from "./StudentsTable.jsx";


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
      {selectedSection && <StudentsTable />}
    </div>
  );
};
export default SectionsTable;
