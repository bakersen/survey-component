import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function BasicTabs(props) {
	const {
		newFormName,
		setNewFormName,
		rowLabel,
		rowValue,
		columnLabel,
		columnValue,
		setRowLabel,
		setRowValue,
		setColumnLabel,
		setColumnValue,
		addRow,
		addColumn,
		rows,
		columns,
		deleteRow,
		deleteColumn,
	} = props;
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
					<Tab label="Display" {...a11yProps(0)} />
					<Tab label="Data" {...a11yProps(1)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<TextField
					label="Set Form Name"
					size="small"
					defaultValue={newFormName}
					onChange={(event) => setNewFormName(event.target.value)}
				/>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Grid container spacing={3}>
					<Grid xs={12}>
						<Typography sx={{ fontWeight: 700 }} variant="p">
							Set Questions
						</Typography>
						<Stack sx={{ marginTop: "15px" }} spacing={1} direction="row">
							<TextField
								label="Enter Label"
								size="small"
								defaultValue={rowLabel}
								onChange={(event) => setRowLabel(event.target.value)}
							/>
							<TextField
								label="Enter value"
								size="small"
								defaultValue={rowValue}
								onChange={(event) => setRowValue(event.target.value)}
							/>
							<AddCircleIcon
								sx={{
									fontSize: "20px",
									cursor: "pointer",
									"&:hover": { color: "#1976d2" },
								}}
								onClick={addRow}
							/>
						</Stack>
						{rows.map((row) => {
							return (
								<Stack sx={{ marginTop: "15px" }} spacing={1} direction="row">
									<TextField
										label="Enter Label"
										size="small"
										value={row.label}
										onChange={(event) => setRowLabel(event.target.value)}
									/>
									<TextField
										label="Enter value"
										size="small"
										value={row.value}
										onChange={(event) => setRowValue(event.target.value)}
									/>
									<RemoveCircleIcon
										sx={{
											fontSize: "20px",
											cursor: "pointer",
											color: "red",
											"&:hover": { color: "#1976d2" },
										}}
										onClick={() => deleteRow(row.id)}
									/>
								</Stack>
							);
						})}
					</Grid>
					<Grid xs={12}>
						<Typography sx={{ fontWeight: 700 }} variant="p">
							Set Variables
						</Typography>
						<Stack sx={{ marginTop: "15px" }} spacing={1} direction="row">
							<TextField
								label="Enter Label"
								size="small"
								defaultValue={columnLabel}
								onChange={(event) => setColumnLabel(event.target.value)}
							/>
							<TextField
								label="Enter value"
								size="small"
								defaultValue={columnValue}
								onChange={(event) => setColumnValue(event.target.value)}
							/>
							<AddCircleIcon
								sx={{
									fontSize: "20px",
									cursor: "pointer",
									"&:hover": { color: "#1976d2" },
								}}
								onClick={addColumn}
							/>
						</Stack>
						{columns.map((column) => {
							return (
								<Stack sx={{ marginTop: "15px" }} spacing={1} direction="row">
									<TextField
										label="Enter Label"
										size="small"
										value={column.label}
										onChange={(event) => setColumnLabel(event.target.value)}
									/>
									<TextField
										label="Enter value"
										size="small"
										value={column.value}
										onChange={(event) => setColumnValue(event.target.value)}
									/>
									<RemoveCircleIcon
										sx={{
											fontSize: "20px",
											cursor: "pointer",
											color: "red",
											"&:hover": { color: "#1976d2" },
										}}
										onClick={() => deleteColumn(column.id)}
									/>
								</Stack>
							);
						})}
					</Grid>
				</Grid>
			</TabPanel>
		</Box>
	);
}
