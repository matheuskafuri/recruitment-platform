import { TableContainer, Paper, Table, TableBody, TableRow, TableCell, Typography, Button, linkClasses, Box, Tooltip } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
interface Opportunity {
  title: string
  mode: string
  place: string
  link: string
  description: string
}

interface OpportunitiesTableProps {
  opportunities: Opportunity[]
}
const OpportunitiesTable = ({ opportunities }: OpportunitiesTableProps) => {
  return (

    <TableContainer
      sx={{
        borderRadius: 2,
        // boxShadow: '0 0 0 2px rgba(255,255,255,255.1)',
      }}
    >
      <Table aria-label="simple table">
        <TableBody>
          {opportunities.map((opportunity: Opportunity) => (
            <TableRow key={opportunity.title}>
              <TableCell component="th" scope="row">
                <Tooltip title={opportunity.description}>
                  <Typography variant="body1" color="primary.contrastText" >
                    {opportunity.title}
                    <InfoIcon />
                  </Typography>
                </Tooltip>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body1" color="primary.contrastText" >
                  {opportunity.mode}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body1" color="primary.contrastText" >
                  {opportunity.place}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Button variant="outlined" color="primary" size="large" href={opportunity.link}>
                  Candidatar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </TableContainer>

  );
}

export { OpportunitiesTable };
