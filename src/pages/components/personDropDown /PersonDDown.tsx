import React from "react";
import PersonModel from "../../../models/personModel";
import pDDCss from "./PersonDDown.module.css";
interface PersonDDownProps {
	data: PersonModel[];
	option: string;
	onChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const PersonDDown: React.FC<PersonDDownProps> = ({
	data,
	option,
	onChangeHandler,
}) => {
	return (
		<select className={pDDCss.pDDSelect} onChange={onChangeHandler}>
			<option value="">{option}</option>
			{data.map(
				({ id, pName }): JSX.Element => (
					<option value={pName} key={id}>
						{pName}
					</option>
				)
			)}
		</select>
	);
};

export default PersonDDown;
