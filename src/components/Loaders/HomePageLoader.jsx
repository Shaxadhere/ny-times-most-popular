import { Box, SimpleGrid, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const HomePageLoader = () => {
  return (
    <SimpleGrid mt={10} columns={{ base: 1, md: 2, lg: 4 }} spacing={5}>
      {new Array(12).fill(null).map((item, index) => (
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={6}
          m={4}
          key={index}
        >
          <Skeleton w="full" h="40px" />
          <Skeleton mt="2" w="200px" h="20px" />
          <SkeletonText mt={2} noOfLines={4} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default HomePageLoader;
