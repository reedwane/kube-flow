import { ThemeProvider } from "@emotion/react";
import { Box, createTheme } from "@mui/material";
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
});

function App() {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Appbar open={open} setOpen={setOpen} />

          <Box
            component="nav"
            sx={{ width: { lg: 240 }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
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
