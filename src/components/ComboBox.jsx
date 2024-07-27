import { Select, Space } from "antd";
import { useEffect, useState } from "react";

const { Option } = Select;

const ComboBox = ({ options, onChange, index, defaults }) => {
	const [defaultValue, setDefaultValue] = useState([]);

	const onChanges = (value) => {
		console.log(value);
		onChange((prev) => {
			console.log(
				prev.map((item, i) => {
					if (index === i) {
						return value;
					}
					return item;
				})
			);
			return prev.map((item, i) => {
				if (index === i) {
					return value;
				}
				return item;
			});
		});
		setDefaultValue(value);
	};

	useEffect(() => {
		const filtered = options.filter((item) =>
			defaults.includes(item.value)
		);
		console.log(defaults);
		console.log(filtered);
		setDefaultValue(filtered.map((item) => item.value));
		// onChange(filtered.map((item) => item.value));
	}, [defaults]); // Add `options` as a dependency
	console.log(defaultValue);
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
				showSearch
				onChange={onChanges}
				optionFilterProp="children"
				filterOption={(input, option) =>
					option.children.toLowerCase().includes(input.toLowerCase())
				}
				style={{
					width: "100%",
				}}
				placeholder="Please select at least one course"
				value={defaultValue}
			>
				{options.map((option) => (
					<Option key={option.value} value={option.value}>
						{option.label}
					</Option>
				))}
			</Select>
		</Space>
	);
};

export default ComboBox;
