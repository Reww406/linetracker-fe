
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7986CB', // Soft blue
      light: '#9FA8DA',
      dark: '#5C6BC0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#B39DDB', // Soft purple
      light: '#D1C4E9',
      dark: '#9575CD',
      contrastText: '#000000',
    },
    background: {
      default: '#F5F7FF',
      paper: '#ffffff',
    },
    text: {
      primary: '#2C2C2C',
      secondary: '#595959',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;

