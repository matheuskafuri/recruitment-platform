import { TableContainer, Paper, Table, TableBody, TableRow, TableCell, Typography, Button, linkClasses, Box, Tooltip } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
interface Opportunity {
  id: string;
  title: string
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
            <TableRow key={opportunity.id}>
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
                  Presencial
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body1" color="primary.contrastText" >
                  São Paulo - SP
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Button variant="outlined" color="primary" size="large" href={`/questions/${opportunity.id}`}>
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
