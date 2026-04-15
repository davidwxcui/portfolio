import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import DataObjectIcon from '@mui/icons-material/DataObject';

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#000' }}>
      <AppBar position="sticky" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #1f1f1f', backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(12px)' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <DataObjectIcon sx={{ color: '#fff', mr: 1, fontSize: '2rem' }} />
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                fontFamily: 'inherit',
                fontWeight: 800,
                color: '#fff',
                textDecoration: 'none',
                letterSpacing: '-0.02em',
              }}
            >
              DAVID CUI
            </Typography>
            <Box sx={{ display: 'flex', gap: { xs: 1, md: 3 } }}>
              <Button component={Link} to="/" sx={{ color: '#aaa', fontWeight: 600, '&:hover':{ color: '#fff' } }}>Home</Button>
              <Button component={Link} to="/projects" sx={{ color: '#aaa', fontWeight: 600, '&:hover':{ color: '#fff' } }}>Work</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, py: { xs: 4, md: 8 } }}>
        {children}
      </Box>
      <Box component="footer" sx={{ py: 4, px: 2, mt: 'auto', backgroundColor: '#0a0a0a', borderTop: '1px solid #1f1f1f' }}>
        <Container maxWidth="xl">
          <Typography variant="body2" color="#666" align="center" sx={{ fontWeight: 500 }}>
            {"© "} {new Date().getFullYear()} David Cui. Built with React & Vite.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
