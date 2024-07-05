import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import {Button} from 'antd';

const UploadCenter = ({text, color}) => {
  return (
    <div>
        <Button type="primary" className={color} classNames={color } icon={<CloudUploadOutlinedIcon className="text-sky-400"/>} > {text}</Button>
    </div>
  )
}

export default UploadCenter