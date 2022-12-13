import { Button } from '@mui/material';
import React from 'react';

const LinkButton = ({ url, text }: { url: string; text: string }) => {
  return (
    <Button
      sx={{
        color: '#4C1701',
        backgroundImage: "url('/bg.jpg')",
        borderRadius: '20px',
        mt: 2,
        border: '0.1px solid black',
        py: 1.3,
        maxWidth: '450px',
      }}
      href={url}
      target='_blank'
      rel='noreferrer noopener'
      fullWidth
    >
      {text}
    </Button>
  );
};

export default LinkButton;
