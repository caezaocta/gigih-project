import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import CreatePlaylist from "../src/pages/create-playlist/";
import "./App.css";
import store from "./redux/store";

// declare module "@mui/material/styles" {
//   interface Theme {
//     typography: {
//       fontFamily: string;
//     };
//   }

//   interface ThemeOptions {
//     typography?: {
//       fontFamily: string;
//     };
//   }
// }

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Inter",
    },
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <CreatePlaylist />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
