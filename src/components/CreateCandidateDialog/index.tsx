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

export interface Candidate {
  id?: string
  name: string;
  linkedIn: string;
  score: number;
}

interface CreateCandidateDialogProps {
  open: boolean
  onClose: () => void
  setCandidate: (candidate: Candidate) => void
}

const CreateCandidateDialog = ({
  onClose,
  open,
  setCandidate,
}: CreateCandidateDialogProps) => {
  const [name, setName] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const router = useRouter()
  const { id } = router.query

  const createCandidate = useCallback(async () => {
    if ((name.length > 3 && linkedIn.length > 3)) {
      try {
        const candidate = await fireBaseApi.post('/create-candidate', {
          opportunityId: id,
          name,
          linkedIn,
        });
        setCandidate(candidate.data);
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error('Preencha todos os campos');
      alert('Preencha todos os campos');
    }
  }, [name, linkedIn]);

  const handleCreateCandidate = () => {
    createCandidate();
    onClose();
  }

  const handleClose = () => {
    setLinkedIn('');
    setName('');
    onClose();
  }
  return (
    <Dialog open={open}>
      <DialogTitle>Primeiro nos diga quem é você</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nome"
              variant="outlined"
              margin="dense"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="LinkedIn"
              variant="outlined"
              margin="dense"
              required
              value={linkedIn}
              onChange={(e) => setLinkedIn(e.target.value)}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={handleCreateCandidate}>
          Criar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CreateCandidateDialog;
