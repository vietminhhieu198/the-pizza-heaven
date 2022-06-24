import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#008c7a !important',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#008c7a !important',
  },
  '& input:invalid + fieldset': {
    borderColor: '#ff8886 !important',
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important',
    borderColor: '#008c7a !important',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#909090',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#008c7a',
      padding: '4px !important',
      borderLeftWidth: 6,
    },
  },
});
