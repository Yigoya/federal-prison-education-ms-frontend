import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


import { Button } from "antd";

const UploadCenter = ({ text, color, info }) => {
  return (
    <div className="flex justify-start text-gray-700">
      <Button
        type="primary"
        className={color}
        icon={<CloudUploadOutlinedIcon className="text-sky-400" />}
        style={{
          width: "200px",
          display: "flex",
        }}
      >
        {text}
      </Button>
      <div className="text-sm flex mt-2">
        <InfoOutlinedIcon className="p-1" />
        <p>{info}</p>
      </div>
    </div>
  );
};

export default UploadCenter;
