import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { ListItem, UnorderedList } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import NavbarImage from '../Vector.png';
import WalletImage from '../Images/Wallet.png';

const svgVariants = {
  start: {
    opacity: 0,
    pathLength: 0,
    rotate: -180,
  },
  finished: {
    rotate: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};


// const closeVariants = {
//   start: {
//     opacity: 0,
//   },
//   finished: {
//     opacity: 1,
//     transition: {
//       duration: 2,
//       ease: 'linear',
//     },
//   },
// };

const Headers = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const [isHamburgerDisplay, setHamburgerDisplay] = useState(true);
  const [isCloseDisplay, setCloseDisplay] = useState(false);
  // const { isOpen, onToggle } = useDisclosure();

  const handleClickShow = () => {
    setIsDisplay(!isDisplay);
    setCloseDisplay(!isCloseDisplay);
    setHamburgerDisplay(!isHamburgerDisplay);
  };

  const handleClickShow1 = () => {
    setHamburgerDisplay(!isHamburgerDisplay);
    setIsDisplay(!isDisplay);
    setCloseDisplay(!isCloseDisplay);
  };

  return (
    <Flex w="100%">
      <Flex
        w="90%"
        maxW="1600px"
        margin="0 auto"
        my="1rem"
        justifyContent="space-between"
        flexDirection={{
          base: 'column',
          sm: 'column',
          md: 'column',
          lg: 'column',
          xl: 'row',
        }}
      >
        <Flex flex="1">
          <Flex
            flex={{
              sm: '1',
              md: '1',
              lg: 'none',
              xl: 'none',
            }}
          >
            <Box my="2rem">
              <Image src={NavbarImage}></Image>
            </Box>
            <Box my="1.6rem" ml="0.7rem">
              <Text
                fontFamily="'Rubik', sans-serif"
                fontWeight="700"
                fontSize="36px"
                lineHeight="56px"
                color="white"
              >
                Pulse
              </Text>
            </Box>
          </Flex>
          <Box
            flex="1"
            my="2rem"
            display={{
              sm: 'block',
              md: 'block',
              lg: 'block',
              xl: 'none',
            }}
          >
            <Box onClick={handleClickShow}>
              {isHamburgerDisplay ? (
                <Box
                  flex="1"
                  display="flex"
                  justifyContent="flex-end"
                  cursor="pointer"
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    // variants={svgVariants}
                    // initial="start"
                    // animate="finished"
                    viewBox="0 0 448 512"
                    width="35"
                    height="35"
                  >
                    <motion.path
                      fill="#fff"
                      variants={svgVariants}
                      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                      initial="start"
                      animate="finished"
                    />
                  </motion.svg>
                </Box>
              ) : (
                <Box></Box>
              )}
              {isCloseDisplay ? (
                <Box
                  flex="1"
                  as={motion.div}
                  onClick={handleClickShow1}
                  display="flex"
                  justifyContent="flex-end"
                  initial="start"
                  animate="finished"
                  cursor="pointer"
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 512 512"
                  >
                    <motion.path
                      variants={svgVariants}
                      fill="#fff"
                      d="M437.5 386.6L306.9 256l130.6-130.6c14.1-14.1 14.1-36.8 0-50.9-14.1-14.1-36.8-14.1-50.9 0L256 205.1 125.4 74.5c-14.1-14.1-36.8-14.1-50.9 0-14.1 14.1-14.1 36.8 0 50.9L205.1 256 74.5 386.6c-14.1 14.1-14.1 36.8 0 50.9 14.1 14.1 36.8 14.1 50.9 0L256 306.9l130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z"
                    />
                  </motion.svg>
                </Box>
              ) : (
                <Box></Box>
              )}
            </Box>
          </Box>
        </Flex>
        {/* tablet */}
        <Flex
          flex="4"
          display={{
            base: 'none',
            sm: 'none',
            md: 'none',
            lg: 'none',
            xl: 'block',
          }}
          flexDirection={{
            base: 'column',
            sm: 'column',
            md: 'column',
            lg: 'column',
            xl: 'row',
          }}
        >
          <Flex>
            <Flex flex="2">
              <UnorderedList
                listStyleType="none"
                display="flex"
                flexDirection={{
                  base: 'column',
                  sm: 'column',
                  md: 'column',
                  lg: 'row',
                  xl: 'row',
                }}
                width="100%"
                my="1.6rem"
                justifyContent="space-between"
              >
                <ListItem
                  fontFamily="'Rubik', sans-serif"
                  fontWeight="700"
                  fontSize="clamp(1.25rem,50vw,1.6rem)"
                  lineHeight="56px"
                  color="white"
                >
                  Explore
                </ListItem>
                <ListItem
                  fontFamily="'Rubik', sans-serif"
                  fontWeight="700"
                  fontSize="clamp(1.25rem,50vw,1.6rem)"
                  lineHeight="56px"
                  color="white"
                >
                  Marketplace
                </ListItem>
                <ListItem
                  fontFamily="'Rubik', sans-serif"
                  fontWeight="700"
                  fontSize="clamp(1.5rem,50vw,1.6rem)"
                  lineHeight="56px"
                  color="white"
                >
                  Artists
                </ListItem>
                <ListItem
                  fontFamily="'Rubik', sans-serif"
                  fontWeight="700"
                  fontSize="clamp(1.5rem,50vw,1.6rem)"
                  lineHeight="56px"
                  color="white"
                >
                  Collection
                </ListItem>
              </UnorderedList>
            </Flex>
            <Flex
              flex="1"
              justifyContent={{
                sm: 'center',
                md: 'center',
                lg: 'center',
                xl: 'flex-end',
              }}
            >
              <Flex w="80%" py="1.8em">
                <SearchIcon mr="1.0rem" w={6} h={6} color="white" my="1rem" />
                <Button
                  width="100%"
                  cursor="pointer"
                  size="lg"
                  border="1px"
                  borderColor="#5142FC"
                  bgColor="#14141F"
                  _hover={{
                    backgroundImage: 'linear-gradient(#E250E5,#4B50E6)',
                  }}
                  margin="0 auto"
                  type="tel"
                  color="white"
                  py="1.5em"
                  px="3.4em"
                >
                  <Image mr="1.0rem" src={WalletImage} />
                  Wallet Connect
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        {isDisplay ? (
          <Box>
            <Flex
              flex="4"
              display={{
                base: 'block',
                sm: 'block',
                md: 'block',
                lg: 'block',
                xl: 'none',
              }}
              id="batman"
              flexDirection={{
                base: 'column',
                sm: 'column',
                md: 'column',
                lg: 'column',
                xl: 'row',
              }}
            >
              <Flex flex="2">
                <UnorderedList
                  listStyleType="none"
                  display="flex"
                  flexDirection={{
                    base: 'column',
                    sm: 'column',
                    md: 'column',
                    lg: 'column',
                    xl: 'row',
                  }}
                  width="100%"
                  my={{
                    base: '0',
                    sm: '0',
                    md: '0',
                    lg: '0',
                    xl: '1.6rem',
                  }}
                  justifyContent="space-between"
                >
                  <ListItem
                    fontFamily="'Rubik', sans-serif"
                    fontWeight="700"
                    fontSize="clamp(1.25rem,50vw,1.6rem)"
                    lineHeight="56px"
                    color="white"
                  >
                    Explore
                  </ListItem>
                  <ListItem
                    fontFamily="'Rubik', sans-serif"
                    fontWeight="700"
                    fontSize="clamp(1.25rem,50vw,1.6rem)"
                    lineHeight="56px"
                    color="white"
                  >
                    Marketplace
                  </ListItem>
                  <ListItem
                    fontFamily="'Rubik', sans-serif"
                    fontWeight="700"
                    fontSize="clamp(1.5rem,50vw,1.6rem)"
                    lineHeight="56px"
                    color="white"
                  >
                    Artists
                  </ListItem>
                  <ListItem
                    fontFamily="'Rubik', sans-serif"
                    fontWeight="700"
                    fontSize="clamp(1.5rem,50vw,1.6rem)"
                    lineHeight="56px"
                    color="white"
                  >
                    Collection
                  </ListItem>
                </UnorderedList>
              </Flex>
              <Flex
                flex="1"
                justifyContent={{
                  sm: 'center',
                  md: 'center',
                  lg: 'center',
                  xl: 'flex-end',
                }}
              >
                <Flex w="80%" py="1.8em">
                  <SearchIcon mr="1.0rem" w={6} h={6} color="white" my="1rem" />
                  <Button
                    width="100%"
                    cursor="pointer"
                    size="lg"
                    border="1px"
                    borderColor="#5142FC"
                    bgColor="#14141F"
                    _hover={{
                      backgroundImage: 'linear-gradient(#E250E5,#4B50E6)',
                    }}
                    margin="0 auto"
                    type="tel"
                    color="white"
                    py="1.5em"
                    px="3.4em"
                  >
                    <Image mr="1.0rem" src={WalletImage} />
                    Wallet Connect
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        ) : (
          <Box></Box>
        )}
      </Flex>
    </Flex>
  );
};

export default Headers;
