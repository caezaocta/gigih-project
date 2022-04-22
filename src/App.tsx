import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesPage from "../src/pages/routes";
import "./App.css";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Inter",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <RoutesPage></RoutesPage>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
