import type { NextPage } from 'next'
import { Box, Button, Container, Divider, Grid, Link, Stack, Typography } from '@mui/material'
import { Copyright } from '../components/Copyright/Copyright'
import { useRouter } from 'next/router'
import LayoutProvider from '../components/Layout'
import { Hero } from '../components/LandingPageHero'
import founders from "../assets/images/founders.jpeg";
import Image from "next/image";
import IndicatorCard from '../components/IndicatorCard'
import { OpportunitiesTable } from '../components/OpportunitiesTable'


const Home: NextPage = () => {
  const router = useRouter()
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
          <Hero />
          <Grid container sx={{ backgroundColor: 'primary.dark' }}>
            <Grid item xs={12} md={4} sx={{ padding: '1rem' }}>
              <Typography variant="h4" color="primary.contrastText">
                +150
              </Typography>
              <Typography variant="body1" color="primary.contrastText">
                imersões e mentorias
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ padding: '1rem' }}>
              <Typography variant="h4" color="primary.contrastText">
                +20.000
              </Typography>
              <Typography variant="body1" color="primary.contrastText">
                alunos formados
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ padding: '1rem' }}>
              <Typography variant="h4" color="primary.contrastText">
                +150.000
              </Typography>
              <Typography variant="body1" color="primary.contrastText">
                empregos gerados
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} sx={{ padding: '1rem' }}>
              <Typography variant="body1" color="primary.contrastText">
                Venha para o Próximo Nível!
              </Typography>
              <Typography variant="h4" color="primary.contrastText">
                Conheça o que os Maiores do Mundo estão fazendo.
              </Typography>
            </Grid>
            <Divider
              orientation="horizontal"
              color="#475059"
              sx={{
                width: '100%',
                margin: '1rem 0',
              }}
            />
            <Grid item xs={12} md={8} sx={{ padding: '4rem' }}>
              <Image
                src={founders}
                alt="founders"
                style={{
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}
              sx={{
                padding: '1rem',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column'
              }}>
              <Typography variant="body1" color="primary.contrastText" sx={{ marginBottom: '1rem' }}>
                Somos uma Escola de Negócios que está transformando a realidade socioeconômica do Brasil através da Educação Empreendedora.
              </Typography>
              <Typography variant="body1" color="primary.contrastText">
                É fato: nós já estamos mudando o Brasil e queremos fazer muito mais! Se você faz o que precisa ser feito e se identifica com nossa excelência, queremos VOCÊ com a gente nessa jornada, topa?
              </Typography>
              <Button variant="contained" color="primary" size="large"
                sx={{
                  marginTop: '1rem',
                  borderRadius: '1rem',
                }}
                href="/vagas"
              >
                Quero mudar o Brasil
              </Button>
            </Grid>
          </Grid>
          <Box
            sx={{
              my: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="body1">
              Conheça
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              NOSSOS VALORES
            </Typography>
          </Box>
          <Grid container spacing={8} sx={{ marginBottom: 8 }}>
            <Grid item xs={12} md={4}>
              <IndicatorCard title="01" info='Não temos braço curto. Fazemos o que tem que ser feito.' />
            </Grid>
            <Grid item xs={12} md={4}>
              <IndicatorCard title="02" info='Jogamos o jogo abertamente.' />
            </Grid>
            <Grid item xs={12} md={4}>
              <IndicatorCard title="03" info='Aqui, focamos no resultado.' />
            </Grid>
            <Grid item xs={12} md={4}>
              <IndicatorCard title="04" info='Temos os mais altos padrões.' />
            </Grid>
            <Grid item xs={12} md={4}>
              <IndicatorCard title="05" info='Somos uma tropa de elite.' />
            </Grid>
            <Grid item xs={12} md={4}>
              <IndicatorCard title="06" info='Temos tesão pela jornada.' />
            </Grid>
          </Grid>
          <Grid container sx={{ backgroundColor: 'primary.dark' }}>
            <Grid item xs={12} md={3} sx={{ padding: '1rem' }}>
              <Typography variant="h4" color="primary.contrastText">
                Faça parte dessa evolução com a gente!
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} sx={{ padding: '1rem' }}>
              <Typography variant="h6" color="primary.contrastText">
                Comunicação e Marca
              </Typography>
              <OpportunitiesTable
                opportunities={
                  [
                    {
                      title: 'Coordenadora de Social Media',
                      description: 'Ajudar a divulgar o nosso projeto e ajudar a divulgar o nosso projeto',
                      link: '/',
                      mode: 'Presencial',
                      place: 'São Paulo - SP',
                    },
                    {
                      title: 'Analista CRM Sr.',
                      description: 'Ajudar a divulgar o nosso projeto e ajudar a divulgar o nosso projeto',
                      link: '/',
                      mode: 'Presencial',
                      place: 'São Paulo - SP',
                    }
                  ]
                }
              />
            </Grid>
            <Divider
              orientation="horizontal"
              color="#475059"
              sx={{
                width: '100%',
                margin: '1rem 0',
              }}
            />
            <Grid item xs={12} md={12} sx={{ padding: '1rem' }}>
              <Typography variant="h6" color="primary.contrastText">
                Tecnologia
              </Typography>
              <OpportunitiesTable
                opportunities={
                  [
                    {
                      title: 'Analytics',
                      description: 'Ajudar a divulgar o nosso projeto e ajudar a divulgar o nosso projeto',
                      link: '/',
                      mode: 'Presencial',
                      place: 'São Paulo - SP',
                    },
                    {
                      title: 'Desenvolvedor Full Stack',
                      description: 'Ajudar a divulgar o nosso projeto e ajudar a divulgar o nosso projeto',
                      link: '/',
                      mode: 'Presencial',
                      place: 'São Paulo - SP',
                    }
                  ]
                }
              />
            </Grid>
            <Divider
              orientation="horizontal"
              color="#475059"
              sx={{
                width: '100%',
                margin: '1rem 0',
              }}
            />
            <Grid item xs={12} md={12} sx={{ padding: '1rem' }}>
              <Typography variant="h6" color="primary.contrastText">
                Marketing
              </Typography>
              <OpportunitiesTable
                opportunities={
                  [
                    {
                      title: 'Analista Performance',
                      description: 'Ajudar a divulgar o nosso projeto e ajudar a divulgar o nosso projeto',
                      link: '/',
                      mode: 'Presencial',
                      place: 'São Paulo - SP',
                    },
                    {
                      title: 'Analista Marketing',
                      description: 'Ajudar a divulgar o nosso projeto e ajudar a divulgar o nosso projeto',
                      link: '/',
                      mode: 'Presencial',
                      place: 'São Paulo - SP',
                    }
                  ]
                }
              />
            </Grid>
            <Grid item xs={12} md={12} sx={{ padding: '1rem' }}>
              <Button variant="contained" color="primary" size="large" href="/">
                Conheça todas as nossas vagas
              </Button>
            </Grid>
          </Grid>
          <Box
            sx={{ padding: '1rem', marginTop: '1rem' }}
          >
            <Link color="secondary" variant="body1" href="https://g4educacao.com/">
              Go to G4 Educação
            </Link>
          </Box>
          <Copyright />
        </Box>
      </Container>
    </LayoutProvider >

  )
}

export default Home
