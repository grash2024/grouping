import React, { useEffect, useState } from "react";
import DistrictDDown from "../components/productDropDown/DistrictDDown";
import PersonDDown from "../components/personDropDown /PersonDDown";
import CButton from "../components/cButton/CButton";
import districtData from "../../data/districtData";
import personData from "../../data/personData";
import { useDispatch, useSelector } from "react-redux";
import { Rootstate } from "../../redux/store";
import { addGroup } from "../../redux/slices/tableSlice";
import TableModel from "../../models/tableModel";

const Home: React.FC = () => {
	let id = 0;
	useEffect(() => {}, []);
	const [selectedDist, setSelectedDist] = useState("");
	const [selectedPerson, setSelectedPerson] = useState("");
	const tableData: TableModel[] = useSelector(
		(state: Rootstate) => state.table
	);

	const dispatcher = useDispatch();

	const selectedDistHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedDist(e.target.value);
	};
	const selectedPersonHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedPerson(e.target.value);
	};
	const addToGroup = () => {
		if (selectedPerson && selectedDist) {
			dispatcher(
				addGroup({ id: id, district: selectedDist, person: selectedPerson })
			);
		}
	};
	return (
		<div>
			<section>
				<DistrictDDown
					option="District"
					data={districtData}
					onChangeHandler={selectedDistHandler}
				/>
				<PersonDDown
					option="Person"
					data={personData}
					onChangeHandler={selectedPersonHandler}
				/>
				<CButton title="Save" onClickHandler={addToGroup} />
			</section>
			<section>
				{tableData.length > 0 && <h1>District,Person</h1>}
				{tableData.map(({ district, person }) => (
					<div style={{ display: "flex" }}>
						<p>{district}</p>
						<p>{person}</p>
					</div>
				))}
			</section>
		</div>
	);
};

export default Home;
