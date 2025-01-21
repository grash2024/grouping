import React, { useState } from "react";
import DistrictDDown from "../components/districtDropDown/DistrictDDown";
import PersonDDown from "../components/personDropDown /PersonDDown";
import CButton from "../components/cButton/CButton";
import districtData from "../../data/districtData";
import personData from "../../data/personData";
import { useDispatch, useSelector } from "react-redux";
import { Rootstate } from "../../redux/store";
import { addGroup, loadGroup } from "../../redux/slices/tableSlice";
import TableModel from "../../models/tableModel";
import homeCss from "./Home.module.css";
import Table from "../components/table/Table";
import Title from "../components/title/Title";

import axios from "axios";

import { toast } from "react-toastify";
import { Bounce } from "react-toastify/unstyled";

const axInstance = axios.create({
	baseURL: "http://localhost:3000/api/group",
	headers: {
		"Content-Type": "application/json",
	},
});
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
	const addToGroup = async () => {
		try {
			if (selectedPerson && selectedDist) {
				const { data } = await axInstance.post("/", {
					district: selectedDist,
					person: selectedPerson,
				});

				dispatcher(
					addGroup({
						_id: data._id,
						district: data.district,
						person: data.person,
					})
				);
				toast.success("Data Inserted to table", {
					position: "top-right",
					autoClose: 1000,
					hideProgressBar: false,
					closeOnClick: false,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
					transition: Bounce,
				});
			}
		} catch (err) {
			if (err instanceof Error) {
				toast.error("Unable to Connect", {
					position: "top-right",
					autoClose: 1000,
					hideProgressBar: false,
					closeOnClick: false,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
					transition: Bounce,
				});
			}
		}
	};
	const loadData = async () => {
		try {
			const { data } = await axInstance.get("/");
			dispatcher(loadGroup(data));
			data.length > 0
				? toast.success("Data Loaded Successfully!", {
						position: "top-right",
						autoClose: 1000,
						hideProgressBar: false,
						closeOnClick: false,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark",
						transition: Bounce,
				  })
				: toast.warn("No Data to load!", {
						position: "top-right",
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: false,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark",
						transition: Bounce,
				  });
		} catch (err) {
			toast.error("Failed to Load Data", {
				position: "top-right",
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
				transition: Bounce,
			});
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
				<CButton title="Load DB" onClickHandler={loadData} />
			</section>
			<section>
				<Table tableData={tableData} />
			</section>
		</div>
	);
};

export default Home;
