import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Alert,
} from '@mui/material'
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import fireBaseApi from '../../services/fireBaseApi';

interface Option {
  questionId: string;
  value: string;
  weight: number;
}

interface CreateQuestionOptionsDialogProps {
  // open: boolean
  // onClose: () => void
  questionId: string
  handleClose: () => void
}

const CreateQuestionOptionsDialog = ({
  // onClose,
  // open,
  questionId,
  handleClose,
}: CreateQuestionOptionsDialogProps) => {

  let options: Option[] = [];
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');

  const createQuestionOptions = useCallback(async () => {
    if ((value1.length > 3 && value2.length > 3 && value3.length > 3 && value4.length > 3)) {
      try {
        const questionOptions = options.map(async (option) => {
          await fireBaseApi.post('/create-options', {
            questionId,
            value: option.value,
            weight: option.weight,
          });
        })
        await Promise.all(questionOptions);
        handleClose();
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error('Preencha todos os campos');
      alert('Preencha todos os campos');
    }
  }, [options]);

  const handleCreateQuestionOptionsDialog = () => {
    options.push({ questionId, value: value1, weight: 1 });
    options.push({ questionId, value: value2, weight: 3 });
    options.push({ questionId, value: value3, weight: 6 });
    options.push({ questionId, value: value4, weight: 10 });
    createQuestionOptions();
  }

  // const handleClose = () => {
  //   setQuestion('');
  //   setTitle('');
  //   setWeight(0);
  //   onClose();
  // }
  return (
    <>
      <DialogTitle>Criar Alternativas de Resposta</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Alert severity="warning">Resposta totalmente equivocada.
              O candidato que responder essa ganhará 0 ponto.</Alert>
            <TextField
              fullWidth
              label="Alternativa 1"
              variant="outlined"
              margin="dense"
              required
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Alert severity="warning">Resposta que classificaria como Júnior.
              O candidato que responder essa ganhará 3 ponto.</Alert>
            <TextField
              fullWidth
              label="Alternativa 2"
              variant="outlined"
              margin="dense"
              required
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              sx={{ marginRight: '1rem' }}
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Alert severity="warning">Resposta que classificaria como Pleno.
              O candidato que responder essa ganhará 6 pontos.</Alert>
            <TextField
              fullWidth
              sx={{ marginRight: '1rem' }}
              label="Alternativa 3"
              variant="outlined"
              margin="dense"
              required
              value={value3}
              onChange={(e) => setValue3(e.target.value)}
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Alert severity="warning">Resposta que classificaria como Sênior.
              O candidato que responder essa ganhará 10 pontos.</Alert>
            <TextField
              fullWidth
              sx={{ marginRight: '1rem' }}
              label="Alternativa 4"
              variant="outlined"
              margin="dense"
              required
              value={value4}
              onChange={(e) => setValue4(e.target.value)}
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={handleCreateQuestionOptionsDialog}>
          Criar
        </Button>
      </DialogActions>
    </>

  )
}

export default CreateQuestionOptionsDialog;
