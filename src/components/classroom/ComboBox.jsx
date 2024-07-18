import { Select, Space } from 'antd';


const handleChange = (value) => {
  console.log(`selected ${value}`);
};


// eslint-disable-next-line react/prop-types
const ComboBox = ({options}) => (
  <Space
    style={{
      width: '100%',
    }}
    direction="vertical"
  >
    <Select
      mode="multiple"
      allowClear
      style={{
        width: '100%',
      }}
      placeholder="Please select atleast one course"
      defaultValue={[options[0], options[1]]}
      onChange={handleChange}
      options={options}
    />
  </Space>
);
export default ComboBox;
