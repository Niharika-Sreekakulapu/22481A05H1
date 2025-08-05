// src/components/ShortenerForm.js

import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography
} from '@mui/material';

function ShortenerForm() {
  const [urls, setUrls] = useState([
    { url: '', expiry: '', shortcode: '' },
    { url: '', expiry: '', shortcode: '' },
    { url: '', expiry: '', shortcode: '' },
    { url: '', expiry: '', shortcode: '' },
    { url: '', expiry: '', shortcode: '' },
  ]);
  const [shortenedUrls, setShortenedUrls] = useState([]);

  const handleChange = (index, key, value) => {
    const updated = [...urls];
    updated[index][key] = value;
    setUrls(updated);
  };

  const handleSubmit = () => {
    const newShortened = [];

    urls.forEach(({ url, expiry, shortcode }) => {
      if (!url) return;

      const shortCode = shortcode || Math.random().toString(36).substring(2, 7);
      const expiryMinutes = expiry || 30;

      const shortened = {
        originalUrl: url,
        shortUrl: `http://short.ly/${shortCode}`,
        expiry: `${expiryMinutes} min`,
      };

      newShortened.push(shortened);
    });

    setShortenedUrls(newShortened);
  };

  return (
    <>
      <Paper elevation={3} style={{ padding: '1rem', marginBottom: '1rem' }}>
        <Typography variant="h6" gutterBottom>
          Shorten up to 5 URLs
        </Typography>

        {urls.map((entry, i) => (
          <Grid container spacing={2} key={i} style={{ marginBottom: 10 }}>
            <Grid item xs={12} sm={5}>
              <TextField
                fullWidth
                label="Original URL"
                value={entry.url}
                onChange={(e) => handleChange(i, 'url', e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Expiry (min)"
                value={entry.expiry}
                onChange={(e) => handleChange(i, 'expiry', e.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Custom Shortcode"
                value={entry.shortcode}
                onChange={(e) => handleChange(i, 'shortcode', e.target.value)}
              />
            </Grid>
          </Grid>
        ))}

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
        >
          Shorten URLs
        </Button>
      </Paper>

      {shortenedUrls.length > 0 && (
        <Paper elevation={2} style={{ padding: '1rem', marginTop: '2rem' }}>
          <Typography variant="h6" gutterBottom>
            Shortened URLs
          </Typography>
          {shortenedUrls.map((item, index) => (
            <div key={index} style={{ marginBottom: '1rem' }}>
              <strong>Short URL:</strong>{' '}
              <a href={item.shortUrl} target="_blank" rel="noreferrer">
                {item.shortUrl}
              </a>
              <br />
              <strong>Original:</strong> {item.originalUrl} <br />
              <strong>Expires in:</strong> {item.expiry}
              <hr />
            </div>
          ))}
        </Paper>
      )}
    </>
  );
}

export default ShortenerForm;
