import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import {Button} from 'antd';

const UploadCenter = () => {
  return (
    <div>
        <Button type="primary" icon={<CloudUploadOutlinedIcon />} > Upload attendance</Button>
    </div>
  )
}

export default UploadCenter