import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import LinkButton from '../../src/components/LinkButton';

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
          marginX: '12px',
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
            px: 4,
            borderRadius: '13px',
            minWidth: { sm: '450px' },
          }}
        >
          <Image
            src={'/profile_pic.jpg'}
            alt={'profile-picture'}
            width={120}
            height={120}
            loading='eager'
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
            text='Shop my home-LTK'
            url='https://www.shopltk.com/explore/Kristen%E2%80%99svintagehome'
          />
          <LinkButton
            text='TikTok'
            url='https://www.tiktok.com/@kristensvintagehome'
          />
          <LinkButton
            text='Request Ad Code'
            url='/request-ad-code'
            openInNewTab={false}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default index;
