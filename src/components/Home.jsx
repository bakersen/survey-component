import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import SurveyTable from "./SurveyTable";
import CreateForm from "./modal-box/CreateForm";
import EditForm from "./modal-box/EditForm";


function Home() {
	const [surveyforms, setSurveyforms] = React.useState([]);

	console.log(surveyforms)

	React.useEffect(() => {}, [surveyforms]);
	return (
		<Grid container sx={{ padding: "30px 0;", bgcolor: "#eee", height:"100vh" }}>
			<Container fixed>
				<Paper
					sx={{
						bgcolor: "#fff",
						padding: "30px",
					}}
					elevation={1}
				>
					<Stack spacing={2}>
						<Box style={{ display: "flex", justifyContent: "space-between" }}>
							<Typography variant="h5" sx={{ fontWeight: "700", color: "#1976d2" }}>
								Build Your Survey Form
							</Typography>
							<CreateForm surveyforms={surveyforms} setSurveyforms={setSurveyforms} />
						</Box>
						<Divider sx={{ bgcolor: "black" }} />
						{surveyforms.map((form) => {
							return (
								<Box key={form.id}>
									<span style={{ display: "flex", justifyContent: "space-between" }}>
										{form.formName}{" "}
										<EditForm
											form={form}
											surveyforms={surveyforms}
											setSurveyforms={setSurveyforms}
										/>
									</span>
									<SurveyTable rows={form.rows} columns={form.columns} />
								</Box>
							);
						})}
					</Stack>
				</Paper>
			</Container>
		</Grid>
	);
}

export default Home;
