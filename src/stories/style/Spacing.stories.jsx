import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default {
  title: 'Style/Spacing',
  parameters: { layout: 'padded' },
};

const steps = [0.5, 1, 2, 3, 4, 6, 8, 12];

/**
 * The real pixel value behind theme.spacing(n).
 * The numbers you pass to p, m and gap in sx resolve to these.
 */
export const Scale = () => {
  const theme = useTheme();
  return (
    <Stack spacing={2}>
      {steps.map((n) => (
        <Stack key={n} direction="row" spacing={2} alignItems="center">
          <Typography variant="body2" sx={{ width: 120 }}>spacing({ n })</Typography>
          <Box sx={{ width: theme.spacing(n), height: 24, bgcolor: 'primary.main' }} />
          <Typography variant="caption" color="text.secondary">{ theme.spacing(n) }</Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export const Shape = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" spacing={3} alignItems="center">
      <Box sx={{ width: 96, height: 96, bgcolor: 'grey.200', borderRadius: 1 }} />
      <Typography variant="body2">shape.borderRadius: { theme.shape.borderRadius }px</Typography>
    </Stack>
  );
};
