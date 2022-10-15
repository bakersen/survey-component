import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Radio from "@mui/material/Radio";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../Styles";

function createRow(rowName) {
	const row = {
		name: rowName,
		value: rowName.toLowerCase().split(" ")[0],
	};
	return row;
}

function createColumn(columnName) {
	const obj = {
		name: columnName,
		value: columnName.toLowerCase().split(" ")[0],
	};
	return obj;
}

const rows = [createRow("Training"), createRow("Delivery")];

const columns = [createColumn("Excellent"), createColumn("Good")];

export default function SurveyTable() {
	const [selectedValue, setSelectedValue] = React.useState(0);

   console.log("selected", selectedValue)

	const handleChange = (event) => {
		setSelectedValue(event.target.value);
	};

	return (
		<ThemeProvider theme={theme}>
			<TableContainer>
				<Table
					sx={{ minWidth: 100, background: "white" }}
					aria-label="simple table"
					size="small"
				>
					<TableHead>
						<TableRow variant="head">
							<TableCell padding="none" align="center"></TableCell>
							{columns.length === 0 ? (
								<TableCell padding="none" align="center">
									{" "}
								</TableCell>
							) : (
								columns.map((column) => {
									return (
										<>
											<TableCell padding="none" align="center">
												{column.name}
											</TableCell>
										</>
									);
								})
							)}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row, index) => (
							<TableRow
								key={index}
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
									{row.name}
								</TableCell>
								{columns.length > 1 ? (
									columns.map((column, index) => {
                             console.log(column.value);
										return (
											<TableCell
												key={index}
												padding="none"
												variant="body"
												align="center"
												scope="row"
											>
												<Radio
													checked={selectedValue === column.value}
													onChange={handleChange}
													value={column.value}
													name="radio-buttons"
													inputProps={{ "aria-label": "A" }}
													size="small"
												/>
											</TableCell>
										);
									})
								) : (
									<TableCell padding="none" variant="body" align="center" scope="row">
										<Radio
											checked={selectedValue === 0}
											onChange={handleChange}
											value={0}
											name="radio-buttons"
											inputProps={{ "aria-label": "A" }}
											size="small"
										/>
									</TableCell>
								)}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</ThemeProvider>
	);
}
