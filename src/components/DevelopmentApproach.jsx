import React from 'react';
import { Container, Card, CardContent, Typography, makeStyles, Box } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontWeight: 600,
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    color: '#888',
  },
}));

const DevelopmentApproach = () => {
  const classes = useStyles();

  const items = [
    {
      title: 'UX Driven Engineering',
      description: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
    },
    {
      title: 'Proven Experience and Expertise',
      description: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
    },
    {
      title: 'Developing Shared Understanding',
      description: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
    },
    {
      title: 'Security & Intellectual Property (IP)',
      description: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
    },
    {
      title: 'Code Reviews',
      description: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
    },
    {
      title: 'Quality Assurance & Testing',
      description: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
    },
  ];

  return (
    <Container className={classes.root}>
      <Typography variant="h4" component="h1" gutterBottom>
        Our design and <span style={{ fontWeight: 'bold' }}>development approach</span>
      </Typography>
      <Box container spacing={4}>
        {items.map((item, index) => (
          <Box item xs={12} sm={6} md={4} key={index}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5" className={classes.title}>
                  {item.title}
                </Typography>
                <Typography className={classes.subtitle}>{item.description}</Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default DevelopmentApproach;