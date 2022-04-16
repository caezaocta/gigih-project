import { createTheme, ThemeProvider } from '@mui/material';
import CreatePlaylist from '../src/pages/create-playlist';
import './App.css';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Inter', 'sans-serif']
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CreatePlaylist />
      </div>
    </ThemeProvider>
  );
}

export default App;
