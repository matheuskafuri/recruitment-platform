import { Box, Button, Container, Divider, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { AutocompleteInput } from "../components/Autocomplete";
import fireBaseApi from "../services/fireBaseApi";
import Image from "next/image";
import nath from "../assets/images/nath.png";
import IndicatorCard from "../components/IndicatorCard";
import CreateOpportunityDialog from "../components/CreateOpportunityDialog";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CreateQuestionDialog from "../components/CreateQuestionDialog";


const Create = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  }
  const handleCloseDialog = () => {
    setOpenDialog(false);
  }
  const isMobile = useMediaQuery('(max-width:600px)');
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
          <Grid item xs={12} md={4} sx={{ backgroundColor: 'secondary.dark', borderRadius: '2rem', padding: '2rem' }}>
            <Typography variant="h4" fontWeight='bold' color="primary.contrastText" marginBottom={4} marginTop={4}>
              Seu hunting agora é simples e assertivo!
            </Typography>
            <Typography variant="body1" color="primary.contrastText" marginBottom={3}>
              Montamos essa estrutura com algumas perguntas rápida pra conhecer melhor o candidato.
              <br />
              <br />
              É uma 1 pergunta apenas, e com 10 minutos no máximo você consegue cria-lá.
              <br />
              <br />
              E lembre-se que a ideia é o candidato aproveitar cada etapa do processo,  e ter tesão pela jornada. Então crie perguntas que você responderia.
              <br />
              <br />
              Então bora?
            </Typography>
            <Divider color="primary" />
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', padding: '0.5rem', marginTop: '1rem' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minWidth: '100px' }}>
                <Image
                  src={nath}
                  alt="Nath"
                  width={80}
                  height={80}
                  style={{ borderRadius: '50%' }}
                />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="body2" color="primary.contrastText" marginBottom={1}>
                  Oiii
                  <br />
                  <br />
                  Aqui é a Nath, de Gente & Cultura e agora você tem a oportunidade de conhecer melhor seu candidato através desse form.
                  <br />
                  <br />
                  Crie perguntas interessantes e perguntas pra te ajudar na hora da sua decisão.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={8} sx={{ borderRadius: '2rem', padding: '2rem' }}>
            <Typography variant="h5" fontWeight='bold' marginTop={8}>
              Eae, Recruter, <br />
              bora melhorar sua vaga?
            </Typography>
            <Typography variant="body1" marginBottom={4}>
              Estamos aqui pra te ajudar, é bem simples e rápido.
            </Typography>
            <Typography variant="h6" marginBottom={1}>
              Aqui a ideia é entender o comportamento do candidato em determinada situação e avaliar assim seu nível de senioridade.
            </Typography>
            <Typography variant="body1" marginBottom={8}>
              Então descreva uma situação do dia a dia da área, e 4 respostas para ela, indo de respostas mais júnior até sênior.
              <br />
              Essa questão será adicionada às nossas questões básicas que já são responsáveis por analisar se o candidato tem fit com nossos valores e perfil de empresa.
            </Typography>
            <Typography variant="h6" marginBottom={4}>
              Por exemplo: No dia a dia de Dados é muito comum as pessoas te pedirem trabalhos que aparentemente não façam muito sentido, como você lidará com isso?
            </Typography>
            <Grid
              sx={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gridGap: '4rem',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem'
              }}
            >
              <Box>
                <Typography variant="body2" marginBottom={1}>
                  Resposta que classificaria como <b>Inadequada</b>.
                  O candidato que responder essa ganhará <b>0 ponto</b>.
                </Typography>
                <Box
                  sx={{
                    borderRadius: 2,
                    boxShadow: '0 0 0 4px rgba(0,0,0,0.1)',
                    padding: isMobile ? '0' : '1.5rem',
                    height: '6rem',
                  }}
                >
                  <Typography variant="body2">
                    Vou pesquisando no google e tentando fazer o que ela pediu.
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography variant="body2" marginBottom={1}>
                  Resposta que classificaria como <b>Júnior</b>.
                  O candidato que responder essa ganhará <b>3 pontos</b>.
                </Typography>
                <Box
                  sx={{
                    borderRadius: 2,
                    boxShadow: '0 0 0 4px rgba(0,0,0,0.1)',
                    padding: isMobile ? '0' : '1.5rem',
                    height: '6rem',
                  }}
                >
                  <Typography variant="body2">
                    Vou pesquisando no google e tentando fazer o que ela pediu.
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography variant="body2" marginBottom={1}>
                  Resposta que classificaria como <b>Pleno</b>.
                  O candidato que responder essa ganhará <b>6 pontos</b>.
                </Typography>
                <Box
                  sx={{
                    borderRadius: 2,
                    boxShadow: '0 0 0 4px rgba(0,0,0,0.1)',
                    padding: isMobile ? '0' : '1.5rem',
                    height: '6rem',
                  }}
                >
                  <Typography variant="body2">
                    Vou pesquisando no google e tentando fazer o que ela pediu.
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography variant="body2" marginBottom={1}>
                  Resposta que classificaria como <b>Sênior</b>.
                  O candidato que responder essa ganhará <b>10 pontos</b>.
                </Typography>
                <Box
                  sx={{
                    borderRadius: 2,
                    boxShadow: '0 0 0 4px rgba(0,0,0,0.1)',
                    padding: isMobile ? '0' : '1.5rem',
                    height: '6rem',
                  }}
                >
                  <Typography variant="body2">
                    Vou pesquisando no google e tentando fazer o que ela pediu.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', padding: '0.5rem', marginTop: '1rem' }}>
              <Button variant="contained" color="primary" onClick={handleOpenDialog}>
                <Typography variant="h6" fontWeight='bold' color="primary.contrastText" >
                  Criar Pergunta
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <CreateQuestionDialog open={openDialog} onClose={handleCloseDialog} />
    </Container >
  );
}

export default Create;
