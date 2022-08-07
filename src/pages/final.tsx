import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material"
import Image from "next/image";
import founders from "../assets/images/founders.jpeg";
import { Link } from "../components/Link/Link";
import mainLogo from "../assets/images/main-page-logo.png";

const Final = () => {
  const isMobile = useMediaQuery("(max-width: 700px)");

  return (
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
            <Grid item xs={12} md={12}>
              <Typography variant="h3" marginBottom={2} fontWeight='bold'>
                Agradecemos
                sua inscrição!
              </Typography>
              <Typography variant="h6">
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
            Aproveite também para
            acompanhar nossas Notícias!
          </Typography>
          <Typography variant="body1" textAlign="center" >
            Enquanto aguarda nosso retorno, você pode aproveitar pra se preparar e conhecer mais sobre o G4 Educação.
          </Typography>
          <Link
            href='https://g4educacao.com/'
            sx={{
              color: 'primary.dark',
            }}
          >
            <Typography variant="body1" textAlign="center" fontWeight='bold'>
              Visite Nosso Site
            </Typography>
          </Link>

        </Grid>
      </Box>
      <Grid xs={12} md={12} marginTop={4}
        sx={{
          backgroundColor: 'primary.dark'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 4
          }}
        >
          <Image
            src={founders}
            alt="Founders"
            style={{ borderRadius: 8 }}
          />
          <Typography variant="h4" component="h6" color="primary.contrastText" textAlign="center" marginTop={4}>
            "A riqueza é o produto da capacidade humana de pensar"​ <br />
            - <cite>AYN RAND</cite>
          </Typography>
        </Box>
      </Grid>
    </Container>
  )
}

export default Final
