import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	components: {
		MuiTableContainer: {
			styleOverrides: {
				root: {
					// border: "1px solid #eee",
				},
			},
		},
		MuiTableCell: {
			styleOverrides: {
				root: {
					borderBottom: 0,
					fontSize: "14px",
				},
				body: {
					border: "1px solid #d9d9d9 !important",
				},
				head: {
					border: "1px solid #d9d9d9",
					fontWeight: 700
				},
			},
		},
	},
});