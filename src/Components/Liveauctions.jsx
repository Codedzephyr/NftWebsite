import React from 'react';
import { Text } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

const Liveauctions = () => {
  return (
    <Box w="90%" maxW="1600px" margin="0 auto" my="2rem" h="400px">
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
        Live Auctions
      </Text>
    </Box>
  );
};

export default Liveauctions;
