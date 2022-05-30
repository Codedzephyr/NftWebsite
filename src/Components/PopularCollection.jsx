import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import BlackDanish from '../Images/SecondSlideshow/BlackDanish.png';
import ArrowLearnImage from '../Images/Arrow_1.png';
import { Flex } from '@chakra-ui/react';
import GorillaImage from '../Images/3DGorillaglasses.png';
import SamuraiImage from '../Images/Samurai.png';
import WhiteGorillaImage from '../Images/WhiteGorilla.png';
import BlackGorillaImage from '../Images/BlackGorilla.png';
import { motion } from 'framer-motion';

const MotionDiv = motion(Box);

const PopularCollection = () => {
  const [blankColor, setBlankColorToColor] = useState(false);

  const changeColor = () => {
    setBlankColorToColor(!blankColor);
  };
  return (
    <Box w="100%">
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
            Popular Collection
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
      <Flex my="2rem" justifyContent="center" alignItems="center">
        <Flex
          w="95%"
          flexWrap="wrap"
          maxW="1600px"
          gap={6}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            maxW=" 485px"
            w="95%"
            p="0.9em"
            bgColor="#343444"
            borderRadius="20px"
          >
            <Flex my="0.3em">
              <Flex flex="3">
                <Box flex="1">
                  <Image src={BlackDanish} borderRadius="20px" />
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
                    Bored ape Collection
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
                    Created by Osysy Pulse
                  </Text>
                </Box>
              </Flex>
              <Box flex="1">
                <MotionDiv width="45px">
                  <Box
                    as={motion.div}
                    bgColor="black"
                    p="0.7em"
                    borderRadius="12px"
                    onClick={changeColor}
                    whileTap={{ scale: 1.9, transition: { duration: 1 } }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 16 15"
                      fill={blankColor ? '#FF0000' : null}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.75284 13.1594L1.71486 6.7376C0.374826 5.31239 0.438543 3.06423 1.85651 1.71804C3.27243 0.373798 5.50351 0.437227 6.8416 1.86038L7.51962 2.58151L8.03586 3.13056L8.58242 2.61167L9.30006 1.93036C10.716 0.586122 12.947 0.649551 14.2851 2.0727C15.6252 3.49792 15.5615 5.74608 14.1435 7.09227L7.75284 13.1594Z"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Box>
                </MotionDiv>
              </Box>
            </Flex>
            {/* image part for flex */}
            <Flex gap={3} mt="0.8rem">
              <Box flex="1">
                <Image
                  src={SamuraiImage}
                  alt="samurai"
                  borderRadius="20px"
                  boxSize="340px"
                  objectFit="cover"
                />
              </Box>
              <Box flex="1">
                <Flex flex="1" flexDirection="row" gap={2}>
                  <Box flex="1">
                    <Image
                      src={BlackGorillaImage}
                      alt="gorilla"
                      borderRadius="20px"
                    />
                  </Box>
                  <Box flex="1">
                    <Image
                      src={WhiteGorillaImage}
                      alt="gorilla"
                      borderRadius="20px"
                    />
                  </Box>
                </Flex>
                <Box flex="1" mt="0.5rem">
                  <Image
                    src={GorillaImage}
                    boxSize={{
                      base: '250px',
                      sm: '220px',
                      md: '220px',
                      lg: '220px',
                      xl: '220px',
                    }}
                    objectFit="cover"
                    alt="gorilla"
                    borderRadius="20px"
                  />
                </Box>
              </Box>
            </Flex>
          </Box>
          <Box
            maxW=" 485px"
            w="95%"
            p="0.9em"
            bgColor="#343444"
            borderRadius="20px"
          >
            <Flex my="0.3em">
              <Flex flex="3">
                <Box flex="1">
                  <Image src={BlackDanish} borderRadius="20px" />
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
                    Bored ape Collection
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
                    Created by Osysy Pulse
                  </Text>
                </Box>
              </Flex>
              <Box flex="1">
                <MotionDiv width="45px">
                  <Box
                    as={motion.div}
                    bgColor="black"
                    p="0.7em"
                    borderRadius="12px"
                    onClick={changeColor}
                    whileTap={{ scale: 1.9, transition: { duration: 1 } }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 16 15"
                      fill={blankColor ? '#FF0000' : null}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.75284 13.1594L1.71486 6.7376C0.374826 5.31239 0.438543 3.06423 1.85651 1.71804C3.27243 0.373798 5.50351 0.437227 6.8416 1.86038L7.51962 2.58151L8.03586 3.13056L8.58242 2.61167L9.30006 1.93036C10.716 0.586122 12.947 0.649551 14.2851 2.0727C15.6252 3.49792 15.5615 5.74608 14.1435 7.09227L7.75284 13.1594Z"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Box>
                </MotionDiv>
              </Box>
            </Flex>
            {/* image part for flex */}
            <Flex gap={3} mt="0.8rem">
              <Box flex="1">
                <Image
                  src={SamuraiImage}
                  alt="samurai"
                  borderRadius="20px"
                  boxSize="340px"
                  objectFit="cover"
                />
              </Box>
              <Box flex="1">
                <Flex flex="1" flexDirection="row" gap={2}>
                  <Box flex="1">
                    <Image
                      src={BlackGorillaImage}
                      alt="gorilla"
                      borderRadius="20px"
                    />
                  </Box>
                  <Box flex="1">
                    <Image
                      src={WhiteGorillaImage}
                      alt="gorilla"
                      borderRadius="20px"
                    />
                  </Box>
                </Flex>
                <Box flex="1" mt="0.5rem">
                  <Image
                    src={GorillaImage}
                    boxSize={{
                      base: '250px',
                      sm: '220px',
                      md: '220px',
                      lg: '220px',
                      xl: '220px',
                    }}
                    objectFit="cover"
                    alt="gorilla"
                    borderRadius="20px"
                  />
                </Box>
              </Box>
            </Flex>
          </Box>
          <Box
            maxW=" 485px"
            w="95%"
            p="0.9em"
            bgColor="#343444"
            borderRadius="20px"
          >
            <Flex my="0.3em">
              <Flex flex="3">
                <Box flex="1">
                  <Image src={BlackDanish} borderRadius="20px" />
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
                    Bored ape Collection
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
                    Created by Osysy Pulse
                  </Text>
                </Box>
              </Flex>
              <Box flex="1">
                <MotionDiv width="45px">
                  <Box
                    as={motion.div}
                    bgColor="black"
                    p="0.7em"
                    borderRadius="12px"
                    onClick={changeColor}
                    whileTap={{ scale: 1.9, transition: { duration: 1 } }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 16 15"
                      fill={blankColor ? '#FF0000' : null}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.75284 13.1594L1.71486 6.7376C0.374826 5.31239 0.438543 3.06423 1.85651 1.71804C3.27243 0.373798 5.50351 0.437227 6.8416 1.86038L7.51962 2.58151L8.03586 3.13056L8.58242 2.61167L9.30006 1.93036C10.716 0.586122 12.947 0.649551 14.2851 2.0727C15.6252 3.49792 15.5615 5.74608 14.1435 7.09227L7.75284 13.1594Z"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Box>
                </MotionDiv>
              </Box>
            </Flex>
            {/* image part for flex */}
            <Flex gap={3} mt="0.8rem">
              <Box flex="1">
                <Image
                  src={SamuraiImage}
                  alt="samurai"
                  borderRadius="20px"
                  boxSize="340px"
                  objectFit="cover"
                />
              </Box>
              <Box flex="1">
                <Flex flex="1" flexDirection="row" gap={2}>
                  <Box flex="1">
                    <Image
                      src={BlackGorillaImage}
                      alt="gorilla"
                      borderRadius="20px"
                    />
                  </Box>
                  <Box flex="1">
                    <Image
                      src={WhiteGorillaImage}
                      alt="gorilla"
                      borderRadius="20px"
                    />
                  </Box>
                </Flex>
                <Box flex="1" mt="0.5rem">
                  <Image
                    src={GorillaImage}
                    boxSize={{
                      base: '250px',
                      sm: '220px',
                      md: '220px',
                      lg: '220px',
                      xl: '220px',
                    }}
                    objectFit="cover"
                    alt="gorilla"
                    borderRadius="20px"
                  />
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default PopularCollection;
