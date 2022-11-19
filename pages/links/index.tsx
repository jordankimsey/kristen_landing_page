import { Box, Typography} from '@mui/material';
import React from 'react';
import Image from 'next/image';
import LinkButton from '../../components/LinkButton';

const index = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        minHeight: '100vh',
        pt: 8,
        px: 2,
        backgroundColor: '#faf4ef',
      }}
    >
      <Box
        maxWidth='md'
        sx={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
      >
        <Image
          src={'/profile_pic.jpg'}
          alt={'profile-picture'}
          width={120}
          height={120}
          style={{ borderRadius: '50%' }}
        />
        <Typography sx={{ py: 2, fontWeight: 'bold' }}>
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
