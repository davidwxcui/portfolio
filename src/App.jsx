import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/Theme';
import Home from './pages/Home';
import Dock from './components/Dock';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
      <Dock />
    </ThemeProvider>
  );
}

export default App;
