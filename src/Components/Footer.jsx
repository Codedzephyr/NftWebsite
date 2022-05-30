import React from 'react';
import { Box } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import FacebookImage from '../Images/facebook.png';
import GoogleImage from '../Images/google.png';
import TwitchImage from '../Images/twitch.png';
import TwitterImage from '../Images/twitter.png';
import { HStack } from '@chakra-ui/react';
import NavbarImage from '../Vector.png';
import { UnorderedList, ListItem } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box w="100%" bgColor="#0D0D11" pt="3rem">
      <Box w="98%" maxW="1600px" m="0 auto">
        <Flex justifyContent="center" alignItems="center">
          <Flex
            gap={6}
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            maxW="1600px"
            w="98%"
          >
            <Box maxW=" 250px" w="100%">
              <Flex>
                <Box>
                  <Image src={NavbarImage}></Image>
                </Box>
                <Box  ml="0.7rem">
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
              <Text
                my="0.5rem"
                fontFamily="'Urbanist', sans-serif"
                fontWeight="400"
                fontSize="14px"
                fill="white"
                lineHeight="22px"
                color="white"
              >
                Discover, collect
              </Text>
              <HStack my="3rem" spacing="15px">
                <Box>
                  <Image src={FacebookImage} alt="facebook" />
                </Box>
                <Box>
                  <Image src={TwitterImage} alt="twitter" />
                </Box>
                <Box>
                  <Image src={GoogleImage} alt="google" />
                </Box>
                <Box>
                  <Image src={TwitchImage} alt="twitter" />
                </Box>
              </HStack>
            </Box>
            <Box maxW=" 250px" w="100%">
              <Text
                fontWeight="700"
                fontSize="2.125rem"
                lineHeight="26px"
                fontFamily="'Urbanist', sans-serif"
                color="white"
              >
                My Account
              </Text>
              <UnorderedList
                my="2rem"
                listStyleType="none"
                marginInlineStart="0"
              >
                <ListItem
                  fontWeight="400"
                  fontSize="0.875rem"
                  lineHeight="22px"
                  fontFamily="'Urbanist', sans-serif"
                  color="white"
                  mb="0.5rem"
                >
                  Authors
                </ListItem>
                <ListItem
                  fontWeight="400"
                  fontSize="0.875rem"
                  lineHeight="22px"
                  fontFamily="'Urbanist', sans-serif"
                  color="#FFFFFF"
                  mb="0.5rem"
                  fontStyle="regular"
                >
                  Collection
                </ListItem>
                <ListItem
                  fontWeight="400"
                  fontSize="0.875rem"
                  lineHeight="22px"
                  fontFamily="'Urbanist', sans-serif"
                  color="white"
                  mb="0.5rem"
                >
                  Author Profile
                </ListItem>
                <ListItem
                  fontWeight="400"
                  fontSize="0.875rem"
                  lineHeight="22px"
                  fontFamily="'Urbanist', sans-serif"
                  color="white"
                  mb="0.5rem"
                >
                  Create Collection
                </ListItem>
              </UnorderedList>
            </Box>
            <Box maxW=" 250px" w="100%">
              <Text
                fontWeight="700"
                fontSize="2.125rem"
                lineHeight="26px"
                fontFamily="'Urbanist', sans-serif"
                color="white"
              >
                Resources
              </Text>
              <UnorderedList
                my="2rem"
                listStyleType="none"
                marginInlineStart="0"
              >
                <ListItem
                  fontWeight="400"
                  fontSize="0.875rem"
                  lineHeight="22px"
                  fontFamily="'Urbanist', sans-serif"
                  color="white"
                  mb="0.5rem"
                >
                  Help & Support
                </ListItem>
                <ListItem
                  fontWeight="400"
                  fontSize="0.875rem"
                  lineHeight="22px"
                  fontFamily="'Urbanist', sans-serif"
                  color="#FFFFFF"
                  mb="0.5rem"
                  fontStyle="regular"
                >
                  Live Auctions
                </ListItem>
                <ListItem
                  fontWeight="400"
                  fontSize="0.875rem"
                  lineHeight="22px"
                  fontFamily="'Urbanist', sans-serif"
                  color="white"
                  mb="0.5rem"
                >
                  Item Details
                </ListItem>
                <ListItem
                  fontWeight="400"
                  fontSize="0.875rem"
                  lineHeight="22px"
                  fontFamily="'Urbanist', sans-serif"
                  color="white"
                  mb="0.5rem"
                >
                  Activity
                </ListItem>
              </UnorderedList>
            </Box>
            <Box maxW=" 250px" w="100%">
              <Text
                fontWeight="700"
                fontSize="2.125rem"
                lineHeight="26px"
                fontFamily="'Urbanist', sans-serif"
                color="white"
              >
                Company
              </Text>
              <UnorderedList
                my="2rem"
                listStyleType="none"
                marginInlineStart="0"
              >
                <ListItem
                  fontWeight="400"
                  fontSize="0.875rem"
                  lineHeight="22px"
                  fontFamily="'Urbanist', sans-serif"
                  color="white"
                  mb="0.5rem"
                >
                  About Us
                </ListItem>
                <ListItem
                  fontWeight="400"
                  fontSize="0.875rem"
                  lineHeight="22px"
                  fontFamily="'Urbanist', sans-serif"
                  color="#FFFFFF"
                  mb="0.5rem"
                  fontStyle="regular"
                >
                  Contact Us
                </ListItem>
                <ListItem
                  fontWeight="400"
                  fontSize="0.875rem"
                  lineHeight="22px"
                  fontFamily="'Urbanist', sans-serif"
                  color="white"
                  mb="0.5rem"
                >
                  Our Blog
                </ListItem>
                <ListItem
                  fontWeight="400"
                  fontSize="0.875rem"
                  lineHeight="22px"
                  fontFamily="'Urbanist', sans-serif"
                  color="white"
                  mb="0.5rem"
                >
                  Discover
                </ListItem>
              </UnorderedList>
            </Box>
            <Box maxW=" 250px" w="100%">
              <Text
                fontWeight="700"
                fontSize="2.125rem"
                lineHeight="26px"
                fontFamily="'Urbanist', sans-serif"
                color="white"
              >
                Company
              </Text>
              <UnorderedList
                my="2rem"
                listStyleType="none"
                marginInlineStart="0"
              >
                <ListItem
                  fontWeight="400"
                  fontSize="0.875rem"
                  lineHeight="22px"
                  fontFamily="'Urbanist', sans-serif"
                  color="white"
                  mb="0.5rem"
                >
                  About Us
                </ListItem>
                <ListItem
                  fontWeight="400"
                  fontSize="0.875rem"
                  lineHeight="22px"
                  fontFamily="'Urbanist', sans-serif"
                  color="#FFFFFF"
                  mb="0.5rem"
                  fontStyle="regular"
                >
                  Contact Us
                </ListItem>
                <ListItem
                  fontWeight="400"
                  fontSize="0.875rem"
                  lineHeight="22px"
                  fontFamily="'Urbanist', sans-serif"
                  color="white"
                  mb="0.5rem"
                >
                  Our Blog
                </ListItem>
                <ListItem
                  fontWeight="400"
                  fontSize="0.875rem"
                  lineHeight="22px"
                  fontFamily="'Urbanist', sans-serif"
                  color="white"
                  mb="0.5rem"
                >
                  Discover
                </ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
