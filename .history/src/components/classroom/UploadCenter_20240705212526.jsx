import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import InfoSharpIcon from '@mui/icons-material/InfoSharp';


import { Button } from "antd";

const UploadCenter = ({ text, color }) => {
  return (
    <div className="flex justify-start">
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
      <div>
        <Infos
      </div>
    </div>
  );
};

export default UploadCenter;
