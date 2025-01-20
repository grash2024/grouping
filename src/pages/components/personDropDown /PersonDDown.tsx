import React from "react";
import PersonModel from "../../../models/personModel";

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
		<select onChange={onChangeHandler}>
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
