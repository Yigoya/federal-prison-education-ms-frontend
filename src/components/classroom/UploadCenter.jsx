import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { Button } from "antd";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
const UploadCenter = ({ text, color, info, setFile }) => {
	const inputRef = useRef(null);
	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};
	return (
		<div className="flex justify-start text-gray-600">
			<Button
				onClick={() => inputRef.current.click()}
				type="primary"
				className={color}
				icon={<CloudUploadOutlinedIcon className="text-sky-400" />}
				style={{
					width: "200px",
					display: "flex",
				}}
			>
				<input
					ref={inputRef}
					type="file"
					onChange={handleFileChange}
					className="hidden"
				/>
				{text}
			</Button>
			<div className="text-[12px] flex mt-2">
				<InfoOutlinedIcon className="pb-1.5" />
				<p>{info}</p>
			</div>
		</div>
	);
};

export default UploadCenter;
