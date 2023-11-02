import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976D2" /* Blue color for primary actions in employee view */
    },
    secondary: {
      main:
        "#D21976" /* Red color for secondary actions or employer view (can be used later) */
    }
  }
});

export default theme;
