import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default {
  title: 'Style/Typography',
  parameters: { layout: 'padded' },
};

const variants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'button', 'caption', 'overline'];

/**
 * Every variant in theme.typography.
 * Family, size, weight and leading are changed only in theme.js.
 */
export const Scale = () => {
  const theme = useTheme();
  return (
    <Stack spacing={3}>
      <Typography variant="caption" color="text.secondary">
        fontFamily: { theme.typography.fontFamily }
      </Typography>
      {variants.map((v) => {
        const t = theme.typography[v];
        return (
          <Box key={v}>
            <Typography variant={v} component="p">
              { v } · Dashboard metric heading 0123456789
            </Typography>
            <Typography variant="caption" color="text.secondary">
              { t.fontSize } / weight { t.fontWeight } / line-height { t.lineHeight }
            </Typography>
          </Box>
        );
      })}
    </Stack>
  );
};
