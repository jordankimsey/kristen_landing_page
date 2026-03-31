'use client'
import { useState } from "react";
import { motion } from "framer-motion";
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
  IconButton
} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


export default function AdRequestPage() {
   const [formState, setFormState] = useState({videoLinks: [''], details: ''});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (index: number, e: any) => {
    // const newVideos = [...formState];
    // formState[index][e.target.name] = e.target.value;
    // setFormState(newVideos);
  };

  const addVideoField = () => {
    setFormState(prev => ({
      ...prev,
      videoLinks: [...prev.videoLinks, '']
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState); // Replace with API call or submission logic
    setSubmitted(true);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#faf4ef",
        py: 6,
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card elevation={6} sx={{ borderRadius: 4 }}>
            <CardContent sx={{ p: { xs: 3, sm: 6 } }}>
              {/* Header */}
              <Box textAlign="center" mb={5} px={5}>
                <Typography variant="h4" fontWeight={600} gutterBottom>
                  Request Ad Code
                </Typography>
                <Typography variant="body1" color="text.secondary">
                   Paste the link to the video they want an ad code for and include any additional comments. You can also add multiple videos by clicking the + button.
                </Typography>
              </Box>

              {/* Success State */}
              {submitted ? (
                <Alert severity="success" sx={{ textAlign: "center" }}>
                  Your request has been submitted. We’ll get back to you shortly.
                </Alert>
              ) : (
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3} justifyContent="center">
                     {formState.videoLinks.map((video, index) => (
                        <Grid size={{xs: 12}} sx={{display: 'flex', flexDirection: 'row', justifyItems: 'center', alignItems: 'center'}}>
                          <TextField
                            fullWidth
                            label="Video Link"
                            name="videoLink"
                            type="url"
                            value={video}
                            onChange={(e) => handleChange(index, e)}
                            required
                            size="medium"
                            helperText="Paste a TikTok, YouTube, or Instagram link"
                          />
                          {formState.videoLinks.length > 0 ? (  <IconButton onClick={addVideoField} color="primary" sx={{marginBottom: 2}}>
                           <RemoveCircleOutlineIcon fontSize="medium" />
                          </IconButton>) : (
                            <IconButton onClick={addVideoField} color="primary" sx={{marginBottom: 2}}>
                           <AddCircleOutlineIcon fontSize="medium" />
                          </IconButton>
                          )}
                        </Grid>
                    ))}
                    {/* Details */}
                    <Grid size={{xs: 12}} >
                      <TextField
                        fullWidth
                        label="Additional Details (Optional)"
                        name="details"
                        multiline
                        rows={5}
                        value={formState.details}
                        onChange={handleChange}
                      />
                    </Grid>

                    {/* Button */}
                    <Grid size={{xs: 12, md: 6 }} >
                      <Button
                        fullWidth
                        variant="contained"
                        size="large"
                        type="submit"
                        sx={{
                          py: 1.5,
                          borderRadius: 2,
                          textTransform: "none",
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
            variant="caption"
            display="block"
            textAlign="center"
            color="text.secondary"
            mt={3}
          >
            © {new Date().getFullYear()} Kristen Kimsey
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}