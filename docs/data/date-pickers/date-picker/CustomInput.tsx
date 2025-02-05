import * as React from 'react';
import Box from '@mui/material/Box';
import { TextFieldProps } from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Unstable_NextDatePicker as NextDatePicker } from '@mui/x-date-pickers/NextDatePicker';

type BrowserInputProps = TextFieldProps & {
  ownerState?: any;
};

function BrowserInput(props: BrowserInputProps) {
  const { inputProps, InputProps, ownerState, inputRef, error, ...other } = props;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <input ref={inputRef} {...inputProps} {...(other as any)} />
      {InputProps?.endAdornment}
    </Box>
  );
}

export default function CustomInput() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <NextDatePicker
        label="Custom input"
        slots={{
          textField: BrowserInput,
        }}
      />
    </LocalizationProvider>
  );
}
