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
        width: '100vw',
        pt: 8,
        backgroundImage: "url('/bg3.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          px: 1,
          color: 'white',
          display: { xs: 'block', sm: 'flex' },
          flexDirection: { sm: 'column' },
          alignItems: { sm: 'center' },
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(0,0,0,0.6)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 3,
            px: { sm: 4 },
            borderRadius: '13px',
          }}
        >
          <Image
            src={'/profile_pic.jpg'}
            alt={'profile-picture'}
            width={120}
            height={120}
            style={{ borderRadius: '50%', border: '1px solid white' }}
          />
          <Typography sx={{ py: 2, fontWeight: 'bold' }}>
            @kristensvintagehome
          </Typography>
          <LinkButton
            text='Amazon Storefront'
            url='https://www.amazon.com/shop/kristenkimsey'
          />
          <LinkButton
            text='Chicnchill Baskets: Use code KRISTEN55'
            url='https://www.etsy.com/shop/Chicnchilldecor?coupon=KRISTEN55'
          />
          <LinkButton
            text='Cushion Lab: Use code KRISTENSVINTAGEHOME10'
            url='https://glnk.io/6xz8w/kristensvintagehome'
          />
          <LinkButton
            text='Clarifion: Use Code KRISTENSVINTAGEHOME for 15% off'
            url='http://clarifion.com/kristensvintagehome'
          />
          <LinkButton
            text='Hype Inda House: Shop Unique decor with code Kristen for 10% off your entire order '
            url='https://www.hypeindahouse.com/kristen'
          />
          <LinkButton
            text='TikTok'
            url='https://www.tiktok.com/@kristensvintagehome'
          />
        </Box>
      </Box>
    </Box>
  );
};

export default index;
