import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import { Grid, Box, useMediaQuery } from '@mui/material';


interface Options {
  weight: number;
  value: string;
}

interface CustomSelectProps {
  options: Options[]
  setAnswer: (answer: number) => void
  height?: string
}
const CustomSelect = ({ options, setAnswer, height }: CustomSelectProps) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [weight, setWeight] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(
      parseInt(event.target.value)
    );
    setAnswer(parseInt(event.target.value));
  };
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={weight}
        onChange={handleChange}
      >
        <Grid
          sx={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gridGap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              sx={{
                borderRadius: 2,
                boxShadow: '0 0 0 4px rgba(0,0,0,0.1)',
                padding: isMobile ? '0' : '1.5rem',
              }}
              value={option.weight}
              control={<Radio />}
              label={option.value}
            />
          ))}
        </Grid>
      </RadioGroup>
    </FormControl>
  );
}

export { CustomSelect }
