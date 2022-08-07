import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
} from '@mui/material'
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import fireBaseApi from '../../services/fireBaseApi';
import { AutocompleteInput } from '../Autocomplete';
import CreateQuestionOptionsDialog from '../CreateQuestionOptionsDialog';


interface CreateQuestionDialogProps {
  open: boolean
  onClose: () => void
}

const CreateQuestionDialog = ({
  onClose,
  open,
}: CreateQuestionDialogProps) => {
  const [opportunities, setOpportunities] = useState([]);
  const [opportunity, setOpportunity] = useState({});
  const [question, setQuestion] = useState('');
  const [stage, setStage] = useState(0);
  const [title, setTitle] = useState('');
  const [weight, setWeight] = useState(0);

  const loadOpportunities = useCallback(async () => {
    try {
      const opportunities = await fireBaseApi.post("/load-opportunities");
      setOpportunities(opportunities.data);
    } catch (err) {
      console.log(err);
    }
  }, [setOpportunities]);

  useEffect(() => {
    loadOpportunities();
  }, [loadOpportunities]);

  const createQuestion = useCallback(async () => {
    if ((title.length > 3 && weight <= 10)) {
      try {
        const question = await fireBaseApi.post('/create-question', {
          opportunityId: opportunity,
          title,
          weight,
        });
        setQuestion(question.data);
        setStage(1);
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error('Preencha todos os campos');
      alert('Preencha todos os campos');
    }
  }, [title, weight]);

  const handleCreateQuestion = () => {
    createQuestion();
  }
  console.log(opportunity)

  const handleClose = () => {
    setQuestion('');
    setTitle('');
    setWeight(0);
    onClose();
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      {
        stage === 0 && (
          <>
            <DialogTitle>Criar Questão</DialogTitle>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <AutocompleteInput
                    options={opportunities}
                    setValue={setOpportunity}
                  />
                  <TextField
                    fullWidth
                    label="Enunciado"
                    variant="outlined"
                    margin="dense"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    helperText="Preencha com um enunciado para a pergunta"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Peso"
                    variant="outlined"
                    margin="dense"
                    required
                    value={weight}
                    onChange={(e) => setWeight(
                      e.target.value === '' ? 0 : parseInt(e.target.value)
                    )}
                    helperText="Peso da pergunta, de 1 a 10"
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button color="primary" variant="contained" onClick={handleCreateQuestion}>
                Criar
              </Button>
            </DialogActions>
          </>
        )
      }
      {
        stage === 1 && (
          <CreateQuestionOptionsDialog
            // open={openQuestionOptionsDialog}
            // onClose={handleCloseQuestionOptionsDialog}
            handleClose={handleClose}
            questionId={question}
          />
        )
      }
    </Dialog>

  )
}

export default CreateQuestionDialog;
