import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * App
 *
 * During assembly the router and the app shell are mounted here, once.
 * Until then, being empty is correct.
 */
function App() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        design-dashboard-starter
      </Typography>
      <Typography variant="body1" color="text.secondary">
        No screens yet. Assembly begins after the planning documents and the token swap.
      </Typography>
    </Box>
  );
}

export default App;
