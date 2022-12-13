import { Box, Typography } from '@mui/material';
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
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
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
        <LinkButton text='Amazon Storefront' url='https://www.amazon.com' />
        <LinkButton
          text='Chicnchill Baskets: Use code KRISTEN55'
          url='https://www.etsy.com/shop/Chicnchilldecor?coupon=KRISTEN55'
        />
        <LinkButton
          text='TikTok'
          url='https://www.tiktok.com/@kristensvintagehome'
        />
      </Box>
    </Box>
  );
};

export default index;
