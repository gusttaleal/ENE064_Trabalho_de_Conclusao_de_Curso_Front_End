import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          fontWeight: 600,
          height: '3rem',
          width: '18rem',
        },
      },
    },
  },
  palette: {
    neutral: {
      main: '#d32f2f',
      contrastText: '#fff',
    },
  },
});

export function AppButton({ label }) {
  return (
    <ThemeProvider theme={theme}>
      <Button color="neutral" variant="contained" size="large" fullWidth={true}>
        {label}
      </Button>
    </ThemeProvider>
  );
}

AppButton.propTypes = {
  label: PropTypes.string.isRequired,
};
