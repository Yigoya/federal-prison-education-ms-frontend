// /* eslint-disable react/prop-types */
import { Select, Space } from 'antd';


const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Selector = ({typeName, options} ) => (
  <Space wrap>
    <Select
      className='mx-2 my-1'
      defaultValue={typeName}
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={options} // array of options
    />
  </Space>
);
export default Selector;
