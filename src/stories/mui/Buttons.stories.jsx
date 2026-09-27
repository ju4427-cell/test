import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export default {
  title: 'MUI/Buttons',
  parameters: { layout: 'padded' },
};

/**
 * Button variants. Colors come from theme.palette.primary.
 * Contained is the heaviest. Usually one per screen.
 */
export const Variants = () => (
  <Stack spacing={3}>
    <Stack direction="row" spacing={2} alignItems="center">
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
    </Stack>
    <Typography variant="caption" color="text.secondary">
      Reserve contained for the single most important action on a screen.
    </Typography>
  </Stack>
);

export const Sizes = () => (
  <Stack direction="row" spacing={2} alignItems="center">
    <Button variant="contained" size="small">Small</Button>
    <Button variant="contained" size="medium">Medium</Button>
    <Button variant="contained" size="large">Large</Button>
  </Stack>
);

export const States = () => (
  <Stack direction="row" spacing={2} alignItems="center">
    <Button variant="contained">Default</Button>
    <Button variant="contained" disabled>Disabled</Button>
    <Button variant="outlined" color="error">Destructive</Button>
    <IconButton aria-label="close">✕</IconButton>
  </Stack>
);
