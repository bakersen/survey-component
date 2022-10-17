import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import SurveyTable from "../SurveyTable";
import TabsPanel from "./Tabs";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

function createRow(rowLabel, rowValue, id) {
	const obj = {
		id: id.length === 0 ? 1 : id[id.length - 1].id + 1,
		label: rowLabel,
		value:
			rowValue === "" || !rowValue
				? rowLabel.toLowerCase().split(" ")[0]
				: rowValue,
	};
	return obj;
}

function createColumn(columnLabel, columnValue) {
	const obj = {
		label: columnLabel,
		value:
			columnValue === "" || !columnValue
				? columnLabel.toLowerCase().split(" ")[0]
				: columnValue,
	};
	return obj;
}

export default function ModalBox(props) {
	const { surveyforms, setSurveyforms } = props;
	const [open, setOpen] = React.useState(false);
	const [newFormName, setNewFormName] = React.useState("");
	const [rowLabel, setRowLabel] = React.useState("");
	const [rowValue, setRowValue] = React.useState("");
	const [columnLabel, setColumnLabel] = React.useState("");
	const [columnValue, setColumnValue] = React.useState("");
	const [rows, setRow] = React.useState([]);
	const [columns, setColumn] = React.useState([]);

	React.useEffect(() => {}, [
		newFormName,
		rowLabel,
		rowValue,
		columnLabel,
		columnValue,
	]);

	console.log(rowLabel);
	console.log(rowValue);
	console.log(rows)

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const addRow = () => {
		setRow([...rows, createRow(rowLabel, rowValue, rows)]);
		setRowLabel("");
		setRowValue("");
	};

	const addColumn = () => {
		setColumn([...columns, createColumn(columnLabel, columnValue)]);
		setColumnLabel("");
		setColumnValue("");
	};

	const deleteRow = (id) => {
		setRow(rows.filter((value) => value.id !== id));
	}

	const saveForm = () => {
		const details = {
			id: surveyforms.length === 0 ? 1 : surveyforms[surveyforms.length - 1].id + 1,
			formName: newFormName,
			rows:rows,
			columns:columns
		};
		setSurveyforms([...surveyforms, details]);
		setNewFormName("");
		handleClose();
	};

	return (
		<div>
			<Button
				sx={{ boxShadow: "none", fontWeight: 700, fontSize: "12px" }}
				size="small"
				variant="contained"
				onClick={handleClickOpen}
			>
				<AddIcon /> Create Form
			</Button>
			<Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="lg">
				<DialogContent
					style={{
						backgroundColor: "rgb(235 235 235)",
					}}
				>
					<Box
						style={{
							display: "flex",
							justifyContent: "space-between",
							marginBottom: "10px",
						}}
					>
						<Typography variant="h6">Survey Component</Typography>
						<CloseIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
					</Box>
					<Box sx={{ flexGrow: 1 }}>
						<Grid container spacing={2}>
							<Grid xs={12} md={6}>
								<Paper sx={{ padding: "15px" }}>
									<TabsPanel
										rows={rows}
										columns={columns}
										newFormName={newFormName}
										setNewFormName={setNewFormName}
										addRow={addRow}
										addColumn={addColumn}
										rowLabel={rowLabel}
										rowValue={rowValue}
										columnLabel={columnLabel}
										columnValue={columnValue}
										setRowLabel={setRowLabel}
										setRowValue={setRowLabel}
										setColumnLabel={setColumnLabel}
										setColumnValue={setColumnValue}
										deleteRow={deleteRow} 
									/>
								</Paper>
							</Grid>
							<Grid xs={12} md={6}>
								<Paper sx={{ padding: "15px" }}>
									<Typography variant="h6">Preview</Typography>
									<Divider sx={{ margin: "10px 0" }} />
									<SurveyTable rows={rows} columns={columns} newFormName={newFormName} />
								</Paper>
								<Stack sx={{ marginTop: "15px" }} spacing={2} direction="row">
									<Button onClick={saveForm} color="success" variant="contained">
										Save
									</Button>
									<Button onClick={handleClose} color="info" variant="outlined">
										Cancel
									</Button>
								</Stack>
							</Grid>
						</Grid>
					</Box>
				</DialogContent>
			</Dialog>
		</div>
	);
}
