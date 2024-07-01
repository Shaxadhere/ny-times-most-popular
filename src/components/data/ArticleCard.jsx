import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useArticleCard } from "./ArticleCardContainer";

const ArticleCard = ({ title, author, date, description, article }) => {
 const {onClick} = useArticleCard({article})
  return (
    <Box
      onClick={onClick}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}
      m={4}
      _hover={{
        bg: "gray.100",
      }}
    >
      <Box>
        <Text fontSize="xl" fontWeight="semibold" mb={2}>
          {title}
        </Text>
        <Text color="gray.600" fontSize="sm">
          {author} | {new Date(date).toLocaleDateString()}
        </Text>
      </Box>

      <Box mt={4}>
        <Text color="gray.700">{description}</Text>
      </Box>
    </Box>
  );
};

export default ArticleCard;
