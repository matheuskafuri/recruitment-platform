import { Grid, Typography, IconButton, Link } from "@mui/material"
import { CustomSelect } from "../CustomSelect"
import { TextInput } from "../TextInput"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react";
import { QuestionProps } from "../FirstQuestion";

const ThirdQuestion = ({ changeQuestion }: QuestionProps) => {
  const [answer, setAnswer] = useState("");

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
      <Grid item xs={12} md={12} sx={{ borderRadius: '2rem', py: '2rem' }}>
        <TextInput
          label="E pra finalizar, como você resolveria o seguinte problema?"
          setAnswer={setAnswer}
          question='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies, leo a sollicitudin porta, nulla odio efficitur metus, id bibendum nisi odio non enim. Donec porta nibh a maximus cursus. Curabitur at ipsum malesuada, consequat orci et, eleifend enim. Sed odio nunc, consectetur ac massa nec,'
        />
      </Grid>
      <IconButton aria-label="next" component={Link} href="/final"
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

export default ThirdQuestion
