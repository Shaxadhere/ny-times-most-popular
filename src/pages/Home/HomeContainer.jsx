import { useMostPopular } from "../../services/articleService";

export const useHomeData = () => {
  const { data: articles, isLoading } = useMostPopular();

  return {
    articles,
    isLoading
  }
}