import { Grid, Typography, IconButton, Link } from "@mui/material"
import { CustomSelect } from "../CustomSelect"
import { TextInput } from "../TextInput"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react";
import { QuestionProps } from "../FirstQuestion";

const SecondQuestion = ({ changeQuestion }: QuestionProps) => {
  const [answer, setAnswer] = useState("");
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
        Qual desses valores do G4 Educação você mais se identifica?
      </Typography>
      <CustomSelect
        options={
          [
            {
              label: 'Não temos braço curto. Fazemos o que tem que ser feito.',
              value: '10'
            },
            {
              label: 'Jogamos o jogo abertamente.',
              value: '8'
            },
            {
              label: 'Focamos no resultado.',
              value: '3'
            },
            {
              label: 'Temos os mais altos padrões.',
              value: '20'
            },
            {
              label: 'Somos uma tropa de elite.',
              value: '40'
            },
            {
              label: 'Tesão pela jornada.',
              value: '20'
            },
          ]
        }
        setAnswer={setAnswer}
      />
      <Grid item xs={12} md={12} sx={{ borderRadius: '2rem', py: '2rem' }}>
        <TextInput
          label="Conta pra gente porque você escolheu esse valor (obrigatória):"
          setComment={setComment}
        />
      </Grid>
      <IconButton aria-label="next" onClick={() => changeQuestion(2)}
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

export default SecondQuestion
