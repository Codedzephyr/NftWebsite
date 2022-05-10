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
  },
  finished: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'linear',
    },
  },
};

const closeVariants = {
  start: {
    opacity: 0,
  },
  finished: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: 'linear',
    },
  },
};

const Headers = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const [isHamburgerDisplay, setHamburgerDisplay] = useState(true);
  const [isCloseDisplay, setCloseDisplay] = useState(false);

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
          lg: 'row',
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
              lg: 'none',
              xl: 'none',
            }}
          >
            <Box onClick={handleClickShow}>
              {isHamburgerDisplay ? (
                <Box flex="1" display="flex" justifyContent="flex-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="50"
                    height="50"
                  >
                    <motion.path
                      fill="#fff"
                      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                      variants={svgVariants}
                      initial="start"
                      animate="finished"
                    />
                  </svg>
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
                  variants={closeVariants}
                  initial="start"
                  animate="finished"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="53.7"
                    height="53.7"
                    viewBox="0 0 53.7 53.7"
                  >
                    <path
                      fill="#fff"
                      d="M35.6 34.4L28 26.8l7.6-7.6c.2-.2.2-.5 0-.7l-.5-.5c-.2-.2-.5-.2-.7 0l-7.6 7.6-7.5-7.6c-.2-.2-.5-.2-.7 0l-.6.6c-.2.2-.2.5 0 .7l7.6 7.6-7.6 7.5c-.2.2-.2.5 0 .7l.5.5c.2.2.5.2.7 0l7.6-7.6 7.6 7.6c.2.2.5.2.7 0l.5-.5c.2-.2.2-.5 0-.7z"
                    />
                  </svg>
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
            lg: 'block',
            xl: 'block',
          }}
          flexDirection={{
            base: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
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
          <Flex
            flex="4"
            display={{
              base: 'block',
              sm: 'block',
              md: 'block',
              lg: 'none',
              xl: 'none',
            }}
            id="batman"
            flexDirection={{
              base: 'column',
              sm: 'column',
              md: 'column',
              lg: 'row',
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
                  lg: 'row',
                  xl: 'row',
                }}
                width="100%"
                my={{
                  base: '0',
                  sm: '0',
                  md: '0',
                  lg: '1.6rem',
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
        ) : (
          <Box></Box>
        )}
      </Flex>
    </Flex>
  );
};

export default Headers;
