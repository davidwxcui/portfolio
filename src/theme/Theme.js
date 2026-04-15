import { createTheme } from '@mui/material/styles';

const bgDark = '#000000';
const bgPaper = '#0a0a0a';
const borderSubtle = '#1f1f1f';
const textPrimary = '#ffffff';
const textSecondary = '#888888';
const accentBlue = '#0070f3'; // Vercel blue

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: textPrimary,
      light: '#ffffff',
      dark: '#dddddd',
    },
    secondary: {
      main: accentBlue,
    },
    background: {
      default: bgDark,
      paper: bgPaper,
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
    },
    divider: borderSubtle,
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontWeight: 800,
      letterSpacing: '-0.03em',
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: bgDark,
          color: textPrimary,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: bgPaper,
          border: `1px solid ${borderSubtle}`,
          boxShadow: 'none',
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            borderColor: '#333333',
            boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: '8px 24px',
          transition: 'all 0.2s ease',
        },
        containedPrimary: {
          backgroundColor: textPrimary,
          color: bgDark,
          '&:hover': {
            backgroundColor: '#eaeaea',
          },
        },
        outlinedPrimary: {
          borderColor: borderSubtle,
          color: textPrimary,
          '&:hover': {
            borderColor: textPrimary,
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          backgroundColor: '#111111',
          border: `1px solid ${borderSubtle}`,
          color: '#aaaaaa',
          transition: 'all 0.2s ease',
          '&:hover': {
            borderColor: '#333333',
            color: textPrimary,
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: bgPaper,
          border: `1px solid ${borderSubtle}`,
          backgroundImage: 'none',
        }
      }
    }
  },
});

export default theme;
