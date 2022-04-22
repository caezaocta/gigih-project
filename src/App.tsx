import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import CreatePlaylist from "./pages/createplaylist";
import "./App.css";
import store from "./redux/store";
import RoutesPage from "../src/pages/routes";
import { BrowserRouter as Router } from "react-router-dom";

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
