import { Grid, Typography, IconButton, Link } from "@mui/material"
import { CustomSelect } from "../CustomSelect"
import { TextInput } from "../TextInput"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react";
import { OpportunityQuestionOptionsProps, OpportunityQuestionProps } from "../../pages/questions/[id]";

interface QuestionProps {
  changeQuestion: (question: number) => void;
  opportunityQuestion: OpportunityQuestionProps;
  opportunityQuestionOptions: OpportunityQuestionOptionsProps[]
}

const FourthQuestion = ({ changeQuestion, opportunityQuestion, opportunityQuestionOptions }: QuestionProps) => {
  const [answer, setAnswer] = useState(0);
  const [comment, setComment] = useState("");
  return (
    <Grid item xs={12} md={8} sx={{ borderRadius: '2rem', padding: '2rem' }}>
      <Typography variant="h5" fontWeight='bold' marginTop={8}>
        Perguntas
      </Typography>
      <Typography variant="body1" marginBottom={4}>
        Seja sincero (a) e aproveite!
      </Typography>
      <Typography variant="body1" marginBottom={4}>
        {opportunityQuestion[0].title}
      </Typography>
      <CustomSelect
        options={opportunityQuestionOptions}
        setAnswer={setAnswer}
      />
      <Grid item xs={12} md={12} sx={{ borderRadius: '2rem', py: '2rem' }}>
        <TextInput
          label="Deseja comentar alguma coisa sobre sua resposta? (opcional)"
          setComment={setComment}
        />
      </Grid>
      <IconButton aria-label="next" onClick={() => changeQuestion(0)}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '1rem',
          '&:hover': {
            backgroundColor: 'background.default'
          }
        }}
      >
        Finalizar
        <ArrowForwardIcon
          sx={{
            color: 'primary.dark',
            fontSize: '4rem',
          }}
        />
      </IconButton>
    </Grid>
  )
}

export default FourthQuestion
