import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import ArrowLearnImage from '../Images/Arrow_1.png';
import { Image } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import MuriImage from '../Images/Muri.png';
import React from 'react';
import ThugImage from '../Images/Thug.png';

const TodaysPicks = () => {
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
            Live Auctions
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
            fon
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
      <Grid
        w="85%"
        m="1rem auto"
        templateColumns={{
          sm: 'repeat(1,1fr)',
          md: 'repeat(3,1fr)',
          lg: 'repeat(3,1fr)',
          xl: 'repeat(3,1fr)',
        }}
        gap={6}
      >
        <GridItem p="0.9em" bgColor="#343444" borderRadius="20px">
          <Box
            bgImg={ThugImage}
            bgSize="cover"
            bgRepeat="no-repeat"
            p="11em"
            borderRadius="20px"
            backgroundBlendMode="multiply"
            _hover={{
              cursor: 'pointer',
              bgColor: 'rgba(0,0,0,0.5)',
            }}
          ></Box>
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
        </GridItem>
        <GridItem p="0.9em" bgColor="#343444" borderRadius="20px">
          <Box
            bgImg={ThugImage}
            bgSize="cover"
            bgRepeat="no-repeat"
            p="11em"
            borderRadius="20px"
            backgroundBlendMode="multiply"
            _hover={{
              cursor: 'pointer',
              bgColor: 'rgba(0,0,0,0.5)',
            }}
          ></Box>
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
        </GridItem>
        <GridItem p="0.9em" bgColor="#343444" borderRadius="20px">
          <Box
            bgImg={ThugImage}
            bgSize="cover"
            bgRepeat="no-repeat"
            p="11em"
            borderRadius="20px"
            backgroundBlendMode="multiply"
            _hover={{
              cursor: 'pointer',
              bgColor: 'rgba(0,0,0,0.5)',
            }}
          ></Box>
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
        </GridItem>
        <GridItem p="0.9em" bgColor="#343444" borderRadius="20px">
          <Box
            bgImg={ThugImage}
            bgSize="cover"
            bgRepeat="no-repeat"
            p="11em"
            borderRadius="20px"
            backgroundBlendMode="multiply"
            _hover={{
              cursor: 'pointer',
              bgColor: 'rgba(0,0,0,0.5)',
            }}
          ></Box>
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
        </GridItem>
        <GridItem p="0.9em" bgColor="#343444" borderRadius="20px">
          <Box
            bgImg={ThugImage}
            bgSize="cover"
            bgRepeat="no-repeat"
            p="11em"
            borderRadius="20px"
            backgroundBlendMode="multiply"
            _hover={{
              cursor: 'pointer',
              bgColor: 'rgba(0,0,0,0.5)',
            }}
          ></Box>
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
        </GridItem>
        <GridItem p="0.9em" bgColor="#343444" borderRadius="20px">
          <Box
            bgImg={ThugImage}
            bgSize="cover"
            bgRepeat="no-repeat"
            p="11em"
            borderRadius="20px"
            backgroundBlendMode="multiply"
            _hover={{
              cursor: 'pointer',
              bgColor: 'rgba(0,0,0,0.5)',
            }}
          ></Box>
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
        </GridItem>
      </Grid>
    </Box>
  );
};

export default TodaysPicks;
