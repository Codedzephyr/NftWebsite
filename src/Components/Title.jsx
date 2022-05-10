import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import VectorBackgroundImage from '../Images/Group_774.png';
import { Button } from '@chakra-ui/react';
import VectorCompassImage from '../Images/VectorCompassButton.png';
import ArrowLearnImage from '../Images/Arrow_1.png';

const Title = () => {
  return (
    <Box w="90%" maxW="1600px" margin="0 auto" my="2rem">
      <Flex
        flexDirection={{
          base: 'column',
          sm: 'column',
          md: 'column',
          lg: 'row',
          xl: 'row',
        }}
      >
        <Box
          flex="1"
          display={{
            base: 'block',
            sm: 'block',
            md: 'block',
            lg: 'none',
            xl: 'none',
          }}
        >
          <Image src={VectorBackgroundImage} />
        </Box>
        <Box flex="1" position="relative">
          <Box
            position="absolute"
            top="71px"
            left="569px"
            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'none',
              xl: 'block',
            }}
          >
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.5042 51.6813C18.7424 51.6737 12.2598 48.99 7.47845 44.2189C2.69713 39.4479 0.00762323 32.9792 0 26.232C0.00762323 19.4848 2.69713 13.0161 7.47845 8.24513C12.2598 3.47412 18.7424 0.790413 25.5042 0.782806C32.266 0.790413 38.7487 3.47412 43.53 8.24513C48.3114 13.0161 51.0008 19.4848 51.0085 26.232C51.0008 32.9792 48.3114 39.4479 43.53 44.2189C38.7487 48.99 32.266 51.6737 25.5042 51.6813ZM25.5042 2.99575C19.3294 3.00146 13.4089 5.45117 9.04198 9.80737C4.67501 14.1636 2.21819 20.0704 2.21056 26.232C2.21819 32.3923 4.67402 38.2982 9.03943 42.6542C13.4048 47.0102 19.3234 49.4607 25.497 49.4683C31.6707 49.4607 37.5892 47.0102 41.9546 42.6542C46.32 38.2982 48.7759 32.3923 48.7835 26.232C48.7759 20.0729 46.321 14.1683 41.9572 9.81246C37.5933 5.45667 31.6766 3.00526 25.5042 2.99575Z"
                fill="#6A1AB7"
              />
            </svg>
          </Box>
          <Text
            color="white"
            fontFamily="'Urbanist', sans-serif"
            fontWeight="700"
            fontSize="clamp(2.75rem,5vw,4.75rem)"
            lineHeight="98px"
            textAlign={{
              base: 'center',
              sm: 'center',
              md: 'center',
              lg: 'left',
              xl: 'left',
            }}
          >
            Discover,Collect
          </Text>
          <Text
            // bgClip="text"
            sx={{
              WebkitTextFillColor: '#14141F',
              background:
                '-webkit-linear-gradient(-86deg,#E250E5 9%, #4B50E6 64%)',
              WebkitBackgroundClip: 'text',
              WebkitTextStroke: '4px transparent',
            }}
            color="#14141F"
            // bgGradient="linear(to-r,#4B50E6,#E250E5)"
            fontFamily="'Urbanist', sans-serif"
            fontWeight="700"
            fontSize="clamp(2.75rem,5vw,4.75rem)"
            lineHeight="98px"
            textAlign={{
              base: 'center',
              sm: 'center',
              md: 'center',
              lg: 'left',
              xl: 'left',
            }}
          >
            Sell extraordinary
          </Text>
          <Text
            color="white"
            fontFamily="'Urbanist', sans-serif"
            fontWeight="700"
            fontSize="clamp(2.75rem,5vw,4.75rem)"
            lineHeight="98px"
            textAlign={{
              base: 'center',
              sm: 'center',
              md: 'center',
              lg: 'left',
              xl: 'left',
            }}
          >
            extraordinary NFTs
          </Text>
          <Text
            color="white"
            fontFamily="'Urbanist', sans-serif"
            fontWeight="400"
            fontSize="clamp(1.3rem,5vw,1.5625rem)"
            lineHeight="30px"
            textAlign={{
              base: 'center',
              sm: 'center',
              md: 'center',
              lg: 'left',
              xl: 'left',
            }}
          >
            Pulse is a decentralized platform that allows users to trade and
            store non-fungible tokens
          </Text>
          <Flex
            width="90%"
            maxW="350px"
            margin={{
              base: '0 auto',
              sm: '0 auto',
              md: '0 auto',
              lg: '0',
              xl: '0',
            }}
            flexDirection={{
              base: 'row',
              sm: 'row',
              md: 'row',
              lg: 'row',
              xl: 'row',
            }}
          >
            <Box flex="1">
              <Button
                cursor="pointer"
                size="lg"
                border="1px"
                borderColor="#5142FC"
                bgColor="#14141F"
                _hover={{
                  backgroundImage: 'linear-gradient(#E250E5,#4B50E6)',
                }}
                color="white"
                my={{
                  base: '1.5rem',
                  sm: '1.5rem',
                  md: '3.5rem',
                  lg: '3.5rem',
                  xl: '3.5rem',
                }}
                textAlign="center"
                px="2.0em"
                py="1.5em"
                // width="154px"
                // height="56px"
              >
                <Image mr="0.5rem" src={VectorCompassImage} />
                Explore
              </Button>
            </Box>

            <Box flex="1">
              <Button
                size="lg"
                border="1px"
                borderColor="#14141F"
                bgColor="#14141F"
                color="white"
                // ml="3rem"
                my={{
                  base: '1.5rem',
                  sm: '1.5rem',
                  md: '3.5rem',
                  lg: '3.5rem',
                  xl: '3.5rem',
                }}
                _hover={{
                  bgColor: '#14141F',
                  borderColor: '#14141F',
                }}
                textAlign="center"
                px={{
                  base: '0.5rem',
                  sm: '0.5rem',
                  md: '1.5rem',
                  lg: '1.5rem',
                  xl: '1.5rem',
                }}
                py="1.5em"
                // width="154px"
                // height="56px"
              >
                Learn More
                <Image ml="0.5rem" src={ArrowLearnImage} />
              </Button>
            </Box>
          </Flex>

          <Box
            position="absolute"
            top="364px"
            left="422px"
            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'none',
              xl: 'block',
            }}
          >
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="11"
                cy="11.5215"
                rx="11"
                ry="10.9903"
                fill="url(#paint0_linear_31_1278)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_31_1278"
                  x1="19.25"
                  y1="0.531188"
                  x2="2.95192"
                  y2="22.5255"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E250E5" />
                  <stop offset="1" stopColor="#4B50E6" />
                </linearGradient>
              </defs>
            </svg>
          </Box>
        </Box>
        <Box
          flex="1"
          display={{
            base: 'none',
            sm: 'none',
            md: 'none',
            lg: 'block',
            xl: 'block',
          }}
        >
          <Image src={VectorBackgroundImage} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Title;
