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
import homeCss from "./Home.module.css";
import Table from "../components/table/Table";
import Title from "../components/title/Title";
import { v4 as uuidv4 } from "uuid";
const Home: React.FC = () => {
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
			let id = uuidv4();
			dispatcher(
				addGroup({ id, district: selectedDist, person: selectedPerson })
			);
		}
	};
	return (
		<div>
			<Title title="Group Master" />
			<section className={homeCss.mainContainer}>
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
				<Table tableData={tableData} />
			</section>
		</div>
	);
};

export default Home;
