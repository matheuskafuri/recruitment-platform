import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

const AutocompleteInput = ({ options, setValue }) => {
  const defaultProps = {
    options: options,
    getOptionLabel: option => option.title,
  }

  const handleChange = (event, newValue) => {
    setValue(newValue ? newValue.id : '');
  }

  return (
    <Autocomplete
      {...defaultProps}
      disablePortal
      onChange={handleChange}
      id="select-opportunity"
      options={options}
      sx={{ width: '100%' }}
      renderInput={(params) => <TextField {...params} label="Selecione a Vaga" />}
    />
  );
}

export { AutocompleteInput };
