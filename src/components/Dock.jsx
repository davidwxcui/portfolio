import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import { motion } from 'framer-motion';

const Dock = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component={motion.div}
      initial={{ y: 100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.5 }}
      sx={{
        position: 'fixed',
        bottom: 30,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
        display: 'flex',
        gap: 2,
        padding: '12px 24px',
        borderRadius: '30px',
        backgroundColor: 'rgba(15, 15, 15, 0.65)',
        backdropFilter: 'blur(24px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
      }}
    >
      <Tooltip title="Start">
        <IconButton onClick={() => handleScroll('hero')} sx={{ color: '#fff', '&:hover': { color: '#0070f3', backgroundColor: 'rgba(255,255,255,0.05)' } }}>
          <HomeRoundedIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Projects">
        <IconButton onClick={() => handleScroll('projects')} sx={{ color: '#fff', '&:hover': { color: '#0070f3', backgroundColor: 'rgba(255,255,255,0.05)' } }}>
          <LayersRoundedIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Experience">
        <IconButton onClick={() => handleScroll('experience')} sx={{ color: '#fff', '&:hover': { color: '#0070f3', backgroundColor: 'rgba(255,255,255,0.05)' } }}>
          <WorkRoundedIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Education">
        <IconButton onClick={() => handleScroll('education')} sx={{ color: '#fff', '&:hover': { color: '#0070f3', backgroundColor: 'rgba(255,255,255,0.05)' } }}>
          <SchoolRoundedIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Dock;
