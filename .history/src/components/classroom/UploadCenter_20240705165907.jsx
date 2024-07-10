import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { Button } from "antd";

const UploadCenter = ({ text, color }) => {
  return (
    <div>
      <Button
        type="primary"
        className={color}
        icon={<CloudUploadOutlinedIcon className="text-sky-400" />}
        style={{
          width: "200px",
          display: "flex",
          flexDirection: ""
        }}
      >
        {text}
      </Button>
    </div>
  );
};

export default UploadCenter;
