import { configureStore } from "@reduxjs/toolkit";
import tableSliceReducer from "../redux/slices/tableSlice";
const store = configureStore({
	reducer: {
		table: tableSliceReducer,
	},
});
export default store;
export type Rootstate = ReturnType<typeof store.getState>;
