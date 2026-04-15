import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Chip, Box } from '@mui/material';
import projectsData from '../data/projects.json';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Projects = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 8, pt: 4 }}>
        <Typography variant="h1" gutterBottom>
          Work.
        </Typography>
        <Typography variant="h5" color="#888" sx={{ maxWidth: '600px' }}>
          Detailed overviews of selected projects. Highlighting full-stack architecture, API integration, and user-centric design.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {projectsData.map((project) => (
          <Grid item key={project.id} xs={12}>
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 3, gap: 4 }}>
              <Box sx={{ width: { xs: '100%', md: '45%' }, display: 'flex', alignItems: 'center' }}>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover', borderRadius: '4px', border: '1px solid #1f1f1f', aspectRatio: '16/10' }}
                />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', md: '55%' }, justifyContent: 'center' }}>
                <CardContent sx={{ p: 0, mb: 3 }}>
                  <Typography gutterBottom variant="h3" component="h2" sx={{ color: '#fff', mb: 2 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" color="#aaa" paragraph sx={{ lineHeight: 1.7, fontSize: '1.05rem', mb: 3 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.tags.map((tag, index) => (
                      <Chip key={index} label={tag} size="small" sx={{ fontSize: '0.85rem', height: '28px', backgroundColor: '#1a1a1a', border: '1px solid #333' }} />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 0 }}>
                  <Button size="medium" color="primary" variant="contained" href={project.link} target="_blank" endIcon={<OpenInNewIcon fontSize="small"/>} sx={{ mr: 2 }}>
                    Live Demo
                  </Button>
                  <Button size="medium" color="primary" variant="outlined" href={project.link} target="_blank" startIcon={<GitHubIcon />}>
                    Repository
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
