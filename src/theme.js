import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

export const theme = createMuiTheme({
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
    fontFamily: 'Jost, Sans-serif',
  },

  props: {
    MuiButtonBase: {
        style: {
          borderRadius: '6px',
          textTransform: 'capitalize',
          fontSize: '16px',
          padding: '5px 25px'
        },
    },
  },
});