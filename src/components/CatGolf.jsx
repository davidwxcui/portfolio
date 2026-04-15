import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const CatGolf = ({ onReset }) => {
  const [phase, setPhase] = useState('idle'); 

  useEffect(() => {
    // 1. Wait a beat, then slide in cat and swing
    const t1 = setTimeout(() => {
      setPhase('swinging');
    }, 1500);

    // 2. Ball flies across the screen
    const t2 = setTimeout(() => {
      setPhase('flying');
      
      // Select all chaos-targets and knock them over sequentially
      const targets = document.querySelectorAll('.chaos-target');
      
      // Convert to array and shuffle for random destruction
      const shuffledTargets = Array.from(targets).sort(() => 0.5 - Math.random());

      shuffledTargets.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('knocked-over');
        }, index * 100 + 400); // staggering the chaos
      });

    }, 2500);

    // 3. Show reset button after destruction
    const t3 = setTimeout(() => {
      setPhase('done');
    }, 5500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleReset = () => {
    // Restore the DOM
    const targets = document.querySelectorAll('.chaos-target');
    targets.forEach((el) => {
      el.classList.remove('knocked-over');
    });
    // Remove the CatGolf overlay
    onReset();
  };

  return (
    <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 9999, overflow: 'hidden' }}>
      {/* The Cat */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: phase !== 'idle' ? '5%' : '-30%',
          fontSize: '10rem',
          transition: 'left 1s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.2s ease-in',
          transform: phase === 'swinging' ? 'rotate(-25deg)' : 'rotate(0deg)',
          transformOrigin: 'bottom center',
          display: 'flex',
          alignItems: 'flex-end'
        }}
      >
        <img 
          src={`${import.meta.env.BASE_URL}images/ragdoll.png`} 
          alt="Ragdoll Cat" 
          style={{ width: '200px', transform: 'scaleX(-1)', mixBlendMode: 'screen' }} 
        />
        <Box 
          sx={{ 
            position: 'absolute', 
            right: '-60px', 
            bottom: '20px', 
            fontSize: '8rem', 
            transform: phase === 'swinging' ? 'rotate(110deg)' : 'rotate(-20deg)', 
            transformOrigin: 'bottom left', 
            transition: 'transform 0.15s ease-in' 
          }}
        >
          🏌️‍♂️
        </Box>
      </Box>

      {/* The Flying Golf Ball */}
      {phase === 'flying' && (
        <Box
          className="golf-ball-fly"
          sx={{
            position: 'absolute',
            fontSize: '3rem',
            left: '15%',
            bottom: '20%'
          }}
        >
          ⚪
        </Box>
      )}

      {/* Reset Button */}
      {phase === 'done' && (
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'auto', textAlign: 'center' }}>
          <Typography variant="h2" sx={{ fontWeight: 900, color: 'white', mb: 3, textShadow: '0 4px 20px rgba(0,0,0,0.8)', letterSpacing: '0.1em' }}>
            FORE!
          </Typography>
          <Button variant="contained" size="large" onClick={handleReset} sx={{ backgroundColor: '#00e676', '&:hover': { backgroundColor: '#00c853' }, color: 'black', fontWeight: 800, fontSize: '1.2rem', py: 2, px: 6, borderRadius: '50px', boxShadow: '0 0 30px rgba(0,230,118,0.5)' }}>
            Take a Mulligan
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CatGolf;
