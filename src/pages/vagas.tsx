import { Copyright } from "@mui/icons-material";
import { Container, Box, Grid, Typography, Button } from "@mui/material";
import { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import LayoutProvider from "../components/Layout";
import { OpportunitiesTable } from "../components/OpportunitiesTable";
import fireBaseApi from "../services/fireBaseApi";

const Vagas: NextPage = () => {
  const [opportunities, setOpportunities] = useState([]);
  const loadOpportunities = useCallback(async () => {
    try {
      const accounts = await fireBaseApi.post("/load-opportunities");
      setOpportunities(accounts.data);
    } catch (err) {
      console.log(err);
    }
  }, [setOpportunities]);

  useEffect(() => {
    loadOpportunities();
  }, [loadOpportunities]);

  return (
    <LayoutProvider>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid container sx={{ backgroundColor: 'primary.dark' }}>
            <Grid item xs={12} md={12} sx={{ padding: '1rem' }}>
              <Typography variant="h4" color="primary.contrastText" textAlign="center">
                Faça parte dessa evolução com a gente!
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} sx={{ padding: '1rem' }}>
              <Typography variant="h6" color="primary.contrastText">
                Oportunidades em Alta
              </Typography>
              <OpportunitiesTable
                opportunities={opportunities}
              />
            </Grid>
          </Grid>
          <Box
            sx={{ padding: '1rem', marginTop: '1rem' }}
          >
          </Box>
          <Copyright />
        </Box>
      </Container>
    </LayoutProvider >
  )
}

export default Vagas
