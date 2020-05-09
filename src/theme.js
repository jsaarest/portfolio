import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

export let theme = createMuiTheme({

  palette: {
    primary: blue,
    secondary: {
      main: '#FF7B78',
    },
  },

  overrides: {
    MuiExpansionPanel: {
      root: {
        '&:before': {
          display: 'none'
        },
      },
    },
  },

  typography: {
    fontFamily: [
      'Jost',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },


  props: {
    MuiButtonBase: {
        style: {
          borderRadius: '6px',
          textTransform: 'capitalize',
          fontSize: '16px',
          //padding: '5px 25px'
        },
    },
  },
});

theme = responsiveFontSizes(theme);
