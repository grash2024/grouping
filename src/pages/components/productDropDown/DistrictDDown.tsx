import React from "react";

import DistrictModel from "../../../models/districtModel";
interface DistrictDDownProps {
	data: DistrictModel[];
	option: string;
	onChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const DistrictDDown: React.FC<DistrictDDownProps> = ({
	data,
	option,
	onChangeHandler,
}) => {
	return (
		<select onChange={onChangeHandler}>
			<option value="">{option}</option>
			{data.map(
				({ id, dName }): JSX.Element => (
					<option value={dName} key={id}>
						{dName}
					</option>
				)
			)}
		</select>
	);
};

export default DistrictDDown;
