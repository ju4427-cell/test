import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default {
  title: 'Style/Colors',
  parameters: { layout: 'padded' },
};

const paletteKeys = ['primary', 'secondary', 'error', 'warning', 'info', 'success'];
const tones = ['light', 'main', 'dark'];

function Swatch({ label, value, textColor }) {
  return (
    <Box sx={{ width: 140 }}>
      <Box sx={{ height: 72, bgcolor: value, color: textColor, border: 1, borderColor: 'divider', display: 'flex', alignItems: 'flex-end', p: 1 }}>
        <Typography variant="caption">{ value }</Typography>
      </Box>
      <Typography variant="caption" color="text.secondary">{ label }</Typography>
    </Box>
  );
}

/**
 * Reads theme.palette directly.
 * Change the values in src/styles/theme.js and this screen changes with them.
 */
export const Palette = () => {
  const theme = useTheme();
  return (
    <Stack spacing={4}>
      {paletteKeys.map((key) => (
        <Box key={key}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>palette.{ key }</Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            {tones.map((tone) => (
              <Swatch
                key={tone}
                label={`${key}.${tone}`}
                value={theme.palette[key][tone]}
                textColor={theme.palette[key].contrastText}
              />
            ))}
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

export const Greys = () => {
  const theme = useTheme();
  const steps = Object.keys(theme.palette.grey).filter((k) => /^\d+$/.test(k));
  return (
    <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
      {steps.map((step) => (
        <Swatch
          key={step}
          label={`grey.${step}`}
          value={theme.palette.grey[step]}
          textColor={Number(step) >= 500 ? '#fff' : theme.palette.text.primary}
        />
      ))}
    </Stack>
  );
};

export const TextAndBackground = () => {
  const theme = useTheme();
  const entries = [
    ['text.primary', theme.palette.text.primary, theme.palette.background.paper],
    ['text.secondary', theme.palette.text.secondary, theme.palette.background.paper],
    ['text.disabled', theme.palette.text.disabled, theme.palette.background.paper],
    ['background.default', theme.palette.background.default, theme.palette.text.primary],
    ['background.paper', theme.palette.background.paper, theme.palette.text.primary],
    ['divider', theme.palette.divider, theme.palette.text.primary],
  ];
  return (
    <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
      {entries.map(([label, value, textColor]) => (
        <Swatch key={label} label={label} value={value} textColor={textColor} />
      ))}
    </Stack>
  );
};
