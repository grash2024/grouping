import React from "react";
import TableModel from "../../../models/tableModel";
import tableCss from "./Table.module.css";
import { useDispatch } from "react-redux";
import { removeGroup } from "../../../redux/slices/tableSlice";
interface TableProps {
	tableData: TableModel[];
}
const Table: React.FC<TableProps> = ({ tableData }) => {
	const dispatcher = useDispatch();
	return (
		<div>
			{tableData.length > 0 && (
				<div className={tableCss.tHead}>
					<h1 className={tableCss.distContainer}>District</h1>
					<h1 className={tableCss.perContainer}>Person</h1>
					<h1 className={tableCss.btnContainer}>Operation</h1>
				</div>
			)}

			{tableData.map(({ id, district, person }) => (
				<div key={id} className={tableCss.tRow}>
					<div className={tableCss.distContainer}>{district}</div>
					<div className={tableCss.perContainer}>{person}</div>
					<div className={tableCss.btnContainer}>
						<button
							className={tableCss.btn}
							onClick={() => dispatcher(removeGroup(id))}
						>
							delete
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Table;
