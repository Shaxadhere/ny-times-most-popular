import React from "react";
import
  {
    Box,
    Heading,
    Text,
    Badge,
    Image,
    Divider,
    VStack,
    Link, Wrap,
    WrapItem
  } from "@chakra-ui/react";
import { useArticleDetailsData } from "./ArticleDetailContainer";

const ArticleDetails = () => {
  const {
    title,
    byline,
    published_date,
    abstract,
    media,
    url,
    section,
    adx_keywords,
  } = useArticleDetailsData()

  return (
    <Box
      maxW="800px"
      mx="auto"
      mt={8}
      p={6}
      borderWidth="1px"
      borderRadius="lg"
    >
      <Heading as="h1" size="xl" mb={4}>
        {title}
      </Heading>

      <Text fontSize="sm" color="gray.600" mb={2}>
        By {byline} | {new Date(published_date).toLocaleDateString()}
      </Text>

      <Wrap mb={4}>
        <WrapItem>
          <Badge colorScheme="teal" mr={2}>
            {section}
          </Badge>
        </WrapItem>
        {adx_keywords.split(";").map((keyword, index) => (
          <WrapItem key={index}>
            <Badge  colorScheme="blue" mr={2}>
              {keyword}
            </Badge>
          </WrapItem>
        ))}
      </Wrap>

      <Divider mb={4} />

      <Text fontSize="lg" mb={4}>
        {abstract}
      </Text>

      {media && media.length > 0 && (
        <VStack spacing={4} align="stretch">
          {media.map((item, index) => (
            <Image
              key={index}
              src={item["media-metadata"][2].url}
              alt={`Image ${index}`}
            />
          ))}
        </VStack>
      )}

      <Box mt={4}>
        <Link href={url} color="teal.500" isExternal>
          Read full article on New York Times
        </Link>
      </Box>
    </Box>
  );
};

export default ArticleDetails;
