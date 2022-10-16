import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Radio from "@mui/material/Radio";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../TableStyles";

function createRow(rowLabel, rowValue) {
	const obj = {
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




export default function SurveyTable() {
	const [selectedValue, setSelectedValue] = React.useState(0);
	const [rowLabel, setRowLabel] = React.useState("");
	const [rowValue, setRowValue] = React.useState("");
	const [columnLabel, setColumnLabel] = React.useState("");
	const [columnValue, setColumnValue] = React.useState("");
	const [rows, setRow] = React.useState([])
	const [columns, setColumn] = React.useState([]);

	React.useEffect(() => {}, [rowLabel, rowValue, columnLabel, columnValue]);

	const handleChange = (event) => {
		setSelectedValue(event.target.value);
	};

	const addRow = () => {		
		setRow([...rows, createRow(rowLabel, rowValue)]);
		setRowLabel("");
		setRowValue("");
	}

	const addColumn = () => {
		setColumn([...rows, createColumn(columnLabel, columnValue)]);
		setColumnLabel("");
		setColumnValue("");
	};



	return (
		<ThemeProvider theme={theme}>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div style={{ width: "60%" }}>
					<input
						value={rowLabel}
						onChange={(e) => setRowLabel(e.target.value)}
						type="text"
						placeholder="label"
					/>
					<input
						value={rowValue}
						onChange={(e) => setRowValue(e.target.value)}
						type="text"
						placeholder="value"
					/>
					<button onClick={addRow}>Add Row</button>
				</div>
				<div style={{ width: "50%" }}>
					<input
						value={columnLabel}
						onChange={(e) => setColumnLabel(e.target.value)}
						type="text"
						placeholder="label"
					/>
					<input
						value={columnValue}
						onChange={(e) => setColumnValue(e.target.value)}
						type="text"
						placeholder="value"
					/>
					<button onClick={addColumn}>Add Column</button>
				</div>
			</div>
			<TableContainer>
				<Table
					sx={{ minWidth: 100, background: "white" }}
					aria-label="simple table"
					size="small"
				>
					<TableHead>
						<TableRow variant="head">
							{rows.length === 0 ? null : (
								<TableCell padding="none" align="center">
									{" "}
								</TableCell>
							)}
							{columns.length === 0 ? (
								<TableCell padding="none" align="center">
									{" "}
								</TableCell>
							) : (
								columns.map((value, index) => {
									return (
										<TableCell key={index} padding="none" align="center">
											{value.label}
										</TableCell>
									);
								})
							)}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.length === 0 && columns.length === 0 ? (
							<TableRow
								sx={{
									"&:nth-child(odd)": {
										backgroundColor: columns.length === 0 ? "white" : "#eee",
									},
								}}
							>
								<TableCell
									sx={{ width: "20%" }}
									align="center"
									padding="none"
									component="td"
									scope="row"
								>
									{" "}
								</TableCell>
								<TableCell align="center" padding="none" component="td" scope="row">
									<Radio
										checked={selectedValue === 0}
										onChange={handleChange}
										value={0}
										name="radio-buttons"
										inputProps={{ "aria-label": "A" }}
										size="small"
									/>
								</TableCell>
							</TableRow>
						) : rows.length === 0 && columns.length !== 0 ? (
							columns.map((value, index) => {
								return (
									<TableCell align="center" padding="none" component="td" scope="row">
										<Radio
											checked={selectedValue === value.value}
											onChange={handleChange}
											value={value.value}
											name="radio-buttons"
											inputProps={{ "aria-label": "A" }}
											size="small"
										/>
									</TableCell>
								);
							})
						) : (
							rows.map((row) => (
								<TableRow
									key={row.value}
									sx={{
										"&:nth-child(odd)": {
											backgroundColor: columns.length === 0 ? "white" : "#eee",
										},
									}}
								>
									<TableCell align="center" padding="none" component="td" scope="row">
										{row.label}
									</TableCell>
									{columns.length === 0 ? (
										<TableCell align="center" padding="none" component="td" scope="row">
											<Radio
												checked={selectedValue === row.value}
												onChange={handleChange}
												value={row.value}
												inputProps={{ "aria-label": "A" }}
												size="small"
											/>
										</TableCell>
									) : (
										columns.map((value, index) => {
											return (
												<TableCell align="center" padding="none" component="td" scope="row">
													<Radio
														checked={selectedValue === value.value + row.value}
														onChange={handleChange}
														value={value.value + row.value}
														name="radio-buttons"
														inputProps={{ "aria-label": "A" }}
														size="small"
													/>
												</TableCell>
											);
										})
									)}
								</TableRow>
							))
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</ThemeProvider>
	);
}
