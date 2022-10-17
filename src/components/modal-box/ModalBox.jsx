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
import SurveyTable from "../SurveyTable"

export default function ResponsiveDialog() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
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
						backgroundColor: "#f0f0f0",
					}}
				>
					<Box
						style={{
							display: "flex",
							justifyContent: "space-between",
							marginBottom: "10px",
						}}
					>
						<Typography variant="h6">Survey Form</Typography>
						<CloseIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
					</Box>
					<Box sx={{ flexGrow: 1 }}>
						<Grid container spacing={2}>
							<Grid xs={12} md={6}>
								<Paper sx={{ padding: "15px" }}>
									<Typography variant="h6">Survey Form</Typography>
								</Paper>
							</Grid>
							<Grid xs={12} md={6}>
								<Paper sx={{ padding: "15px" }}>
									<Typography variant="h6">Preview</Typography>
                           <SurveyTable />
								</Paper>
							</Grid>
						</Grid>
					</Box>
				</DialogContent>
			</Dialog>
		</div>
	);
}
