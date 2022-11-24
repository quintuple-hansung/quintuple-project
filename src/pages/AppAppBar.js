import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar.js';
import Toolbar from '../components/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            textAlign="center"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {'사이트 이름'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/login"
              sx={rightLink}
            >
              {'로그인'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/join"
              sx={{ ...rightLink, color: 'inherit' }}
            >
              {'회원가입'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;