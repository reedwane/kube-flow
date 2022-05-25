import { ThemeProvider } from "@emotion/react";
import { Box, createTheme } from "@mui/material";
import Appbar from "components/Appbar";
import Cards from "components/Cards";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0a3b71",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Appbar />
          <Cards />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
