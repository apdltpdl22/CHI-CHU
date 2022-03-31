import styled from 'styled-components';
import Slider from 'react-slick';

export const SlideTitle = styled.h2`
  padding: 60px 0px 50px 0px;
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
`;

export const Container = styled.div`
  margin-right: 25px;
`;

export const StyledSlider = styled(Slider)`
  .slick-list {
    width: 1600px;
    margin: 0 auto;
  }

  .slick-slide div {
    cursor: pointer;
  }

  .slick-dots {
    bottom: -50px;
    margin=top: 200px;
  }
`;

export const CardBox = styled.div`
  cursor: pointer;
`;

export const CardImg = styled.img`
  width: 380px;
  height: 190px;
`;

export const CardText = styled.p`
  padding: 20px;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
`;
