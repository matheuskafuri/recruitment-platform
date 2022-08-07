import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
} from '@mui/material'
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import fireBaseApi from '../../services/fireBaseApi';


interface CreateOpportunityDialogProps {
  open: boolean
  onClose: () => void
}

const CreateOpportunityDialog = ({
  onClose,
  open,
}: CreateOpportunityDialogProps) => {
  const [opportunity, setOpportunity] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter()
  const createOpportunity = useCallback(async () => {
    if ((title.length > 3 && description.length > 3)) {
      try {
        const opportunity = await fireBaseApi.post('/create-opportunity', {
          title,
          description,
        });
        setOpportunity(opportunity.data);
        toast.success('Vaga criada com sucesso.')
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error('Preencha todos os campos');
      alert('Preencha todos os campos');
    }
  }, [title, description]);

  const handleCreateOpportunity = () => {
    createOpportunity();
    onClose();
    router.push('/create')
  }

  const handleClose = () => {
    setOpportunity('');
    setTitle('');
    setDescription('');
    onClose();
  }
  return (
    <Dialog open={open} onClose={handleClose} >
      <DialogTitle>Criar Oportunidade</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Título"
              variant="outlined"
              margin="dense"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Descrição"
              variant="outlined"
              margin="dense"
              required
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={handleCreateOpportunity}>
          Criar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CreateOpportunityDialog;
