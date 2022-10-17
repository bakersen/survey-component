import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../TableStyles";



export default function SurveyTable(props) {
	const { newFormName, rows, columns} = props;
	console.log(rows)
	return (
		<ThemeProvider theme={theme}>
			{newFormName}
			<TableContainer sx={{marginTop:"10px"}}>
				<Table
					sx={{ minWidth: 100, background: "white" }}
					aria-label="simple table"
					size="small"
				>
					<TableHead>
						<TableRow variant="head">
							{rows.length === 0 ? null : (
								<TableCell padding="normal" align="center">
									{" "}
								</TableCell>
							)}
							{columns.length === 0 ? (
								<TableCell padding="normal" align="center">
									{" "}
								</TableCell>
							) : (
								columns.map((value, index) => {
									return (
										<TableCell key={index} padding="normal" align="center">
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
									padding="normal"
									component="td"
									scope="row"
								>
									{" "}
								</TableCell>
								<TableCell align="center" padding="normal" component="td" scope="row">
									<input type="radio" name="radio-buttons" value="" />
								</TableCell>
							</TableRow>
						) : rows.length === 0 && columns.length !== 0 ? (
							columns.map((value, index) => {
								return (
									<TableCell align="center" padding="none" component="td" scope="row">
										<input type="radio" name="radio-buttons" value={value.value} />
									</TableCell>
								);
							})
						) : (
							rows.map((row, index) => {
								const rowIndex = index;
								return (
									<TableRow
										key={rowIndex}
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
											<TableCell
												align="center"
												padding="normal"
												component="td"
												scope="row"
											>
												<input type="radio" name="radio-buttons" value={row.value} />
											</TableCell>
										) : (
											columns.map((column, index) => {
												return (
													<TableCell
														align="center"
														padding="normal"
														component="td"
														scope="row"
														key={index}
													>
														<input type="radio" name={row.value} value={column.value} />
													</TableCell>
												);
											})
										)}
									</TableRow>
								);
							})
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</ThemeProvider>
	);
}
