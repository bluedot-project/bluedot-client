import React from 'react';
import { Box, List } from '@chakra-ui/core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <Box as="section">
      <List
        as={Slider}
        w="100vw"
        h="56.2vw"
        maxH="420px"
        {...settings}
        bg="rgba(255, 208, 122, 0.323)"
      >
        <Box
          as="li"
          listStyleType="none"
          bg="url(https://static.wanted.co.kr/images/newintro/main_kr_mobile.jpg)"
          backgroundSize="cover"
          bgPos="50%"
          bgRepeat="no-repeat"
          w="100vw"
          h="56.2vw"
          maxH="420px"
          pos="relative"
        >
          <Box
            pos="absolute"
            bottom="20%"
            left="60%"
            w="35vw"
            color="white"
          >
            <Box as="h3" fontSize="1.6rem">
              닷비디오
            </Box>
            <Box as="p" fontSize="1rem">
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Iste tempora dolores
              voluptatum fugit repellendus, numquam quos!
            </Box>
          </Box>
        </Box>
        <Box
          bg="url(https://t1.daumcdn.net/brunch/service/user/7J2z/image/01cda2WH_NhJdq8JCCv4l5LlD_Y.jpg)"
          backgroundSize="cover"
          bgPos="50%"
          bgRepeat="no-repeat"
          w="100vw"
          h="56.2vw"
          maxH="420px"
          pos="relative"
        >
          <Box
            pos="absolute"
            bottom="20%"
            left="60%"
            w="35vw"
            color="white"
          >
            <Box as="h3" fontSize="1.6rem">
              닷비디오
            </Box>
            <Box as="p" fontSize="1rem">
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Iste tempora dolores
              voluptatum fugit repellendus, numquam quos!
            </Box>
          </Box>
        </Box>
      </List>
      {/* </AspectRatio> */}
    </Box>
  );
};

export default Hero;
