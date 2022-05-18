import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import './styles.css';
import { Box, Img } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowSlideNextImage from '../Images/Group 779.png';
import ArrowSlidePreviousImage from '../Images/Group 781.png';
import { Flex } from '@chakra-ui/react';
import { UnorderedList, ListItem } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import MuslimImage from "../Images/SecondSlideshow/MuslimDanish.png"
import DavinciImage from '../Images/SecondSlideshow/DavinciCrispin.png';
import LGBTImage from '../Images/SecondSlideshow/LGBTDanish.png';
import GreenCrispinImage from '../Images/SecondSlideshow/GreenCrispin.png';
import CrispinImage from '../Images/SecondSlideshow/Crispin.png';
import BlackDanish from '../Images/SecondSlideshow/BlackDanish.png';
import HijabImage from '../Images/SecondSlideshow/HijabCrispin.png';
import DanishMainImage from '../Images/SecondSlideshow/DanishMain.png';
const TopSeller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slider = useRef();

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    // nextArrow: <SampleNextArrow />,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: current => setCurrentIndex(current),
    appendDots: dots => {
      return (
        <Box
          display="grid"
          placeItems="center"
          w="100%"
          top="-320px !important"
        >
          <Flex w="95%" margin="0 auto" my="1rem">
            <Box flex="1">
              <Text
                color="white"
                fontFamily="'Urbanist', sans-serif"
                fontWeight="700"
                marginTop={{
                  base: '3rem',
                  sm: '3rem',
                  md: '3rem',
                  lg: '0rem',
                  xl: '0rem',
                }}
                float={{
                  base: 'right',
                  sm: 'right',
                  md: 'left',
                  lg: 'left',
                  xl: 'left',
                }}
                fontSize="clamp(1.5rem,10vw,2.25rem)"
                lineHeight="44px"
                textAlign={{
                  base: 'center',
                  sm: 'center',
                  md: 'left',
                  lg: 'left',
                  xl: 'left',
                }}
              >
                Top Seller
              </Text>
            </Box>
            <Box display="none">
              <UnorderedList ml="0 !important">
                {dots.map((item, index) => {
                  return (
                    <ListItem color="white" key={index}>
                      {item.props.children}
                    </ListItem>
                  );
                })}
              </UnorderedList>
            </Box>
            <Box flex="1" display="flex" justifyContent="flex-end">
              <Button
                onClick={previous}
                bgColor="transparent"
                _hover={{
                  backgroundColor: 'transparent',
                }}
              >
                <Image src={ArrowSlidePreviousImage} />
              </Button>
              <Button
                onClick={next}
                bgColor="transparent"
                _hover={{
                  backgroundColor: 'transparent',
                }}
              >
                <Image src={ArrowSlideNextImage} />
              </Button>
            </Box>
          </Flex>
        </Box>
      );
    },
    customPaging: index => {
      return (
        <Box
          borderRadius="50%"
          px="0.6em"
          border="1px"
          display = "none"
          borderColor="white"
  
          placeItems="center"
        >
          <Button
            paddingStart="0 !important"
            paddingEnd="0 !important"
            minW="0 !important"
            sx={{
              '&:hover::before': {
                opacity: '1 !important',
              },
              '::before': {
                color: 'white !important',
                width: '17px !important',
                top: '1px !important',
                left: '-8px !important',
                fontSize: '8px !important',
                opacity:
                  index === currentIndex ? '1 !important' : '0 !important',
              },
              //   for compariaon and i am leaving it here so that i can remember in the future.
              //   '&:active::before': {
              //     opacity: index === isDisplay ? '0 !important' : '1 !important',
              //   },
            }}
            // same as this
            // backgroundColor={
            //   index === isDisplay ? 'null' : 'blue !important'
            // }
            _focus={{
              outline: '0 !important',
              backgroundColor: 'transparent !important',
            }}
            _hover={{
              backgroundColor: 'none',
            }}
            _activeLink={{
              color: 'white !important',
            }}
          >
            {index + 1}
          </Button>
        </Box>
      );
    },
  };
  return (
    <Box w="95%" margin="0 auto" py="5em" maxW="1600px">
      <Slider ref={c => (slider.current = c)} {...settings}>
        <Box>
          <Box>
            <Img src={DanishMainImage} />
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#FFFFFF"
              fontWeight="700"
              fontSize="18px"
              lineHeight="26px"
              my="0.4rem"
              textAlign="center"
            >
              Danish Main
            </Text>
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#EBEBEB"
              fontWeight="400"
              fontSize="15px"
              lineHeight="22px"
              textAlign="center"
              my="0.2rem"
            >
              214.2 eTH
            </Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Img src={CrispinImage} />
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#FFFFFF"
              fontWeight="700"
              fontSize="18px"
              lineHeight="26px"
              my="0.4rem"
              textAlign="center"
            >
              Crispin Berry
            </Text>
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#EBEBEB"
              fontWeight="400"
              fontSize="15px"
              lineHeight="22px"
              textAlign="center"
              my="0.2rem"
            >
              214.2 ETH
            </Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Img src={BlackDanish} />
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#FFFFFF"
              fontWeight="700"
              fontSize="18px"
              lineHeight="26px"
              my="0.4rem"
              textAlign="center"
            >
              Danish Main
            </Text>
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#EBEBEB"
              fontWeight="400"
              fontSize="15px"
              lineHeight="22px"
              textAlign="center"
              my="0.2rem"
            >
              214.2 ETH
            </Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Img src={HijabImage} />
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#FFFFFF"
              fontWeight="700"
              fontSize="18px"
              lineHeight="26px"
              my="0.4rem"
              textAlign="center"
            >
              Crispin Berry
            </Text>
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#EBEBEB"
              fontWeight="400"
              fontSize="15px"
              lineHeight="22px"
              textAlign="center"
              my="0.2rem"
            >
              214.2 ETH
            </Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Img src={DanishMainImage} />
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#FFFFFF"
              fontWeight="700"
              fontSize="18px"
              lineHeight="26px"
              my="0.4rem"
              textAlign="center"
            >
              Danish Main
            </Text>
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#EBEBEB"
              fontWeight="400"
              fontSize="15px"
              lineHeight="22px"
              textAlign="center"
              my="0.2rem"
            >
              214.2 eTH
            </Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Img src={HijabImage} />
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#FFFFFF"
              fontWeight="700"
              fontSize="18px"
              lineHeight="26px"
              my="0.4rem"
              textAlign="center"
            >
              Danish Main
            </Text>
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#EBEBEB"
              fontWeight="400"
              fontSize="15px"
              lineHeight="22px"
              textAlign="center"
              my="0.2rem"
            >
              214.2 eTH
            </Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Img src={GreenCrispinImage} />
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#FFFFFF"
              fontWeight="700"
              fontSize="18px"
              lineHeight="26px"
              my="0.4rem"
              textAlign="center"
            >
              Crispin Berry
            </Text>
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#EBEBEB"
              fontWeight="400"
              fontSize="15px"
              lineHeight="22px"
              textAlign="center"
              my="0.2rem"
            >
              214.2 ETH
            </Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Img src={LGBTImage} />
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#FFFFFF"
              fontWeight="700"
              fontSize="18px"
              lineHeight="26px"
              my="0.4rem"
              textAlign="center"
            >
              Danish Main
            </Text>
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#EBEBEB"
              fontWeight="400"
              fontSize="15px"
              lineHeight="22px"
              textAlign="center"
              my="0.2rem"
            >
              214.2 ETH
            </Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Img src={LGBTImage} />
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#FFFFFF"
              fontWeight="700"
              fontSize="18px"
              lineHeight="26px"
              my="0.4rem"
              textAlign="center"
            >
              Danish Main
            </Text>
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#EBEBEB"
              fontWeight="400"
              fontSize="15px"
              lineHeight="22px"
              textAlign="center"
              my="0.2rem"
            >
              214.2 ETH
            </Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Img src={DavinciImage} />
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#FFFFFF"
              fontWeight="700"
              fontSize="18px"
              lineHeight="26px"
              my="0.4rem"
              textAlign="center"
            >
              Danish Main
            </Text>
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#EBEBEB"
              fontWeight="400"
              fontSize="15px"
              lineHeight="22px"
              textAlign="center"
              my="0.2rem"
            >
              214.2 ETH
            </Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Img src={MuslimImage} />
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#FFFFFF"
              fontWeight="700"
              fontSize="18px"
              lineHeight="26px"
              my="0.4rem"
              textAlign="center"
            >
              Danish Main
            </Text>
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#EBEBEB"
              fontWeight="400"
              fontSize="15px"
              lineHeight="22px"
              textAlign="center"
              my="0.2rem"
            >
              214.2 ETH
            </Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Img src={DanishMainImage} />
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#FFFFFF"
              fontWeight="700"
              fontSize="18px"
              lineHeight="26px"
              my="0.4rem"
              textAlign="center"
            >
              Danish Main
            </Text>
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#EBEBEB"
              fontWeight="400"
              fontSize="15px"
              lineHeight="22px"
              textAlign="center"
              my="0.2rem"
            >
              214.2 ETH
            </Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Img src={BlackDanish} />
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#FFFFFF"
              fontWeight="700"
              fontSize="18px"
              lineHeight="26px"
              my="0.4rem"
              textAlign="center"
            >
              Danish Main
            </Text>
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#EBEBEB"
              fontWeight="400"
              fontSize="15px"
              lineHeight="22px"
              textAlign="center"
              my="0.2rem"
            >
              214.2 ETH
            </Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Img src={BlackDanish} />
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#FFFFFF"
              fontWeight="700"
              fontSize="18px"
              lineHeight="26px"
              my="0.4rem"
              textAlign="center"
            >
              Danish Main
            </Text>
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#EBEBEB"
              fontWeight="400"
              fontSize="15px"
              lineHeight="22px"
              textAlign="center"
              my="0.2rem"
            >
              214.2 ETH
            </Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Img src={BlackDanish} />
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#FFFFFF"
              fontWeight="700"
              fontSize="18px"
              lineHeight="26px"
              my="0.4rem"
              textAlign="center"
            >
              Danish Main
            </Text>
            <Text
              fontFamily="'Urbanist', sans-serif"
              color="#EBEBEB"
              fontWeight="400"
              fontSize="15px"
              lineHeight="22px"
              textAlign="center"
              my="0.2rem"
            >
              214.2 ETH
            </Text>
          </Box>
        </Box>
      </Slider>
    </Box>
  );
};

export default TopSeller;
