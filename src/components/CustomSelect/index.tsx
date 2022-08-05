import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import { Grid, Box, useMediaQuery } from '@mui/material';


interface Options {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: Options[]
  setAnswer: (answer: string) => void
}
const CustomSelect = ({ options, setAnswer }: CustomSelectProps) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    setAnswer((event.target as HTMLInputElement).value);
  };
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
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
                height: '6rem',
              }}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </Grid>
      </RadioGroup>
    </FormControl>
  );
}

export { CustomSelect }
