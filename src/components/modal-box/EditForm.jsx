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

export default function ModalBox(props) {
	const { surveyforms, setSurveyforms, id} = props;
	const [open, setOpen] = React.useState(false);
	const [newFormName, setNewFormName] = React.useState("");

	console.log(newFormName);

	React.useEffect(() => {}, [newFormName]);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const saveForm = () => {
		const details = {
			id:id,
			formName: newFormName,
		};
		setSurveyforms(surveyforms.map((form)=>{
         if(form.id===id){
            return details
         } else {
            return form
         }
      }));
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
						backgroundColor: "#cbcbcb",
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
									<TabsPanel newFormName={newFormName} setNewFormName={setNewFormName} />
								</Paper>
							</Grid>
							<Grid xs={12} md={6}>
								<Paper sx={{ padding: "15px" }}>
									<Typography variant="h6">Preview</Typography>
									<Divider sx={{ margin: "10px 0" }} />
									<SurveyTable newFormName={newFormName} />
								</Paper>
								<Stack sx={{ marginTop: "15px" }} spacing={2} direction="row">
									<Button onClick={saveForm} color="success" variant="contained">
										Save
									</Button>
									<Button color="grey" variant="contained">
										Cancel
									</Button>
									<Button color="error" variant="contained">
										Remove
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
