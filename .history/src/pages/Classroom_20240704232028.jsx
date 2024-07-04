import { useState } from "react";
import Selector from '../components/classroom/Selector.jsx';
import SectionsTable from "../components/classroom/SectionsTable.jsx";
import NewSectionDrawer from "../components/classroom/NewSectionDrawer.jsx";
import {
  departmentOptions,
  yearOptions,
  semesterOptions,
} from "../data/classroomArrayData.js";
import { Button } from "antd";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

const Classroom = () => {
  const [drawerVisiblity, setDrawerVisiblity] = useState(false);
  const handleClick = () => {
    setDrawerVisiblity(prevState => !prevState);
  };

  return (
    <div className="p-8 ">
      <Selector typeName="Department" options={departmentOptions} />
      <Selector typeName="Batch" options={yearOptions} />
      <Selector typeName="Semester" options={semesterOptions} />

      {/* sections table */}
      <div className="mt-4">
        {drawerVisiblity && <NewSectionDrawer visiblity = {drawerVisiblity}/>}
        <div className="grid justify-items-end">
          <Button
            className="bg-[#0085FF] mb-2"
            type="primary"
            onClick={handleClick}
          >
            <AddBoxOutlinedIcon />
            Add section
          </Button>
        </div>
        <SectionsTable />
        <Tablem
      </div>
    </div>
  );
};

export default Classroom;
