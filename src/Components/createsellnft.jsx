import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import walletimage from '../Images/Wallet.png';
import collectionimage from '../Images/collection.png';
import nftimage from '../Images/nft.png';
import saleimage from '../Images/sale.png';

const createsellnft = () => {
  return (
    <Box w="100%">
      <Box w="92%" maxW="1600px" margin="0 auto">
        <Box>
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
            fontSize="clamp(1.5rem,10vw,2.25rem)"
            lineHeight="44px"
            textAlign={{
              base: 'center',
              sm: 'center',
              md: 'center',
              lg: 'left',
              xl: 'left',
            }}
          >
            Create and sell your NFTs
          </Text>
        </Box>
      </Box>
      <Box>
        <Flex mt="2rem" mb="4rem" justifyContent="center" alignItems="center">
          <Flex
            w="95%"
            flexWrap="wrap"
            maxW="1600px"
            gap={6}
            justifyContent="center"
            alignItems="center"
          >
            <Box maxW="350px" w="90%">
              <Flex
                justifyContent={{
                  base: 'center',
                  sm: 'center',
                  md: 'center',
                  lg: 'flex-start',
                  xl: 'flex-start',
                }}
                alignContent={{
                  base: 'center',
                  sm: 'center',
                  md: 'center',
                  lg: 'flex-start',
                  xl: 'flex-start',
                }}
              >
                <Image src={walletimage} alt="wallet" />
              </Flex>
              <Text
                my="1.0rem"
                fontSize="clamp(1.5rem,5vw,1.7rem)"
                lineHeight="30px"
                color="white"
                fontFamily="'Urbanist', sans-serif"
                fontWeight="700"
                textAlign={{
                  base: 'center',
                  sm: 'center',
                  md: 'center',
                  lg: 'initial',
                  xl: 'initial',
                }}
              >
                Set up your wallet
              </Text>
              <Text
                lineHeight="22px"
                my="1.0rem"
                fontSize="0.875rem"
                color="white"
                fontFamily="'Urbanist', sans-serif"
                fontWeight="400"
                textAlign={{
                  base: 'center',
                  sm: 'center',
                  md: 'center',
                  lg: 'initial',
                  xl: 'initial',
                }}
              >
                Wallet that is functional for NFT purchasing. You may have a
                Coinbase account at this point, but very few are actually set up
                to buy an NFT.
              </Text>
            </Box>
            <Box maxW="350px" w="90%">
              <Flex
                justifyContent={{
                  base: 'center',
                  sm: 'center',
                  md: 'center',
                  lg: 'flex-start',
                  xl: 'flex-start',
                }}
                alignContent={{
                  base: 'center',
                  sm: 'center',
                  md: 'center',
                  lg: 'flex-start',
                  xl: 'flex-start',
                }}
              >
                <Image src={collectionimage} alt="wallet" />
              </Flex>
              <Text
                my="1.0rem"
                fontSize="clamp(1.5rem,5vw,1.7rem)"
                lineHeight="30px"
                color="white"
                fontFamily="'Urbanist', sans-serif"
                fontWeight="700"
                textAlign={{
                  base: 'center',
                  sm: 'center',
                  md: 'center',
                  lg: 'initial',
                  xl: 'initial',
                }}
              >
                Create your collection
              </Text>
              <Text
                lineHeight="22px"
                my="1.0rem"
                fontSize="0.875rem"
                color="white"
                fontFamily="'Urbanist', sans-serif"
                fontWeight="400"
                textAlign={{
                  base: 'center',
                  sm: 'center',
                  md: 'center',
                  lg: 'initial',
                  xl: 'initial',
                }}
              >
                Setting up your NFT collection and creating NFTs on NFTs is
                easy! This guide explains how to set up your first collection
              </Text>
            </Box>
            <Box maxW="350px" w="90%">
              <Flex
                justifyContent={{
                  base: 'center',
                  sm: 'center',
                  md: 'center',
                  lg: 'flex-start',
                  xl: 'flex-start',
                }}
                alignContent={{
                  base: 'center',
                  sm: 'center',
                  md: 'center',
                  lg: 'flex-start',
                  xl: 'flex-start',
                }}
              >
                <Image src={nftimage} alt="wallet" />
              </Flex>
              <Text
                my="1.0rem"
                fontSize="clamp(1.5rem,5vw,1.7rem)"
                lineHeight="30px"
                color="white"
                fontFamily="'Urbanist', sans-serif"
                fontWeight="700"
                textAlign={{
                  base: 'center',
                  sm: 'center',
                  md: 'center',
                  lg: 'initial',
                  xl: 'initial',
                }}
              >
                Add your NFTs
              </Text>
              <Text
                lineHeight="22px"
                my="1.0rem"
                fontSize="0.875rem"
                color="white"
                fontFamily="'Urbanist', sans-serif"
                fontWeight="400"
                textAlign={{
                  base: 'center',
                  sm: 'center',
                  md: 'center',
                  lg: 'initial',
                  xl: 'initial',
                }}
              >
                Setting up your NFT collection and creating NFTs on NFTs is
                easy! This guide explains how to set up your first collection
              </Text>
            </Box>
            <Box maxW="350px" w="90%">
              <Flex
                justifyContent={{
                  base: 'center',
                  sm: 'center',
                  md: 'center',
                  lg: 'flex-start',
                  xl: 'flex-start',
                }}
                alignContent={{
                  base: 'center',
                  sm: 'center',
                  md: 'center',
                  lg: 'flex-start',
                  xl: 'flex-start',
                }}
              >
                <Image src={saleimage} alt="wallet" />
              </Flex>
              <Text
                my="1.0rem"
                fontSize="clamp(1.5rem,5vw,1.7rem)"
                lineHeight="30px"
                color="white"
                fontFamily="'Urbanist', sans-serif"
                fontWeight="700"
                textAlign={{
                  base: 'center',
                  sm: 'center',
                  md: 'center',
                  lg: 'initial',
                  xl: 'initial',
                }}
              >
                List them for sale
              </Text>
              <Text
                lineHeight="22px"
                my="1.0rem"
                fontSize="0.875rem"
                color="white"
                fontFamily="'Urbanist', sans-serif"
                fontWeight="400"
                textAlign={{
                  base: 'center',
                  sm: 'center',
                  md: 'center',
                  lg: 'initial',
                  xl: 'initial',
                }}
              >
                Choose between auctions, fixed-price listings, and
                declining-price listings. You choose how you want to sell your
                NFTs!
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default createsellnft;
