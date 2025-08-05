// src/App.js

import React from 'react';
import { Container, Typography } from '@mui/material';
import ShortenerForm from './components/ShortenerForm';

function App() {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        React URL Shortener
      </Typography>
      <ShortenerForm />
    </Container>
  );
}

export default App;
