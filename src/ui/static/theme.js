import { createMuiTheme } from '@material-ui/core/styles';

const THEME = createMuiTheme({
  typography: {
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    fontSize: 12,
    fontWeightLight: 500,
    fontWeightRegular: 500,
    fontWeightMedium: 700,
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#333',
      main: '#222',
      dark: '#111',
      contrastText: '#f7f7f7',
    },
    secondary: {
      light: '#f7f7f7',
      main: '#a0c7cf',
      dark: '#d0d0d0',
      contrastText: '#111',
    },
    background: {
      default: '#e6e6e6',
      paper: '#6a99ad',
    },
  },
  spacing: 8,
});

export default THEME;
