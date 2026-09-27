import { createTheme } from '@mui/material/styles';

/**
 * Project theme
 *
 * Still MUI defaults. That is deliberate.
 * After the Visual Direction document is written, the values here are replaced
 * with this project's own colors, type and spacing.
 * No components are built before that swap.
 */
const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 4,
  },
});

export default theme;
