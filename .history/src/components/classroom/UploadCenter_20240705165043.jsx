import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import {Button} from 'antd';

const UploadCenter = ({text, color}) => {
  return (
    <div>
        <Button type="primary" className={color} icon={text === "Upload attendance"?<CloudUploadOutlinedIcon className="text-sky-400"/>:<} > {text}</Button>
    </div>
  )
}

export default UploadCenter