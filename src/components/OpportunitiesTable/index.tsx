import { TableContainer, Paper, Table, TableBody, TableRow, TableCell, Typography, Button, linkClasses, Box } from "@mui/material";

const OpportunitiesTable = ({ opportunity, mode, place, link, description }) => {
  return (

    <TableContainer
      sx={{
        borderRadius: 2,
        // boxShadow: '0 0 0 2px rgba(255,255,255,255.1)',
      }}
    >
      <Table aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              <Typography variant="body1" color="primary.contrastText" >
                {opportunity}
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="body1" color="primary.contrastText" >
                {mode}
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="body1" color="primary.contrastText" >
                {place}
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Button variant="outlined" color="primary" size="large" href={link}>
                Candidatar
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Box sx={{ my: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="body1" color="primary.contrastText" >
          {description}
        </Typography>
      </Box>
    </TableContainer>

  );
}

export { OpportunitiesTable };
