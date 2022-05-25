import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import ArrowLearnImage from '../Images/Arrow_1.png';
import { Image } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import MuriImage from '../Images/Muri.png';
import PlaceBidImage from '../Images/Bag.png';
import RecycleImage from '../Images/Recycle.png';
import React, { useState } from 'react';
import ThugImage from '../Images/Thug.png';
import { motion } from 'framer-motion';

const MotionDiv = motion(Box);

const TodaysPicks = () => {
  const [blankColor, setBlankColorToColor] = useState(false);
  const [blankColor1, setBlankColorToColor1] = useState(false);
  const [blankColor2, setBlankColorToColor2] = useState(false);
  const [blankColor3, setBlankColorToColor3] = useState(false);
  const [blankColor4, setBlankColorToColor4] = useState(false);
  const [blankColor5, setBlankColorToColor5] = useState(false);
  const [blankColor6, setBlankColorToColor6] = useState(false);
  const [blankColor7, setBlankColorToColor7] = useState(false);

  const changeColor = () => {
    setBlankColorToColor(!blankColor);
  };

  const changeColor1 = () => {
    setBlankColorToColor1(!blankColor1);
  };
  const changeColor2 = () => {
    setBlankColorToColor2(!blankColor2);
  };
  const changeColor3 = () => {
    setBlankColorToColor3(!blankColor3);
  };
  const changeColor4 = () => {
    setBlankColorToColor4(!blankColor4);
  };
  const changeColor5 = () => {
    setBlankColorToColor5(!blankColor5);
  };
  const changeColor6 = () => {
    setBlankColorToColor6(!blankColor6);
  };
  const changeColor7 = () => {
    setBlankColorToColor7(!blankColor7);
  };

  return (
    <Box w="100%" my="1rem">
      <Flex
        w="90%"
        maxW="1600px"
        margin="0 auto"
        justifyContent="space-between"
      >
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
            Today's Picks
          </Text>
        </Box>
        <Box flex="1">
          <Button
            size="lg"
            border="1px"
            borderColor="#14141F"
            bgColor="#14141F"
            color="white"
            float="right"
            // ml="3rem"
            _hover={{
              bgColor: '#14141F',
              borderColor: '#14141F',
            }}
            marginTop={{
              base: '3rem',
              sm: '3rem',
              md: '3rem',
              lg: '0rem',
              xl: '0rem',
            }}
            textAlign="center"
            px={{
              base: '0.5rem',
              sm: '0.5rem',
              md: '1.5rem',
              lg: '1.5rem',
              xl: '1.5rem',
            }}
            fontSize="0.875rem"
            textTransform="uppercase"
            // width="154px"
            // height="56px"
            letterSpacing="10%"
          >
            explore More
            <Image ml="0.5rem" src={ArrowLearnImage} />
          </Button>
        </Box>
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <Grid
          w="95%"
          maxW="1200px"
          m="1rem auto"
          templateColumns={{
            base: 'repeat(1,1fr)',
            sm: 'repeat(1,1fr)',
            md: 'repeat(2,1fr)',
            lg: 'repeat(2,1fr)',
            xl: 'repeat(3,1fr)',
          }}
          gap={6}
        >
          <GridItem p="0.9em" bgColor="#343444" borderRadius="20px">
            <MotionDiv position="relative">
              <Image w="100%" maxW="500px" src={ThugImage} />
              <Box
                as={motion.div}
                bgColor="black"
                p="0.7em"
                borderRadius="12px"
                position="absolute"
                top="10px"
                right="11px"
                onClick={changeColor}
                whileTap={{ scale: 1.9, transition: { duration: 1 } }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 15"
                  xmlns="http://www.w3.org/2000/svg"
                  fill={blankColor ? '#FF0000' : null}
                >
                  <path
                    d="M7.75284 13.1594L1.71486 6.7376C0.374826 5.31239 0.438543 3.06423 1.85651 1.71804C3.27243 0.373798 5.50351 0.437227 6.8416 1.86038L7.51962 2.58151L8.03586 3.13056L8.58242 2.61167L9.30006 1.93036C10.716 0.586122 12.947 0.649551 14.2851 2.0727C15.6252 3.49792 15.5615 5.74608 14.1435 7.09227L7.75284 13.1594Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </Box>
            </MotionDiv>
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
                  0.50 ETH
                </Text>
              </Box>
            </Flex>
            <Flex mt="0.9rem">
              <Box flex="1">
                <Button
                  px="1.9em"
                  bgColor="transparent"
                  border="1px solid #5142FC"
                  color="white"
                  borderRadius="20px"
                  _hover={{
                    backgroundColor: 'transparent',
                  }}
                >
                  <Image mr="0.3rem" src={PlaceBidImage} alt="placebidimage" />
                  Place Bid
                </Button>
              </Box>
              <Box flex="1">
                <Button
                  px="1.9em"
                  bgColor="transparent"
                  color="white"
                  borderRadius="20px"
                  _hover={{
                    backgroundColor: 'transparent',
                  }}
                >
                  <Image mr="0.3rem" src={RecycleImage} alt="placebidimage" />
                  View History
                </Button>
              </Box>
            </Flex>
          </GridItem>
          <GridItem p="0.9em" bgColor="#343444" borderRadius="20px">
            <MotionDiv position="relative">
              <Image w="100%" maxW="500px" src={ThugImage} />
              <Box
                as={motion.div}
                bgColor="black"
                p="0.7em"
                borderRadius="12px"
                position="absolute"
                top="10px"
                right="11px"
                onClick={changeColor1}
                whileTap={{ scale: 1.9, transition: { duration: 1 } }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 15"
                  fill={blankColor1 ? '#FF0000' : null}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.75284 13.1594L1.71486 6.7376C0.374826 5.31239 0.438543 3.06423 1.85651 1.71804C3.27243 0.373798 5.50351 0.437227 6.8416 1.86038L7.51962 2.58151L8.03586 3.13056L8.58242 2.61167L9.30006 1.93036C10.716 0.586122 12.947 0.649551 14.2851 2.0727C15.6252 3.49792 15.5615 5.74608 14.1435 7.09227L7.75284 13.1594Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </Box>
            </MotionDiv>
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
                  0.50 ETH
                </Text>
              </Box>
            </Flex>
            <Flex mt="0.9rem">
              <Box flex="1">
                <Button
                  px="1.9em"
                  bgColor="transparent"
                  border="1px solid #5142FC"
                  color="white"
                  borderRadius="20px"
                  _hover={{
                    backgroundColor: 'transparent',
                  }}
                >
                  <Image mr="0.3rem" src={PlaceBidImage} alt="placebidimage" />
                  Place Bid
                </Button>
              </Box>
              <Box flex="1">
                <Button
                  px="1.9em"
                  bgColor="transparent"
                  color="white"
                  borderRadius="20px"
                  _hover={{
                    backgroundColor: 'transparent',
                  }}
                >
                  <Image mr="0.3rem" src={RecycleImage} alt="placebidimage" />
                  View History
                </Button>
              </Box>
            </Flex>
          </GridItem>
          <GridItem p="0.9em" bgColor="#343444" borderRadius="20px">
            <MotionDiv position="relative">
              <Image w="100%" maxW="500px" src={ThugImage} />
              <Box
                as={motion.div}
                bgColor="black"
                p="0.7em"
                borderRadius="12px"
                position="absolute"
                top="10px"
                right="11px"
                onClick={changeColor2}
                whileTap={{ scale: 1.9, transition: { duration: 1 } }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 15"
                  fill={blankColor2 ? '#FF0000' : null}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.75284 13.1594L1.71486 6.7376C0.374826 5.31239 0.438543 3.06423 1.85651 1.71804C3.27243 0.373798 5.50351 0.437227 6.8416 1.86038L7.51962 2.58151L8.03586 3.13056L8.58242 2.61167L9.30006 1.93036C10.716 0.586122 12.947 0.649551 14.2851 2.0727C15.6252 3.49792 15.5615 5.74608 14.1435 7.09227L7.75284 13.1594Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </Box>
            </MotionDiv>
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
                  0.50 ETH
                </Text>
              </Box>
            </Flex>
            <Flex mt="0.9rem">
              <Box flex="1">
                <Button
                  px="1.9em"
                  bgColor="transparent"
                  border="1px solid #5142FC"
                  color="white"
                  borderRadius="20px"
                  _hover={{
                    backgroundColor: 'transparent',
                  }}
                >
                  <Image mr="0.3rem" src={PlaceBidImage} alt="placebidimage" />
                  Place Bid
                </Button>
              </Box>
              <Box flex="1">
                <Button
                  px="1.9em"
                  bgColor="transparent"
                  color="white"
                  borderRadius="20px"
                  _hover={{
                    backgroundColor: 'transparent',
                  }}
                >
                  <Image mr="0.3rem" src={RecycleImage} alt="placebidimage" />
                  View History
                </Button>
              </Box>
            </Flex>
          </GridItem>
          <GridItem p="0.9em" bgColor="#343444" borderRadius="20px">
            <MotionDiv position="relative">
              <Image w="100%" maxW="500px" src={ThugImage} />
              <Box
                as={motion.div}
                bgColor="black"
                p="0.7em"
                borderRadius="12px"
                position="absolute"
                top="10px"
                right="11px"
                onClick={changeColor3}
                whileTap={{ scale: 1.9, transition: { duration: 1 } }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 15"
                  xmlns="http://www.w3.org/2000/svg"
                  fill={blankColor3 ? '#FF0000' : null}
                >
                  <path
                    d="M7.75284 13.1594L1.71486 6.7376C0.374826 5.31239 0.438543 3.06423 1.85651 1.71804C3.27243 0.373798 5.50351 0.437227 6.8416 1.86038L7.51962 2.58151L8.03586 3.13056L8.58242 2.61167L9.30006 1.93036C10.716 0.586122 12.947 0.649551 14.2851 2.0727C15.6252 3.49792 15.5615 5.74608 14.1435 7.09227L7.75284 13.1594Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </Box>
            </MotionDiv>
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
                  0.50 ETH
                </Text>
              </Box>
            </Flex>
            <Flex mt="0.9rem">
              <Box flex="1">
                <Button
                  px="1.9em"
                  bgColor="transparent"
                  border="1px solid #5142FC"
                  color="white"
                  borderRadius="20px"
                  _hover={{
                    backgroundColor: 'transparent',
                  }}
                >
                  <Image mr="0.3rem" src={PlaceBidImage} alt="placebidimage" />
                  Place Bid
                </Button>
              </Box>
              <Box flex="1">
                <Button
                  px="1.9em"
                  bgColor="transparent"
                  color="white"
                  borderRadius="20px"
                  _hover={{
                    backgroundColor: 'transparent',
                  }}
                >
                  <Image mr="0.3rem" src={RecycleImage} alt="placebidimage" />
                  View History
                </Button>
              </Box>
            </Flex>
          </GridItem>
          <GridItem p="0.9em" bgColor="#343444" borderRadius="20px">
            <MotionDiv position="relative">
              <Image w="100%" maxW="500px" src={ThugImage} />
              <Box
                as={motion.div}
                bgColor="black"
                p="0.7em"
                borderRadius="12px"
                position="absolute"
                top="10px"
                right="11px"
                onClick={changeColor4}
                whileTap={{ scale: 1.9, transition: { duration: 1 } }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 15"
                  fill={blankColor4 ? '#FF0000' : null}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.75284 13.1594L1.71486 6.7376C0.374826 5.31239 0.438543 3.06423 1.85651 1.71804C3.27243 0.373798 5.50351 0.437227 6.8416 1.86038L7.51962 2.58151L8.03586 3.13056L8.58242 2.61167L9.30006 1.93036C10.716 0.586122 12.947 0.649551 14.2851 2.0727C15.6252 3.49792 15.5615 5.74608 14.1435 7.09227L7.75284 13.1594Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </Box>
            </MotionDiv>
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
                  <Box position="relative">
                    <Image src={MuriImage} borderRadius="50%" />
                  </Box>
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
                  0.50 ETH
                </Text>
              </Box>
            </Flex>
            <Flex mt="0.9rem">
              <Box flex="1">
                <Button
                  px="1.9em"
                  bgColor="transparent"
                  border="1px solid #5142FC"
                  color="white"
                  borderRadius="20px"
                  _hover={{
                    backgroundColor: 'transparent',
                  }}
                >
                  <Image mr="0.3rem" src={PlaceBidImage} alt="placebidimage" />
                  Place Bid
                </Button>
              </Box>
              <Box flex="1">
                <Button
                  px="1.9em"
                  bgColor="transparent"
                  color="white"
                  borderRadius="20px"
                  _hover={{
                    backgroundColor: 'transparent',
                  }}
                >
                  <Image mr="0.3rem" src={RecycleImage} alt="placebidimage" />
                  View History
                </Button>
              </Box>
            </Flex>
          </GridItem>
          <GridItem p="0.9em" bgColor="#343444" borderRadius="20px">
            <MotionDiv position="relative">
              <Image w="100%" maxW="500px" src={ThugImage} />
              <Box
                as={motion.div}
                bgColor="black"
                p="0.7em"
                borderRadius="12px"
                position="absolute"
                top="10px"
                right="11px"
                onClick={changeColor5}
                whileTap={{ scale: 1.9, transition: { duration: 1 } }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 15"
                  xmlns="http://www.w3.org/2000/svg"
                  fill={blankColor5 ? '#FF0000' : null}
                >
                  <path
                    d="M7.75284 13.1594L1.71486 6.7376C0.374826 5.31239 0.438543 3.06423 1.85651 1.71804C3.27243 0.373798 5.50351 0.437227 6.8416 1.86038L7.51962 2.58151L8.03586 3.13056L8.58242 2.61167L9.30006 1.93036C10.716 0.586122 12.947 0.649551 14.2851 2.0727C15.6252 3.49792 15.5615 5.74608 14.1435 7.09227L7.75284 13.1594Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </Box>
            </MotionDiv>
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
                  0.50 ETH
                </Text>
              </Box>
            </Flex>
            <Flex mt="0.9rem">
              <Box flex="1">
                <Button
                  px="1.9em"
                  bgColor="transparent"
                  border="1px solid #5142FC"
                  color="white"
                  borderRadius="20px"
                  _hover={{
                    backgroundColor: 'transparent',
                  }}
                >
                  <Image mr="0.3rem" src={PlaceBidImage} alt="placebidimage" />
                  Place Bid
                </Button>
              </Box>
              <Box flex="1">
                <Button
                  px="1.9em"
                  bgColor="transparent"
                  color="white"
                  borderRadius="20px"
                  _hover={{
                    backgroundColor: 'transparent',
                  }}
                >
                  <Image mr="0.3rem" src={RecycleImage} alt="placebidimage" />
                  View History
                </Button>
              </Box>
            </Flex>
          </GridItem>
          <GridItem p="0.9em" bgColor="#343444" borderRadius="20px">
            <MotionDiv position="relative">
              <Image w="100%" maxW="500px" src={ThugImage} />
              <Box
                as={motion.div}
                bgColor="black"
                p="0.7em"
                borderRadius="12px"
                position="absolute"
                top="10px"
                right="11px"
                onClick={changeColor6}
                whileTap={{ scale: 1.9, transition: { duration: 1 } }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 15"
                  fill={blankColor6 ? '#FF0000' : null}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.75284 13.1594L1.71486 6.7376C0.374826 5.31239 0.438543 3.06423 1.85651 1.71804C3.27243 0.373798 5.50351 0.437227 6.8416 1.86038L7.51962 2.58151L8.03586 3.13056L8.58242 2.61167L9.30006 1.93036C10.716 0.586122 12.947 0.649551 14.2851 2.0727C15.6252 3.49792 15.5615 5.74608 14.1435 7.09227L7.75284 13.1594Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </Box>
            </MotionDiv>
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
                  0.50 ETH
                </Text>
              </Box>
            </Flex>
            <Flex mt="0.9rem">
              <Box flex="1">
                <Button
                  px="1.9em"
                  bgColor="transparent"
                  border="1px solid #5142FC"
                  color="white"
                  borderRadius="20px"
                  _hover={{
                    backgroundColor: 'transparent',
                  }}
                >
                  <Image mr="0.3rem" src={PlaceBidImage} alt="placebidimage" />
                  Place Bid
                </Button>
              </Box>
              <Box flex="1">
                <Button
                  px="1.9em"
                  bgColor="transparent"
                  color="white"
                  borderRadius="20px"
                  _hover={{
                    backgroundColor: 'transparent',
                  }}
                >
                  <Image mr="0.3rem" src={RecycleImage} alt="placebidimage" />
                  View History
                </Button>
              </Box>
            </Flex>
          </GridItem>
          <GridItem p="0.9em" bgColor="#343444" borderRadius="20px">
            <MotionDiv position="relative">
              <Image w="100%" maxW="500px" src={ThugImage} />
              <Box
                as={motion.div}
                bgColor="black"
                p="0.7em"
                borderRadius="12px"
                position="absolute"
                top="10px"
                whileTap={{ scale: 1.9, transition: { duration: 1 } }}
                right="11px"
                onClick={changeColor7}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 15"
                  fill={blankColor7 ? '#FF0000' : null}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.75284 13.1594L1.71486 6.7376C0.374826 5.31239 0.438543 3.06423 1.85651 1.71804C3.27243 0.373798 5.50351 0.437227 6.8416 1.86038L7.51962 2.58151L8.03586 3.13056L8.58242 2.61167L9.30006 1.93036C10.716 0.586122 12.947 0.649551 14.2851 2.0727C15.6252 3.49792 15.5615 5.74608 14.1435 7.09227L7.75284 13.1594Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </Box>
            </MotionDiv>
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
            <Flex mt="0.9rem">
              <Box flex="1">
                <Button
                  px="1.9em"
                  bgColor="transparent"
                  border="1px solid #5142FC"
                  color="white"
                  borderRadius="20px"
                  _hover={{
                    backgroundColor: 'transparent',
                  }}
                >
                  <Image mr="0.3rem" src={PlaceBidImage} alt="placebidimage" />
                  Place Bid
                </Button>
              </Box>
              <Box flex="1">
                <Button
                  px="1.9em"
                  bgColor="transparent"
                  color="white"
                  borderRadius="20px"
                  _hover={{
                    backgroundColor: 'transparent',
                  }}
                >
                  <Image mr="0.3rem" src={RecycleImage} alt="placebidimage" />
                  View History
                </Button>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
};

export default TodaysPicks;
