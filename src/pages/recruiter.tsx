import { Box, Button, Container, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { AutocompleteInput } from "../components/Autocomplete";
import fireBaseApi from "../services/fireBaseApi";
import Image from "next/image";
import tallis from "../assets/images/tallis.jpeg";
import IndicatorCard from "../components/IndicatorCard";
import { useRouter } from "next/router";
import CreateOpportunityDialog from "../components/CreateOpportunityDialog";

const Recruiter = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  }
  const handleCloseDialog = () => {
    setOpenDialog(false);
  }
  const router = useRouter()
  const [opportunities, setOpportunities] = useState([]);
  const [opportunity, setOpportunity] = useState({});
  const loadOpportunities = useCallback(async () => {
    try {
      const opportunities = await fireBaseApi.post("/load-opportunities");
      setOpportunities(opportunities.data);
    } catch (err) {
      console.log(err);
    }
  }, [setOpportunities]);
  useEffect(() => {
    loadOpportunities();
  }, [loadOpportunities]);

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        <Grid container >
          <Grid item xs={12} md={4} sx={{ backgroundColor: 'primary.dark', borderRadius: '2rem', padding: '2rem' }}>
            <Typography variant="h4" fontWeight='bold' color="primary.contrastText" marginBottom={4} marginTop={4}>
              Ranking Candidatos🔥
            </Typography>
            <Typography variant="body1" color="primary.contrastText" marginBottom={3}>
              Ranking dos candidatos com melhor desempenho no formulário.
            </Typography>
            <Divider color="primary" />
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: '0.5rem', marginTop: '1rem' }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h6" color="primary.contrastText" marginBottom={1} marginRight={1}>
                  1º
                </Typography>
                <Image
                  src={tallis}
                  alt="Tallis"
                  width={80}
                  height={80}
                  style={{ borderRadius: '50%' }}
                />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Typography variant="h6" color="primary.contrastText" fontWeight='bold' marginBottom={1}>
                  Tallis
                </Typography>
                <Typography variant="body2" color="primary.contrastText" marginBottom={1}>
                  Pontuação: 9
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: '0.5rem', marginTop: '1rem' }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h6" color="primary.contrastText" marginBottom={1} marginRight={1}>
                  2º
                </Typography>
                <Image
                  src={tallis}
                  alt="Tallis"
                  width={80}
                  height={80}
                  style={{ borderRadius: '50%' }}
                />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Typography variant="h6" color="primary.contrastText" fontWeight='bold' marginBottom={1}>
                  Tallis
                </Typography>
                <Typography variant="body2" color="primary.contrastText" marginBottom={1}>
                  Pontuação: 7
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: '0.5rem', marginTop: '1rem' }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h6" color="primary.contrastText" marginBottom={1} marginRight={1}>
                  3º
                </Typography>
                <Image
                  src={tallis}
                  alt="Tallis"
                  width={80}
                  height={80}
                  style={{ borderRadius: '50%' }}
                />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Typography variant="h6" color="primary.contrastText" fontWeight='bold' marginBottom={1}>
                  Tallis
                </Typography>
                <Typography variant="body2" color="primary.contrastText" marginBottom={1}>
                  Pontuação: 5
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8} sx={{ borderRadius: '2rem', padding: '2rem' }}>
            <Typography variant="h5" fontWeight='bold' marginTop={8} marginBottom={4}>
              Seja Bem Vindo (a), Recruter!
            </Typography>
            < AutocompleteInput
              options={opportunities}
              setValue={setOpportunity}
            />
            <Grid container spacing={2} sx={{ borderRadius: '2rem', padding: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
              <Grid item xs={12} md={12}>
                <IndicatorCard title="102" info='Inscritos' height="6rem" />
              </Grid>
              <Grid item xs={12} md={12}>
                <IndicatorCard title="16" info='Indicações' height="6rem" />
              </Grid>
              <Grid item xs={12} md={12}>
                <IndicatorCard title="3" info='Contratações' height="6rem" />
              </Grid>
            </Grid>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell align="right">Pontuação</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {opportunities.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.title}
                      </TableCell>
                      <TableCell align="right">{row.title}</TableCell>
                    </TableRow>
                  ))} */}
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', padding: '0.5rem', marginTop: '1rem' }}>
              <Button variant="contained" color="primary" onClick={handleOpenDialog}>
                <Typography variant="h5" fontWeight='bold' color="primary.contrastText" >
                  Criar nova Vaga
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <CreateOpportunityDialog open={openDialog} onClose={handleCloseDialog} />
    </Container >
  );
}

export default Recruiter;