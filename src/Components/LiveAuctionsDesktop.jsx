import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import './styles.css';
import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Flex } from '@chakra-ui/react';
import { UnorderedList, ListItem } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import ArrowLeftImage from '../Images/Group 775.png';
import WhiteGorillaImage from '../Images/WhiteGorilla.png';
import SamuraiImage from '../Images/Samurai.png';
import BlackGorillaImage from '../Images/BlackGorilla.png';
import MuriImage from '../Images/Muri.png';
import ThugImage from '../Images/Thug.png';
import Bald from '../Images/Bald.png';
import ArrowRightImage from '../Images/Group 778.png';
import DanishMainImage from '../Images/DanishMain.png';

const LiveauctionsDesktop = () => {
  let containersForHover = {
    firstHoverContainer: false,
    secondHoverContainer: false,
    thirdHoverContainer: false,
    fourthHoverContainer: false,
    fifthHoverContainer: false,
    sixthHoverContainer: false,
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHover, setShowHover] = useState(containersForHover);
  

  const slider = useRef();

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

  const handleClick = (e, key) => {
    e.preventDefault();
    const allFalse = Object.assign(
      ...Object.keys(showHover).map(key => ({ [key]: false }))
    );
    setShowHover(allFalse);
    setShowHover(prevState => ({
      ...prevState,
      [key]: !showHover[key],
    }));
  };

  const handleClickGone = (e, key) => {
    e.preventDefault();
    const allFalse = Object.assign(
      ...Object.keys(showHover).map(key => ({ [key]: false }))
    );
    setShowHover(allFalse);
    setShowHover(prevState => ({
      ...prevState,
      [key]: !showHover[key],
    }));
  };

  const handleHoverSecond = (e, key) => {
    e.preventDefault();
    const allFalse = Object.assign(
      ...Object.keys(showHover).map(key => ({ [key]: false }))
    );
    setShowHover(allFalse);
    setShowHover(prevState => ({
      ...prevState,
      [key]: !showHover[key],
    }));

  };

  const handleHoverSecondGone = (e, key) => {
    e.preventDefault();
    const allFalse = Object.assign(
      ...Object.keys(showHover).map(key => ({ [key]: false }))
    );
    setShowHover(allFalse);
    setShowHover(prevState => ({
      ...prevState,
      [key]: !showHover[key],
    }));
  };

  const handleHoverThird = (e, key) => {
    e.preventDefault();
    const allFalse = Object.assign(
      ...Object.keys(showHover).map(key => ({ [key]: false }))
    );
    setShowHover(allFalse);
    setShowHover(prevState => ({
      ...prevState,
      [key]: !showHover[key],
    }));

  };

  const handleHoverThirdGone = (e, key) => {
    e.preventDefault();
    const allFalse = Object.assign(
      ...Object.keys(showHover).map(key => ({ [key]: false }))
    );
    setShowHover(allFalse);
    setShowHover(prevState => ({
      ...prevState,
      [key]: !showHover[key],
    }));
  };

  const handleHoverFourth = (e, key) => {
    e.preventDefault();
    const allFalse = Object.assign(
      ...Object.keys(showHover).map(key => ({ [key]: false }))
    );
    setShowHover(allFalse);
    setShowHover(prevState => ({
      ...prevState,
      [key]: !showHover[key],
    }));

  };

  const handleHoverFourthGone = (e, key) => {
    e.preventDefault();
    const allFalse = Object.assign(
      ...Object.keys(showHover).map(key => ({ [key]: false }))
    );
    setShowHover(allFalse);
    setShowHover(prevState => ({
      ...prevState,
      [key]: !showHover[key],
    }));
  };

  const handleHoverFifth = (e, key) => {
    e.preventDefault();
    const allFalse = Object.assign(
      ...Object.keys(showHover).map(key => ({ [key]: false }))
    );
    setShowHover(allFalse);
    setShowHover(prevState => ({
      ...prevState,
      [key]: !showHover[key],
    }));

  };

  const handleHoverFifthGone = (e, key) => {
    e.preventDefault();
    const allFalse = Object.assign(
      ...Object.keys(showHover).map(key => ({ [key]: false }))
    );
    setShowHover(allFalse);
    setShowHover(prevState => ({
      ...prevState,
      [key]: !showHover[key],
    }));
  };

  const handleHoverSixth = (e, key) => {
    e.preventDefault();
    const allFalse = Object.assign(
      ...Object.keys(showHover).map(key => ({ [key]: false }))
    );
    setShowHover(allFalse);
    setShowHover(prevState => ({
      ...prevState,
      [key]: !showHover[key],
    }));

  };

  const handleHoverSixthGone = (e, key) => {
    e.preventDefault();
    const allFalse = Object.assign(
      ...Object.keys(showHover).map(key => ({ [key]: false }))
    );
    setShowHover(allFalse);
    setShowHover(prevState => ({
      ...prevState,
      [key]: !showHover[key],
    }));
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
          bottom="-88px !important"
        >
          <Flex w="80%" maxW="300px" margin="0 auto" my="1rem">
            <Box flex="1" display="flex" justifyContent="flex-end">
              <Button
                onClick={previous}
                bgColor="transparent"
                _hover={{
                  backgroundColor: 'transparent',
                }}
              >
                <Image src={ArrowLeftImage} />
              </Button>
            </Box>
            <Box flex="4">
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
            <Box flex="1">
              <Button
                onClick={next}
                bgColor="transparent"
                _hover={{
                  backgroundColor: 'transparent',
                }}
              >
                <Image src={ArrowRightImage} />
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
          borderColor="white"
          display="grid"
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
            onClick={handleClick}
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
          <Box p="0.9em" bgColor="#343444" borderRadius="20px">
            <Box
              bgImg={WhiteGorillaImage}
              bgSize="cover"
              bgRepeat="no-repeat"
              p="9em"
              borderRadius="20px"
              backgroundBlendMode="multiply"
              _hover={{
                cursor: 'pointer',
                bgColor: 'rgba(0,0,0,0.5)',
              }}
              position="relative"
              onMouseOver={e => {
                handleClick(e, 'firstHoverContainer');
              }}
              onMouseLeave={e => {
                handleClickGone(e, 'firstHoverContainer');
              }}
            >
              {showHover['firstHoverContainer'] && (
                <Button
                  bgColor="white"
                  position="absolute"
                  top="35%"
                  left="12.5%"
                  transform="translate(63%, 73%)"
                >
                  Place Bid
                </Button>
              )}
            </Box>
            <Text
              ml="0.3rem"
              my="1.1rem"
              fontFamily="'Urbanist', sans-serif"
              color="#fff"
              lineHeight="26px"
              fontWeight="700"
              fontSize="18px"
            >
              Bored Ape #79
            </Text>
            <Flex>
              <Flex flex="2">
                <Box flex="1">
                  <Image src={DanishMainImage} borderRadius="50%" />
                </Box>
                <Box flex="4">
                  <Text
                    fontFamily="'Urbanist', sans-serif"
                    color="#8A8AA0"
                    fontWeight="400"
                    fontSize="13px"
                    lineHeight="20px"
                    ml="0.7rem"
                  >
                    Creator
                  </Text>
                  <Text
                    fontFamily="'Urbanist', sans-serif"
                    color="#EBEBEB"
                    fontWeight="700"
                    fontSize="15px"
                    lineHeight="22px"
                    my="0.1rem"
                    ml="0.7rem"
                  >
                    Danish Main
                  </Text>
                </Box>
              </Flex>
              <Box flex="1">
                <Text
                  fontFamily="'Urbanist', sans-serif"
                  color="#8A8AA0"
                  fontWeight="400"
                  fontSize="13px"
                  lineHeight="20px"
                >
                  4.89 eTH
                </Text>
                <Text
                  fontFamily="'Urbanist', sans-serif"
                  color="#EBEBEB"
                  fontWeight="700"
                  fontSize="15px"
                  lineHeight="22px"
                  my="0.1rem"
                >
                  Danish Main
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box>
          <Box p="0.9em" bgColor="#343444" borderRadius="20px">
            <Box
              bgImg={BlackGorillaImage}
              bgSize="cover"
              bgRepeat="no-repeat"
              p="9em"
              borderRadius="20px"
              backgroundBlendMode="multiply"
              _hover={{
                cursor: 'pointer',
                bgColor: 'rgba(0,0,0,0.5)',
              }}
              position="relative"
              onMouseOver={e => {
                handleHoverSecond(e, 'secondHoverContainer');
              }}
              onMouseLeave={e => {
                handleHoverSecondGone(e, 'secondHoverContainer');
              }}
            >
              {showHover['secondHoverContainer'] && (
                <Button
                  bgColor="white"
                  position="absolute"
                  top="35%"
                  left="12.5%"
                  transform="translate(63%, 73%)"
                >
                  Place Bid
                </Button>
              )}
            </Box>
            <Text
              ml="0.3rem"
              my="1.1rem"
              fontFamily="'Urbanist', sans-serif"
              color="#fff"
              lineHeight="26px"
              fontWeight="700"
              fontSize="18px"
            >
              Bored Ape #22
            </Text>

            <Flex>
              <Flex flex="2">
                <Box flex="1">
                  <Image src={Bald} borderRadius="50%" />
                </Box>
                <Box flex="4">
                  <Text
                    fontFamily="'Urbanist', sans-serif"
                    color="#8A8AA0"
                    fontWeight="400"
                    fontSize="13px"
                    lineHeight="20px"
                    ml="0.7rem"
                  >
                    Creator
                  </Text>
                  <Text
                    fontFamily="'Urbanist', sans-serif"
                    color="#EBEBEB"
                    fontWeight="700"
                    fontSize="15px"
                    lineHeight="22px"
                    my="0.1rem"
                    ml="0.7rem"
                  >
                    Danish Main
                  </Text>
                </Box>
              </Flex>
              <Box flex="1">
                <Text
                  fontFamily="'Urbanist', sans-serif"
                  color="#8A8AA0"
                  fontWeight="400"
                  fontSize="13px"
                  lineHeight="20px"
                >
                  Current Bid
                </Text>
                <Text
                  fontFamily="'Urbanist', sans-serif"
                  color="#EBEBEB"
                  fontWeight="700"
                  fontSize="15px"
                  lineHeight="22px"
                  my="0.1rem"
                >
                  5.05 eTH
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box>
          <Box p="0.9em" bgColor="#343444" borderRadius="20px">
            <Box
              bgImg={SamuraiImage}
              bgSize="cover"
              bgRepeat="no-repeat"
              p="9em"
              borderRadius="20px"
              backgroundBlendMode="multiply"
              _hover={{
                cursor: 'pointer',
                bgColor: 'rgba(0,0,0,0.5)',
              }}
              position="relative"
              onMouseOver={e => {
                handleHoverThird(e, 'thirdHoverContainer');
              }}
              onMouseLeave={e => {
                handleHoverThirdGone(e, 'thirdHoverContainer');
              }}
            >
              {showHover['thirdHoverContainer'] && (
                <Button
                  bgColor="white"
                  position="absolute"
                  top="35%"
                  left="12.5%"
                  transform="translate(63%, 73%)"
                >
                  Place Bid
                </Button>
              )}
            </Box>
            <Text
              ml="0.3rem"
              my="1.1rem"
              fontFamily="'Urbanist', sans-serif"
              color="#fff"
              lineHeight="26px"
              fontWeight="700"
              fontSize="18px"
            >
              Azuki #8152
            </Text>

            <Flex>
              <Flex flex="2">
                <Box flex="1">
                  <Image src={DanishMainImage} borderRadius="50%" />
                </Box>
                <Box flex="4">
                  <Text
                    fontFamily="'Urbanist', sans-serif"
                    color="#8A8AA0"
                    fontWeight="400"
                    fontSize="13px"
                    lineHeight="20px"
                    ml="0.7rem"
                  >
                    Creator
                  </Text>
                  <Text
                    fontFamily="'Urbanist', sans-serif"
                    color="#EBEBEB"
                    fontWeight="700"
                    fontSize="15px"
                    lineHeight="22px"
                    my="0.1rem"
                    ml="0.7rem"
                  >
                    Abyeski
                  </Text>
                </Box>
              </Flex>
              <Box flex="1">
                <Text
                  fontFamily="'Urbanist', sans-serif"
                  color="#8A8AA0"
                  fontWeight="400"
                  fontSize="13px"
                  lineHeight="20px"
                >
                  Current Bid
                </Text>
                <Text
                  fontFamily="'Urbanist', sans-serif"
                  color="#EBEBEB"
                  fontWeight="700"
                  fontSize="15px"
                  lineHeight="22px"
                  my="0.1rem"
                >
                  5.05 eTH
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box>
          <Box p="0.9em" bgColor="#343444" borderRadius="20px">
            <Box
              bgImg={ThugImage}
              bgSize="cover"
              bgRepeat="no-repeat"
              p="9em"
              borderRadius="20px"
              backgroundBlendMode="multiply"
              _hover={{
                cursor: 'pointer',
                bgColor: 'rgba(0,0,0,0.5)',
              }}
              position="relative"
              onMouseOver={e => {
                handleHoverFourth(e, 'fourthHoverContainer');
              }}
              onMouseLeave={e => {
                handleHoverFourthGone(e, 'fouthHoverContainer');
              }}
            >
              {showHover['fourthHoverContainer'] && (
                <Button
                  bgColor="white"
                  position="absolute"
                  top="35%"
                  left="12.5%"
                  transform="translate(63%, 73%)"
                >
                  Place Bid
                </Button>
              )}
            </Box>
            <Text
              ml="0.3rem"
              my="1.1rem"
              fontFamily="'Urbanist', sans-serif"
              color="#fff"
              lineHeight="26px"
              fontWeight="700"
              fontSize="18px"
            >
              MURI #8142
            </Text>

            <Flex>
              <Flex flex="2">
                <Box flex="1">
                  <Image src={MuriImage} borderRadius="50%" />
                </Box>
                <Box flex="4">
                  <Text
                    fontFamily="'Urbanist', sans-serif"
                    color="#8A8AA0"
                    fontWeight="400"
                    fontSize="13px"
                    lineHeight="20px"
                    ml="0.7rem"
                  >
                    Creator
                  </Text>
                  <Text
                    fontFamily="'Urbanist', sans-serif"
                    color="#EBEBEB"
                    fontWeight="700"
                    fontSize="15px"
                    lineHeight="22px"
                    my="0.1rem"
                    ml="0.7rem"
                  >
                    MURI
                  </Text>
                </Box>
              </Flex>
              <Box flex="1">
                <Text
                  fontFamily="'Urbanist', sans-serif"
                  color="#8A8AA0"
                  fontWeight="400"
                  fontSize="13px"
                  lineHeight="20px"
                >
                  Current Bid
                </Text>
                <Text
                  fontFamily="'Urbanist', sans-serif"
                  color="#EBEBEB"
                  fontWeight="700"
                  fontSize="15px"
                  lineHeight="22px"
                  my="0.1rem"
                >
                  0.50 eTH
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box>
          <Box p="0.9em" bgColor="#343444" borderRadius="20px">
            <Box
              bgImg={ThugImage}
              bgSize="cover"
              bgRepeat="no-repeat"
              p="9em"
              borderRadius="20px"
              backgroundBlendMode="multiply"
              _hover={{
                cursor: 'pointer',
                bgColor: 'rgba(0,0,0,0.5)',
              }}
              position="relative"
              onMouseOver={e => {
                handleHoverFifth(e, 'fifthHoverContainer');
              }}
              onMouseLeave={e => {
                handleHoverFifthGone(e, 'fifthHoverContainer');
              }}
            >
              {showHover['fifthHoverContainer'] && (
                <Button
                  bgColor="white"
                  position="absolute"
                  top="35%"
                  left="12.5%"
                  transform="translate(63%, 73%)"
                >
                  Place Bid
                </Button>
              )}
            </Box>
            <Text
              ml="0.3rem"
              my="1.1rem"
              fontFamily="'Urbanist', sans-serif"
              color="#fff"
              lineHeight="26px"
              fontWeight="700"
              fontSize="18px"
            >
              MURI #8142
            </Text>

            <Flex>
              <Flex flex="2">
                <Box flex="1">
                  <Image src={MuriImage} borderRadius="50%" />
                </Box>
                <Box flex="4">
                  <Text
                    fontFamily="'Urbanist', sans-serif"
                    color="#8A8AA0"
                    fontWeight="400"
                    fontSize="13px"
                    lineHeight="20px"
                    ml="0.7rem"
                  >
                    Creator
                  </Text>
                  <Text
                    fontFamily="'Urbanist', sans-serif"
                    color="#EBEBEB"
                    fontWeight="700"
                    fontSize="15px"
                    lineHeight="22px"
                    my="0.1rem"
                    ml="0.7rem"
                  >
                    MURI
                  </Text>
                </Box>
              </Flex>
              <Box flex="1">
                <Text
                  fontFamily="'Urbanist', sans-serif"
                  color="#8A8AA0"
                  fontWeight="400"
                  fontSize="13px"
                  lineHeight="20px"
                >
                  Current Bid
                </Text>
                <Text
                  fontFamily="'Urbanist', sans-serif"
                  color="#EBEBEB"
                  fontWeight="700"
                  fontSize="15px"
                  lineHeight="22px"
                  my="0.1rem"
                >
                  0.50 eTH
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box>
          <Box p="0.9em" bgColor="#343444" borderRadius="20px">
            <Box
              bgImg={ThugImage}
              bgSize="cover"
              bgRepeat="no-repeat"
              p="9em"
              borderRadius="20px"
              backgroundBlendMode="multiply"
              _hover={{
                cursor: 'pointer',
                bgColor: 'rgba(0,0,0,0.5)',
              }}
              position="relative"
              onMouseOver={e => {
                handleHoverSixth(e, 'sixthHoverContainer');
              }}
              onMouseLeave={e => {
                handleHoverSixthGone(e, 'sixthHoverContainer');
              }}
            >
              {showHover['sixthHoverContainer'] && (
                <Button
                  bgColor="white"
                  position="absolute"
                  top="35%"
                  left="12.5%"
                  transform="translate(63%, 73%)"
                >
                  Place Bid
                </Button>
              )}
            </Box>
            <Text
              ml="0.3rem"
              my="1.1rem"
              fontFamily="'Urbanist', sans-serif"
              color="#fff"
              lineHeight="26px"
              fontWeight="700"
              fontSize="18px"
            >
              MURI #8142
            </Text>

            <Flex>
              <Flex flex="2">
                <Box flex="1">
                  <Image src={MuriImage} borderRadius="50%" />
                </Box>
                <Box flex="4">
                  <Text
                    fontFamily="'Urbanist', sans-serif"
                    color="#8A8AA0"
                    fontWeight="400"
                    fontSize="13px"
                    lineHeight="20px"
                    ml="0.7rem"
                  >
                    Creator
                  </Text>
                  <Text
                    fontFamily="'Urbanist', sans-serif"
                    color="#EBEBEB"
                    fontWeight="700"
                    fontSize="15px"
                    lineHeight="22px"
                    my="0.1rem"
                    ml="0.7rem"
                  >
                    MURI
                  </Text>
                </Box>
              </Flex>
              <Box flex="1">
                <Text
                  fontFamily="'Urbanist', sans-serif"
                  color="#8A8AA0"
                  fontWeight="400"
                  fontSize="13px"
                  lineHeight="20px"
                >
                  Current Bid
                </Text>
                <Text
                  fontFamily="'Urbanist', sans-serif"
                  color="#EBEBEB"
                  fontWeight="700"
                  fontSize="15px"
                  lineHeight="22px"
                  my="0.1rem"
                >
                  0.50 eTH
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Slider>
    </Box>
  );
};

export default LiveauctionsDesktop;
