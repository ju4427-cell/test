import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default {
  title: 'MUI/Navigation',
  parameters: { layout: 'padded' },
};

/**
 * Tabs. Question-shaped labels read better than feature names,
 * especially in a tool people open once every few weeks.
 */
export const BasicTabs = () => {
  const [value, setValue] = useState(0);
  return (
    <Stack spacing={2}>
      <Tabs value={value} onChange={(e, v) => setValue(v)}>
        <Tab label="What To Do" />
        <Tab label="Why This Region" />
        <Tab label="Who Lives Here" />
      </Tabs>
      <Typography variant="body2" color="text.secondary">
        Selected tab: { value }
      </Typography>
    </Stack>
  );
};

export const BreadcrumbTrail = () => (
  <Breadcrumbs>
    <Link underline="hover" color="inherit" href="#">Regions</Link>
    <Link underline="hover" color="inherit" href="#">Riverside</Link>
    <Typography color="text.primary">Ad Brief</Typography>
  </Breadcrumbs>
);
