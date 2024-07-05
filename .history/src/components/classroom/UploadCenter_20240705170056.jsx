import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { Button } from "antd";

const UploadCenter = ({ text, color }) => {
  return (
    <div className="flex justify-start">
      <Button
        type="primary"
        className={color}
        icon={<CloudUploadOutlinedIcon className="text-sky-400 hover:text-sky-800" />}
        style={{
          width: "200px",
          display: "flex",
        }}
      >
        {text}
      </Button>
    </div>
  );
};

export default UploadCenter;
