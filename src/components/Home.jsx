import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import SurveyTable from "./SurveyTable";
import CreateForm from "./modal-box/ModalBox"

function Home() {
	return (
		<Grid container sx={{ padding: "30px 0;", bgcolor: "#eee" }}>
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
								Survey Form
							</Typography>
							<CreateForm />
						</Box>
						<Divider sx={{ bgcolor: "black" }} />
						<SurveyTable />
					</Stack>
				</Paper>
			</Container>
		</Grid>
	);
}

export default Home;
