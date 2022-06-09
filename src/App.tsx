import { ThemeProvider } from "@emotion/react";
import { Box, createTheme, CssBaseline } from "@mui/material";
import Appbar from "components/Appbar";
import Cards from "components/Cards";
import SideDrawer from "components/SideDrawer";
import { useState } from "react";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0a3b71",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
});

function App() {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Appbar open={open} setOpen={setOpen} />

          <Box
            component="nav"
            sx={{ width: { lg: 240, md: "auto" }, flexShrink: { md: 0 } }}
            aria-label="side drawer"
          >
            <SideDrawer open={open} setOpen={setOpen} />
          </Box>

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { lg: `calc(100% - ${240}px)` },
            }}
          >
            <Cards />
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
