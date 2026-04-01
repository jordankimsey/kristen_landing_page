'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Alert,
  Grid,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { v4 as uuidv4 } from 'uuid';

export default function AdRequestPage() {
  const [formState, setFormState] = useState({
    videoLinks: [{ id: uuidv4(), url: '' }],
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (id: string, value: string) => {
    setFormState((prev) => ({
      ...prev,
      videoLinks: prev.videoLinks.map((link) =>
        link.id === id ? { ...link, url: value } : link
      ),
    }));
  };

  const addVideoField = () => {
    setFormState((prev) => ({
      ...prev,
      videoLinks: [...prev.videoLinks, { id: uuidv4(), url: '' }],
    }));
  };

  const handleRemoveVideoLink = (id: string) => {
    setFormState((prev) => ({
      ...prev,
      videoLinks: prev.videoLinks.filter((_) => id !== _.id),
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        setError(true);
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.json();
      console.log('Success:', result);
      setSubmitted(true);
    } catch {
      console.error('Something went wrong!');
      setSubmitted(true);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#faf4ef',
        py: 6,
      }}
    >
      <Container maxWidth='md'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card elevation={6} sx={{ borderRadius: 4 }}>
            <CardContent sx={{ p: { xs: 3, sm: 6 } }}>
              {/* Header */}
              <Box textAlign='center' mb={5} px={5}>
                <Typography variant='h4' fontWeight={600} gutterBottom>
                  Request Ad Code
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                  Paste the link to the video they want an ad code for and
                  include any additional comments.
                </Typography>
              </Box>
              {}
              {/* Success State */}
              {submitted ? (
                !error ? (
                  <Alert severity='success' sx={{ textAlign: 'center' }}>
                    Your request has been submitted. We’ll get back to you
                    shortly.
                  </Alert>
                ) : (
                  <Alert severity='error' sx={{ textAlign: 'center' }}>
                    Something went wrong. Please try again.
                  </Alert>
                )
              ) : (
                <Box component='form' onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    {formState.videoLinks.map((video, index) => (
                      <Grid
                        size={{ xs: 12 }}
                        key={video.id}
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <motion.div
                          className='w-full'
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <TextField
                            fullWidth
                            label='Video Link'
                            name='videoLink'
                            type='url'
                            value={video.url}
                            onChange={(e) =>
                              handleChange(video.id, e.target.value)
                            }
                            required
                            size='medium'
                            helperText='Paste a TikTok, YouTube, or Instagram link'
                          />
                        </motion.div>
                        {index > 0 && (
                          <IconButton
                            onClick={() => handleRemoveVideoLink(video.id)}
                            sx={{ mb: 2, ml: 1 }}
                          >
                            <RemoveIcon />
                          </IconButton>
                        )}
                      </Grid>
                    ))}
                    <Button onClick={addVideoField} startIcon={<AddIcon />}>
                      Add Link
                    </Button>
                    {/* Details */}
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label='Additional Details (Optional)'
                        name='details'
                        multiline
                        rows={5}
                        value={formState.details}
                        onChange={(e) =>
                          setFormState((prev) => ({
                            ...prev,
                            details: e.target.value,
                          }))
                        }
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ mx: 'auto' }}>
                      <Button
                        fullWidth
                        variant='contained'
                        size='large'
                        type='submit'
                        onClick={handleSubmit}
                        sx={{
                          py: 1.5,
                          borderRadius: 2,
                          textTransform: 'none',
                          fontWeight: 500,
                        }}
                      >
                        Submit Request
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </CardContent>
          </Card>
          {/* Footer */}
          <Typography
            variant='caption'
            display='block'
            textAlign='center'
            color='text.secondary'
            mt={3}
          >
            © {new Date().getFullYear()} Kristen Kimsey
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}
