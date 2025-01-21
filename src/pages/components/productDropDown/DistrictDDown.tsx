import React from "react";
import dDDCss from "./DistrictDDown.module.css";
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
		<select className={dDDCss.dDDSelect} onChange={onChangeHandler}>
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
