import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

export default {
  title: 'MUI/Data Display',
  parameters: { layout: 'padded' },
};

const rows = [
  { name: 'Riverside', population: 38412, competitors: 12, grade: 'High' },
  { name: 'Midtown', population: 21905, competitors: 18, grade: 'Medium' },
  { name: 'Old Town', population: 27330, competitors: 9, grade: 'High' },
  { name: 'Harbor', population: 41277, competitors: 24, grade: 'Low' },
];

/**
 * Tables are often the centerpiece of a dashboard.
 * MUI gives you the sort arrow too. Do not build your own.
 * Right-align numeric columns so digits line up.
 */
export const BasicTable = () => (
  <TableContainer component={Paper} variant="outlined">
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Region</TableCell>
          <TableCell align="right">
            <TableSortLabel active direction="desc">Population</TableSortLabel>
          </TableCell>
          <TableCell align="right">Competitors</TableCell>
          <TableCell>Opportunity</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name} hover>
            <TableCell>{ row.name }</TableCell>
            <TableCell align="right">{ row.population.toLocaleString() }</TableCell>
            <TableCell align="right">{ row.competitors }</TableCell>
            <TableCell>
              <Chip label={row.grade} size="small" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export const Chips = () => (
  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
    <Chip label="Default" />
    <Chip label="Small" size="small" />
    <Chip label="Primary" color="primary" />
    <Chip label="Outlined" variant="outlined" />
    <Chip label="Deletable" onDelete={() => {}} />
  </Stack>
);

export const Cards = () => (
  <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
    {[['Population', '38,412'], ['Competitors', '12'], ['Rent index', '118']].map(([label, value]) => (
      <Card key={label} variant="outlined" sx={{ minWidth: 160 }}>
        <CardContent>
          <Typography variant="caption" color="text.secondary">{ label }</Typography>
          <Typography variant="h5">{ value }</Typography>
        </CardContent>
      </Card>
    ))}
  </Stack>
);

/**
 * Status messages. Use these when data is missing or uncertain.
 * The states you defined in the UX Flow document end up here.
 */
export const Alerts = () => (
  <Stack spacing={2} sx={{ maxWidth: 520 }}>
    <Alert severity="info">Data collected for 11 of 15 regions.</Alert>
    <Alert severity="warning">Margin of error exceeds half the estimate. Judgment withheld.</Alert>
    <Alert severity="error">Could not load data.</Alert>
  </Stack>
);
