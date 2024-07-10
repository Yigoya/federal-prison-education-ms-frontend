import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import {Button} from 'antd';

const UploadCenter = () => {
  return (
    <div>
        <Button type="primary" icon={<DownloadOutlined />} size={size} />
        <CloudUploadOutlinedIcon />
    </div>
  )
}

export default UploadCenter