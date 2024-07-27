import { Select, Space } from "antd";

const handleChange = (value) => {
	console.log(`selected ${value}`);
};

// eslint-disable-next-line react/prop-types
const ComboBox = ({ options, defaults, onChange }) => {
	const onChanges = (value) => {
		onChange(value);
		console.log(value);
	};
	return (
		<Space
			style={{
				width: "100%",
			}}
			direction="vertical"
		>
			<Select
				mode="multiple"
				allowClear
				style={{
					width: "100%",
				}}
				placeholder="Please select at least one course"
				defaultValue={defaults}
				onChange={onChanges}
				options={options}
				filterOption={(input, option) =>
					option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
				}
			/>
		</Space>
	);
};
export default ComboBox;
