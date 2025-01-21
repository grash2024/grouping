import React, { MouseEvent } from "react";
import btnCss from "./CButton.module.css";
interface CButtonProps {
	title: string;
	onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const CButton: React.FC<CButtonProps> = ({ title, onClickHandler }) => {
	return (
		<button className={btnCss.btn} onClick={(e) => onClickHandler(e)}>
			{title}
		</button>
	);
};

export default CButton;
