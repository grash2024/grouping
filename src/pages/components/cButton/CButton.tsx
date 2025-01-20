import React, { MouseEvent } from "react";
interface CButtonProps {
	title: string;
	onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const CButton: React.FC<CButtonProps> = ({ title, onClickHandler }) => {
	return <button onClick={(e) => onClickHandler(e)}>{title}</button>;
};

export default CButton;
