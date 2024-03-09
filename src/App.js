import './App.css';
import Navbar from "./Components/Navbar";
import CardGrid from './Components/Views/CardGrid';
import {createTheme, ThemeProvider} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
  return (
      <ThemeProvider theme={darkTheme}>
      <div className="App">
          <Navbar/>
          <CardGrid/>
      </div>
      </ThemeProvider>
  );
}

export default App;
