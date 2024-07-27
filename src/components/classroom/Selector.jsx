// /* eslint-disable react/prop-types */
import { Select, Space } from "antd";

const Selector = ({ typeName, options, disabled = false, onChange }) => (
	<Space wrap>
		<Select
			disabled={disabled}
			className="mx-2 my-1"
			defaultValue={typeName}
			style={{
				width: 120,
			}}
			onChange={onChange}
			options={options} // array of options
		/>
	</Space>
);
export default Selector;
