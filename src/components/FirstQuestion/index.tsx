import { Grid, Typography, IconButton, Link } from "@mui/material"
import { CustomSelect } from "../CustomSelect"
import { TextInput } from "../TextInput"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react";

export interface QuestionProps {
  changeQuestion: (question: number) => void;
}

const FirstQuestion = ({ changeQuestion }: QuestionProps) => {
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
        Como você lida com tal situação?
      </Typography>
      <CustomSelect
        options={
          [
            {
              value: 'Lido assim e assim e tal',
              weight: 10
            },
            {
              value: 'Prefiro tal e tal coisa',
              weight: 8
            },
            {
              value: 'Fico puto e ja era',
              weight: 3
            },
            {
              value: 'É melhor resolver de tal forma',
              weight: 20
            }
          ]
        }
        setAnswer={setAnswer}
      />
      <Grid item xs={12} md={12} sx={{ borderRadius: '2rem', py: '2rem' }}>
        <TextInput
          label="Deseja comentar alguma coisa sobre sua resposta? (opcional)"
          setComment={setComment}
        />
      </Grid>
      <IconButton aria-label="next" onClick={() => changeQuestion(1)}
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
        Próxima pergunta
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

export default FirstQuestion
