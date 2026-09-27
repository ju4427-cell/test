import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';

export default {
  title: 'MUI/Inputs',
  parameters: { layout: 'padded' },
};

/**
 * Input components. A search box is a TextField too.
 * Do not build your own. Change the label and placeholder instead.
 */
export const TextFields = () => (
  <Stack spacing={3} sx={{ maxWidth: 360 }}>
    <TextField label="Region name" placeholder="e.g. Riverside" />
    <TextField label="Search" placeholder="Search regions" size="small" />
    <TextField label="Note" multiline rows={3} />
    <TextField label="Required" required error helperText="This field is required" />
    <TextField label="Disabled" disabled value="Read only" />
  </Stack>
);

export const Select = () => (
  <Stack spacing={3} sx={{ maxWidth: 360 }}>
    <TextField select label="Region" defaultValue="all">
      <MenuItem value="all">All</MenuItem>
      <MenuItem value="north">North</MenuItem>
      <MenuItem value="south">South</MenuItem>
    </TextField>
    <Typography variant="caption" color="text.secondary">
      A select is a TextField with the select prop. Nothing new to build.
    </Typography>
  </Stack>
);

export const Toggles = () => (
  <Stack spacing={1}>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Our stores only" />
    <FormControlLabel control={<Checkbox />} label="Include competitors" />
    <FormControlLabel control={<Switch defaultChecked />} label="Show margin of error" />
  </Stack>
);
