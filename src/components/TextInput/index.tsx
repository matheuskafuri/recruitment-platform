import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

interface TextInputProps {
  label: string;
  question?: string;
  setComment?: (comment: string) => void;
  setAnswer?: (answer: string) => void;
}

const TextInput = ({ setComment, label, setAnswer, question }: TextInputProps) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setComment && setComment(event.target.value);
    setAnswer && setAnswer(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h6" component="h2" gutterBottom>
        {label}
      </Typography>
      {
        question && (
          <Typography variant="body1" component="h2" gutterBottom>
            {question}
          </Typography>
        )
      }
      <TextField
        id="outlined-multiline-flexible"
        label="Comentário"
        multiline
        value={value}
        onChange={handleChange}
        rows={4}
      />
    </Box>
  );
}

export { TextInput }
