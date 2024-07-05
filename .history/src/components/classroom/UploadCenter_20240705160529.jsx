import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import {Button} from 'antd';

const UploadCenter = ({text, color}) => {
  return (
    <div>
        <Button type="primary" className='bg-zinc-500' icon={<CloudUploadOutlinedIcon className='text--400'/>} > {text}</Button>
    </div>
  )
}

export default UploadCenter