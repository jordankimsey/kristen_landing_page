import { Button } from '@mui/material';
import React from 'react';

const LinkButton = ({ url, text }: { url: string; text: string }) => {
  return (
    <Button
      sx={{
        borderRadius: '20px',
        mt: 2,
        color: 'black',
        border: '0.1px solid black',
        py: 1.3,
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
