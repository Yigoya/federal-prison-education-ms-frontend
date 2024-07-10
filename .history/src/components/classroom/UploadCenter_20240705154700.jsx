import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import {Button} from 'antd';

const UploadCenter = () => {
  return (
    <div>
        <Button type="primary" className='bg-zinc-500' icon={<CloudUploadOutlinedIcon className='text-sky-300'/>} > Upload attendance</Button>
    </div>
  )
}

export default UploadCenter