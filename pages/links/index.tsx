import { Box, Link, Typography, Button } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import LinkButton from '../../components/LinkButton';

const index = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        pt: 8,
        px: 2,
        backgroundColor: '#faf4ef',
      }}
    >
      <Box
        maxWidth='md'
        sx={{textAlign: 'center'}}
      >
        <Image
          src={'/profile_pic.jpg'}
          alt={'profile-picture'}
          width={100}
          height={100}
          style={{ borderRadius: '50%' }}
        />
        <Typography sx={{ pt: 2, fontWeight: 'bold' }}>
          @kristensvintagehome
        </Typography>
        <LinkButton text='Amazon' url='https://www.amazon.com' />
        <LinkButton text='Amazon' url='https://www.amazon.com' />
        <LinkButton text='Amazon' url='https://www.amazon.com' />
        <LinkButton text='Amazon' url='https://www.amazon.com' />
      </Box>
    </Box>
  );
};

export default index;
