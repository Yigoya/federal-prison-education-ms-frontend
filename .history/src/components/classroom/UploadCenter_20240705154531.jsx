import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import {Button} from 'antd';

const UploadCenter = () => {
  return (
    <div>
        <Button type="primary" icon={<CloudUploadOutlinedIcon />} > Upload </Button>
    </div>
  )
}

export default UploadCenter