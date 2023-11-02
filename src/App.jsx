import "./styles.css";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
// import Dashboard from "./pages/Dashboard";

// ... other imports ...
import theme from "./theme";
import AppBar from "./components/AppBar/AppBar";
import Drawer from "./components/Drawer/Drawer";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AdminDashboard from "./admin/AdminDashboard";

function App() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // const user = {
  //   firstName: "Ayoub",
  //   lastName: "Mabkhout",
  //   position: "Software Engineer",
  //   ssn: "BK703836",
  //   dob: new Date("2001-07-14").toLocaleDateString(),
  //   pictureUrl: "/images/ayoub.jpg"
  // };

  // const user = null;

  const user = {
    email: "admin@example.com",
    password: "SuperSecretPassword123",
    first_name: "Admin",
    last_name: "User",
    position: "admin",
  };

  const context = { user: user };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        {context.user ? (
          <Box sx={{ display: "flex" }}>
            <AppBar open={open} toggleDrawer={toggleDrawer} />
            <Drawer open={open} toggleDrawer={toggleDrawer} />
            <Routes>
              <Route path="/" element={<Dashboard context={context} />} />
              <Route path="/admin" element={<AdminDashboard />} />
              {/* Other routes */}
            </Routes>
          </Box>
        ) : (
          <Routes>
            <Route path="/signin" element={<SignIn context={context} />} />
            <Route path="/signup" element={<SignUp context={context} />} />
            {/* Other routes */}
          </Routes>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
