import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';

const ButtonRoot = styled(MuiButton)(({ theme, size }) => ({
  padding: theme.spacing(2,4),
  fontSize: theme.typography.pxToRem(14),
  boxShadow: 'none',
  backgroundColor: '#2E3B55',
  fontFamily: "esamanru Light",
  borderRadius: '30px',
  '&:active, &:focus, &:hover': {
    boxShadow: 'none',
    backgroundColor: '#45577d',
  },
  ...(size === 'small' && {
    padding: theme.spacing(1, 3),
    fontSize: theme.typography.pxToRem(13),
  }),
  ...(size === 'large' && {
    padding: theme.spacing(2, 5),
    fontSize: theme.typography.pxToRem(16),
  }),
}));

// See https://mui.com/guides/typescript/#usage-of-component-prop for why the types uses `C`.
function Button(props) {
  return <ButtonRoot {...props} />;
}

export default Button;