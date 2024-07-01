import React from "react";
import ArticleCard from "../../components/data/ArticleCard";
import { SimpleGrid } from "@chakra-ui/react";
import HomePageLoader from "../../components/Loaders/HomePageLoader";
import { useHomeData } from "./HomeContainer";

const Home = () => {
  const {
    articles,
    isLoading
  } = useHomeData();

  if(isLoading) {
    return <HomePageLoader/>
  }

  return (
    <SimpleGrid columns={{base:1,md:2,lg:4}} spacing={5}>
      {articles?.results?.map((item) => (
        <ArticleCard
          title={item.title}
          author={item.byline}
          date={item.updated}
          description={item.abstract}
          key={item.uri}
          article={item}
        />
      ))}
    </SimpleGrid>
  );
};

export default Home;
