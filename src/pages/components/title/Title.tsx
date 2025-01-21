import React from "react";
import titleCss from "./Title.module.css";
interface TitleProps {
	title: string;
}
const Title: React.FC<TitleProps> = ({ title }) => {
	return <h1 className={titleCss.title}>{title}</h1>;
};

export default Title;
