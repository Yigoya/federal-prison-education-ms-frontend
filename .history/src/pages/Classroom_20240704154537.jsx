import Selector from 
import SectionsTable from "../components/SectionsTable";
import {
  departmentOptions,
  yearOptions,
  semesterOptions,
} from "../data/classroomArrayData.js";
import { Button } from "antd";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { useState } from "react";
import NewSectionDrawer from "../components/NewSectionDrawer";

const Classroom = () => {
  const [drawerVisiblity, setDrawerVisiblity] = useState(false);
  const handleClick = () => {
    setDrawerVisiblity(prevState => !prevState);
  };

  return (
    <div className="p-8">
      <Selector typeName="Department" options={departmentOptions} />
      <Selector typeName="Batch" options={yearOptions} />
      <Selector typeName="Semester" options={semesterOptions} />

      {/* sections table */}
      <div className="mt-4">
        {drawerVisiblity && <NewSectionDrawer visiblity = {drawerVisiblity}/>}
        <div className="grid justify-items-end">
          <Button
            className="bg-indigo-800 mb-2"
            type="primary"
            onClick={handleClick}
          >
            <AddBoxOutlinedIcon />
            Add section
          </Button>
        </div>
        <SectionsTable />
      </div>
    </div>
  );
};

export default Classroom;
