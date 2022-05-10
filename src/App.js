import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Homepage />
      </Box>
    </ChakraProvider>
  );
}

export default App;
