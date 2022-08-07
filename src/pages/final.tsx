import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material"
import LayoutProvider from "../components/Layout"

const Final = () => {
  const isMobile = useMediaQuery("(max-width: 700px)");

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
          <Box
            sx={{
              width: "100%",
              display: "flex",
              minHeight: "400px",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: 'primary.dark',
            }}
          >
            <Grid
              container
              spacing={6}
              sx={{
                display: "flex",
                alignItems: "center",
                maxWidth: "1300px",
                padding: isMobile ? "2px" : "1rem",
              }}
            >
              <Grid item xs={12} md={4}>
                <Typography variant="h3" marginBottom={2} fontWeight='bold' color="primary.contrastText">
                  Agradecemos
                  sua inscrição!
                </Typography>
                <Typography variant="h6" color="primary.contrastText">
                  Em breve entraremos em contato para te atualizar nosso o processo.
                  <br />
                  <br />
                  Até breve.
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Grid xs={12} md={12} marginTop={4}>
            <Typography variant="h5" fontWeight="bold" textAlign="center" >
              Aproveite pra<br />
              Acompanhar as Notícias!
            </Typography>
            <Typography variant="body1" textAlign="center" >
              Enquanto aguarda nosso retorno, você pode aproveitar pra se preparar e conhecer mais sobre o G4 Educação.
            </Typography>
          </Grid>
        </Box>
      </Container>
    </LayoutProvider >

  )
}

export default Final
