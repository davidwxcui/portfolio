import React from 'react';
import { Container, Typography, Box, Grid, Chip, Paper, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import projectsData from '../data/projects.json';

const skills = [
  "Java", "Python", "C++", "SQL", "TypeScript", "React", "Next.js", "Node", "ASP.NET", "Docker", "AWS", "CI/CD"
];

const experiences = [
  {
    role: "Software Developer Intern",
    company: "InfoSpec Systems Inc",
    date: "Jan 2026 – Current",
    points: [
      "Built full-stack digital menu features using ASP.NET, C#, JS, and SQL Server.",
      "Modernized a legacy Android waitlist app to MVVM architecture using ViewModel and LiveData.",
      "Implemented Kitchen Display System (KDS) views using React."
    ]
  },
  {
    role: "Web Developer Intern",
    company: "ClickDishes",
    date: "Jan 2018 – May 2018",
    points: [
      "Redesigned the website from Wix to custom HTML/JS.",
      "Built responsive, cross-browser interfaces for desktop and mobile."
    ]
  }
];

const educations = [
  { 
    school: "Simon Fraser University", 
    degree: "BSc Computer Science Software Systems", 
    date: "Sep 2023 - Spring 2027",
    courses: [
      "CMPT 373: Software Development Methods",
      "CMPT 473: Software Quality Assurance",
      "CMPT 300: Operating Systems I",
      "CMPT 354: Database Systems I",
      "CMPT 276: Intro to Software Engineering",
      "CMPT 225: Data Structures and Programming",
      "CMPT 307: Data Structures and Algorithms",
      "CMPT 431: Distributed Systems",
      "CMPT 372: Web II - Server-side Development"
    ]
  },
  { 
    school: "British Columbia Institute of Technology", 
    degree: "Certificate, New Media Design & Web Dev", 
    date: "May 2017 - Apr 2018" 
  }
];

// Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const BentoCard = ({ children, sx, delay = 0 }) => (
  <Box
    component={motion.div}
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    sx={{
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,0.05)',
      borderRadius: '24px',
      padding: { xs: 3, md: 5 },
      height: '100%',
      ...sx
    }}
  >
    {children}
  </Box>
);

const Home = () => {
  return (
    <Box sx={{ pb: 15, pt: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        
        {/* HERO: The Bento Grid */}
        <Box id="hero" sx={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <Grid container spacing={3}>
            {/* Top Left: Main Intro */}
            <Grid item xs={12} md={8}>
              <BentoCard delay={0.1} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="body1" sx={{ color: '#0070f3', fontWeight: 600, mb: 2, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Software Engineer
                </Typography>
                <Typography variant="h1" sx={{ fontSize: { xs: '3.5rem', md: '5rem' }, fontWeight: 800, lineHeight: 1.05, mb: 3 }}>
                  David Cui.
                </Typography>
                <Typography variant="h5" sx={{ color: '#888', fontWeight: 400, maxWidth: '90%', lineHeight: 1.6 }}>
                  Building robust backend systems and modern full-stack web applications. Computer Science Software Systems at Simon Fraser University.
                </Typography>
              </BentoCard>
            </Grid>

            {/* Top Right: Status / Fun */}
            <Grid item xs={12} md={4}>
              <Grid container spacing={3} sx={{ height: '100%' }}>
                <Grid item xs={12}>
                  <BentoCard delay={0.2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 4 }}>
                    <Box>
                      <Typography variant="body2" sx={{ color: '#888' }}>Currently at</Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>InfoSpec Systems</Typography>
                    </Box>
                    <Box sx={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: '#00e676', boxShadow: '0 0 15px #00e676' }} />
                  </BentoCard>
                </Grid>
                <Grid item xs={12}>
                   <BentoCard delay={0.3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, padding: 4 }}>
                      <IconButton href="https://github.com/davidwxcui" target="_blank" sx={{ color: '#aaa', '&:hover': { color: '#0070f3', transform: 'scale(1.1)' }, transition: 'all 0.2s' }}>
                        <GitHubIcon sx={{ fontSize: 40 }} />
                      </IconButton>
                      <IconButton href="https://linkedin.com/in/davidwxcui" target="_blank" sx={{ color: '#aaa', '&:hover': { color: '#0070f3', transform: 'scale(1.1)' }, transition: 'all 0.2s' }}>
                        <LinkedInIcon sx={{ fontSize: 40 }} />
                      </IconButton>
                   </BentoCard>
                </Grid>
              </Grid>
            </Grid>

            {/* Bottom: Skills */}
            <Grid item xs={12}>
              <BentoCard delay={0.4} sx={{ p: { xs: 3, md: 5 } }}>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 700 }}>Technical Arsenal</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                  {skills.map((skill, index) => (
                    <Chip key={index} label={skill} sx={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#eaeaea', border: '1px solid rgba(255,255,255,0.1)', fontSize: '1rem', py: 2.5, px: 1 }} />
                  ))}
                </Box>
              </BentoCard>
            </Grid>
          </Grid>
        </Box>

        {/* PROJECTS SECTION */}
        <Box id="projects" sx={{ minHeight: '100vh', pt: 15 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
            <Typography variant="h2" sx={{ mb: 1, fontWeight: 800 }}>Featured Work</Typography>
            <Typography variant="body1" sx={{ color: '#888', mb: 6 }}>Architecting full-stack solutions.</Typography>
          </motion.div>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {projectsData.map((project, idx) => (
              <motion.div key={project.id} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
                <Paper sx={{ display: 'flex', flexDirection: { xs: 'column', md: idx % 2 === 0 ? 'row' : 'row-reverse' }, backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '32px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                    <Box component="img" src={`${import.meta.env.BASE_URL}${project.image.startsWith('/') ? project.image.slice(1) : project.image}`} sx={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '350px' }} />
                  </Box>
                  <Box sx={{ width: { xs: '100%', md: '50%' }, p: { xs: 4, md: 8 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>{project.title}</Typography>
                    <Typography variant="body1" sx={{ color: '#aaa', mb: 5, lineHeight: 1.7, fontSize: '1.1rem' }}>{project.description}</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 5 }}>
                      {project.tags.map(tag => (
                        <Chip key={tag} label={tag} size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.85rem' }} />
                      ))}
                    </Box>
                    <Box>
                      <IconButton href={project.link} target="_blank" sx={{ border: '1px solid rgba(255,255,255,0.2)', color: '#fff', '&:hover': { backgroundColor: '#0070f3', borderColor: '#0070f3' } }}>
                        <OpenInNewIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* EXPERIENCE SECTION */}
        <Box id="experience" sx={{ minHeight: '80vh', pt: 15 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
            <Typography variant="h2" sx={{ mb: 1, fontWeight: 800 }}>Experience</Typography>
            <Typography variant="body1" sx={{ color: '#888', mb: 6 }}>Where I've applied my skills.</Typography>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <Box sx={{ position: 'relative', borderLeft: '2px solid rgba(255,255,255,0.1)', ml: { xs: 2, md: 4 }, pb: 4 }}>
              {experiences.map((exp, idx) => (
                <Box key={idx} sx={{ position: 'relative', mb: 6, pl: { xs: 4, md: 8 } }}>
                  {/* Timeline Dot */}
                  <Box sx={{ position: 'absolute', left: '-7px', top: '24px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#0070f3', boxShadow: '0 0 10px #0070f3' }} />
                  
                  <motion.div variants={fadeInUp}>
                    <BentoCard>
                      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' }, mb: 4 }}>
                        <Box>
                          <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>{exp.role}</Typography>
                          <Typography variant="h6" sx={{ color: '#0070f3', fontWeight: 600 }}>{exp.company}</Typography>
                        </Box>
                        <Typography variant="body1" sx={{ color: '#aaa', fontWeight: 600, mt: { xs: 2, md: 0 }, fontSize: '1rem', backgroundColor: 'rgba(255,255,255,0.05)', padding: '6px 16px', borderRadius: '16px' }}>{exp.date}</Typography>
                      </Box>
                      <ul style={{ paddingLeft: '20px', margin: 0, color: '#aaa', fontSize: '1.05rem' }}>
                        {exp.points.map((point, i) => (
                          <li key={i} style={{ marginBottom: '12px', lineHeight: 1.6 }}>{point}</li>
                        ))}
                      </ul>
                    </BentoCard>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Box>

        {/* EDUCATION SECTION */}
        <Box id="education" sx={{ minHeight: '50vh', pt: 15 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
            <Typography variant="h2" sx={{ mb: 1, fontWeight: 800 }}>Education</Typography>
            <Typography variant="body1" sx={{ color: '#888', mb: 6 }}>Academic background.</Typography>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <Box sx={{ position: 'relative', borderLeft: '2px solid rgba(255,255,255,0.1)', ml: { xs: 2, md: 4 }, pb: 4 }}>
              {educations.map((edu, idx) => (
                <Box key={idx} sx={{ position: 'relative', mb: 6, pl: { xs: 4, md: 8 } }}>
                  {/* Timeline Dot */}
                  <Box sx={{ position: 'absolute', left: '-7px', top: '24px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#0070f3', boxShadow: '0 0 10px #0070f3' }} />
                  
                  <motion.div variants={fadeInUp}>
                    <BentoCard>
                      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' } }}>
                        <Box>
                          <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>{edu.school}</Typography>
                          <Typography variant="h6" sx={{ color: '#aaa', fontWeight: 500 }}>{edu.degree}</Typography>
                        </Box>
                        <Typography variant="body1" sx={{ color: '#0070f3', fontWeight: 700, mt: { xs: 2, md: 0 }, fontSize: '0.95rem', backgroundColor: 'rgba(0, 112, 243, 0.1)', padding: '6px 16px', borderRadius: '16px', border: '1px solid rgba(0, 112, 243, 0.2)' }}>{edu.date}</Typography>
                      </Box>
                      {edu.courses && (
                        <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                          <Typography variant="body2" sx={{ color: '#888', mb: 2, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Coursework</Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {edu.courses.map((course, i) => (
                              <Chip key={i} label={course} size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.03)', color: '#bbb', fontSize: '0.85rem' }} />
                            ))}
                          </Box>
                        </Box>
                      )}
                    </BentoCard>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Box>

      </Container>
    </Box>
  );
};

export default Home;
