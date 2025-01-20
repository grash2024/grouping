import { createSlice } from "@reduxjs/toolkit";
import TableModel from "../../models/tableModel";
const initialState: TableModel[] = [];
const tableSlice = createSlice({
	name: "addGroup",
	initialState: initialState,
	reducers: {
		addGroup: (state, action) => {
			state.push(action.payload);
			localStorage.setItem("data", `${state}`);
		},
		removeGroup: (state, action) => {},
	},
});

export default tableSlice.reducer;
export const { addGroup, removeGroup } = tableSlice.actions;
