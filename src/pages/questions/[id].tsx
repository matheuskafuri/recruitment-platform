import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import tallis from "../../assets/images/tallis.jpeg";
import CreateCandidateDialog, { Candidate } from "../../components/CreateCandidateDialog";
import FirstQuestion from "../../components/FirstQuestion";
import FourthQuestion from "../../components/FourthQuestion";
import SecondQuestion from "../../components/SecondQuestion";
import ThirdQuestion from "../../components/ThirdQuestion";
import fireBaseApi from "../../services/fireBaseApi";

export interface OpportunityQuestionProps {
  id: string;
  opportunityId: string
  title: string
  description: string
}

export interface OpportunityQuestionOptionsProps {
  questionId: string
  value: string
  weight: number
}

const Questions = () => {
  const [question, setQuestion] = useState(0);
  const [opportunityQuestion, setOpportunityQuestion] = useState<OpportunityQuestionProps>(null);
  const [opportunityQuestionOptions, setOpportunityQuestionOptions] = useState<OpportunityQuestionOptionsProps[]>([]);
  const [candidate, setCandidate] = useState(null);
  const [score, setScore] = useState<number>(0)
  const [openDialog, setOpenDialog] = useState(true);

  const router = useRouter()

  const updateCandidate = useCallback(async () => {
    try {
      await fireBaseApi.post('/update-candidate', {
        candidate,
        score,
      });
      return
    } catch (err) {
      console.log(err);
    }
  }, [score]);

  useEffect(() => {
    updateCandidate();
  }, [score])

  const handleOpenDialog = () => {
    setOpenDialog(true);
  }
  const handleCloseDialog = () => {
    setOpenDialog(false);
  }

  const loadQuestion = useCallback(async (id: string) => {
    try {
      const question = await fireBaseApi.post("/load-question", {
        opportunityId: id,
      });
      setOpportunityQuestion(question.data);
      return question.data;
    } catch (err) {
      console.log(err);
    }
  }, [setOpportunityQuestion]);

  const loadQuestionOptions = useCallback(async (id: string) => {
    try {
      const questionOptions = await fireBaseApi.post("/load-options", {
        questionId: id,
      });
      setOpportunityQuestionOptions(questionOptions.data);
      return questionOptions.data;
    } catch (err) {
      console.log(err);
    }
  }, [setOpportunityQuestionOptions]);


  useEffect(() => {
    if (!router.isReady) return;
    const { id } = router.query
    loadQuestion(id as string).then((questions) => {
      loadQuestionOptions(questions[0].id).then((options) => {
        console.log(options)
      }
      )
    });
  }, [router.isReady, loadQuestion]);

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
              Sua jornada no G4 Educação começa aqui!
            </Typography>
            <Typography variant="body1" color="primary.contrastText" marginBottom={3}>
              Selecionamos algumas perguntas rápida pra te conhecer melhor.
            </Typography>
            <Typography variant="body1" color="primary.contrastText" marginBottom={3}>
              São 3 perguntas e com 10 minutos no máximo você responde.
            </Typography>
            <Typography variant="body1" color="primary.contrastText" marginBottom={3}>
              E lembre-se de aproveitar cada etapa do processo, o importante é ter tensão pela jornada.
            </Typography>
            <Typography variant="body1" color="primary.contrastText" marginBottom={3}>
              Então bora?
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', padding: '0.5rem', marginTop: '1rem' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minWidth: '100px' }}>
                <Image
                  src={tallis}
                  alt="Tallis"
                  width={80}
                  height={80}
                  style={{ borderRadius: '50%' }}
                />
                <Typography variant="body1" color="primary.contrastText" marginBottom={4}>
                  Tallis
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="subtitle2" color="primary.contrastText" marginBottom={1}>
                  Eae, tá curtindo o G1 Educação?
                </Typography>
                <Typography variant="subtitle2" color="primary.contrastText" marginBottom={1}>
                  Aqui é o Tallis Gomes, um dos sócios e agora você tem a oportunidade da gente te conhecer melhor através desse form.
                </Typography>
                <Typography variant="subtitle2" color="primary.contrastText" marginBottom={1}>
                  Seja sincero, e pense que isso é nosso bate papo.
                </Typography>
                <Typography variant="subtitle2" color="primary.contrastText" marginBottom={1}>
                  Espero te ver no G4 em breve.
                </Typography>
              </Box>
            </Box>
          </Grid>
          {question === 0 && <FirstQuestion changeQuestion={setQuestion} setScore={setScore} score={score} />}
          {question === 1 && <SecondQuestion changeQuestion={setQuestion} setScore={setScore} score={score} />}
          {question === 2 && <ThirdQuestion changeQuestion={setQuestion} setScore={setScore} score={score} />}
          {question === 3 && <FourthQuestion changeQuestion={setQuestion} opportunityQuestion={opportunityQuestion} opportunityQuestionOptions={opportunityQuestionOptions} setScore={setScore} score={score} />}
        </Grid>
      </Box>
      <CreateCandidateDialog
        open={openDialog}
        onClose={handleCloseDialog}
        setCandidate={setCandidate}
      />
    </Container >
  );
}

export default Questions;
