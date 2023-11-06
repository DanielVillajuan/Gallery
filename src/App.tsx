import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import AppRoutes from './routes';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif'
  },
});


function App(): JSX.Element {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </>
  )
}

export default App
