import { Flex, Box, Heading, Spacer, Button } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
          NY Times Most Popular
        </Heading>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={() => console.log('toggle')}>
        {/* Insert your responsive menu icon/button here */}
        <svg fill="white" width="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path
            fillRule="evenodd"
            d="M3 5h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 5h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 5h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
          />
        </svg>
      </Box>

      <Spacer />
    </Flex>
  );
};

export default Header;