import { createSlice } from "@reduxjs/toolkit";
import TableModel from "../../models/tableModel";
const initialState: TableModel[] = JSON.parse(
	localStorage.getItem("data") || "[]"
);
const tableSlice = createSlice({
	name: "addGroup",
	initialState: initialState,
	reducers: {
		addGroup: (state, action) => {
			state.push(action.payload);
			localStorage.setItem("data", JSON.stringify(state));
		},
		removeGroup: (state, action) => {
			state = state.filter((ele) => ele._id !== action.payload);
			localStorage.setItem("data", JSON.stringify(state));
			return state;
		},
		loadGroup: (state, action) => {
			state = action.payload;
			localStorage.setItem("data", JSON.stringify(state));
			return state;
		},
	},
});

export default tableSlice.reducer;
export const { addGroup, removeGroup, loadGroup } = tableSlice.actions;
