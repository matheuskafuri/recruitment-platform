import { Grid, Typography, IconButton, Link } from "@mui/material"
import { CustomSelect } from "../CustomSelect"
import { TextInput } from "../TextInput"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react";
import { QuestionProps } from "../FirstQuestion";

const SecondQuestion = ({ changeQuestion }: QuestionProps) => {
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
        Qual desses valores do G4 Educação você mais se identifica?
      </Typography>
      <CustomSelect
        options={
          [
            {
              value: 'Não temos braço curto. Fazemos o que tem que ser feito.',
              weight: 10
            },
            {
              value: 'Jogamos o jogo abertamente.',
              weight: 8
            },
            {
              value: 'Focamos no resultado.',
              weight: 3
            },
            {
              value: 'Temos os mais altos padrões.',
              weight: 20
            },
            {
              value: 'Somos uma tropa de elite.',
              weight: 40
            },
            {
              value: 'Tesão pela jornada.',
              weight: 20
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
