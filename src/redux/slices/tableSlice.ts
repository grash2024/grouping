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
			state = state.filter(({ id }) => action.payload !== id);
		},
	},
});

export default tableSlice.reducer;
export const { addGroup, removeGroup } = tableSlice.actions;
