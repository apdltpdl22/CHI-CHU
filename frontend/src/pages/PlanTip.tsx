import PostCarousel from '../components/PlanTip/PostCarousel';
import { Box, Container } from '@mui/material';
import OptionCards from '../components/PlanTip/OptionCardSet';
import Header from '../components/Common/Header';
import { NormalBoldText } from '../components/PlanDetail/styles';

const PlanTip = (): JSX.Element => {
  return (
    <>
      <Header />
      <Container
        sx={{
          paddingTop: 9,
          paddingBottom: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100vw',
            paddingBottom: 13,
            backgroundColor: '#f8f8f8',
          }}
        >
          <Box sx={{ width: '80vw', marginLeft: '10vw' }}>
            <NormalBoldText
              style={{
                alignSelf: 'start',
                marginTop: '30px',
                marginBottom: '20px',
              }}
            >
              포스트
            </NormalBoldText>
            <PostCarousel />
          </Box>
        </Box>
        <br />
        <br />
        <Box style={{ width: '80vw' }}>
          <NormalBoldText
            style={{
              alignSelf: 'start',
              marginTop: '30px',
              marginBottom: '10px',
            }}
          >
            이럴 때는 이런 보장!
          </NormalBoldText>
        </Box>
        <OptionCards />
      </Container>
    </>
  );
};

export default PlanTip;
