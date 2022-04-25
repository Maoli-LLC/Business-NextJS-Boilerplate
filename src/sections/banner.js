/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import HeroImg from 'assets/hero-image.png';
import {MainHeaderInfo, MainHeaderSecondaryInfo} from '../constants/constants.js'
// import ShapeLeft from 'assets/shape-left.png';
// import ShapeRight from 'assets/shape-right.png';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading
            as="h1"
            variant="heroPrimary"
            className={styles.banner.mainheading}
          >
            {MainHeaderInfo}
          </Heading>
          <Text as="p" variant="heroSecondary">
            {MainHeaderSecondaryInfo}
          </Text>
          <Button variant='text_special' sx={styles.banner.explore__button}>Explore</Button>
        </Box>
        <Box sx={styles.banner.imageBox}>
        <Image src={HeroImg} alt='banner'/>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    mainheading: {
      fontFamily: 'Playfair Display',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '72px',
      lineHeight: '96px',
    },
    explore__button: {
      backgroundColor: 'text_special',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};
