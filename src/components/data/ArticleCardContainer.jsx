import { useNavigate } from "react-router-dom";

export const useArticleCard = ({article}) => {
  const navigate = useNavigate();

  //unable to find article details api so using
  //onclick and sending state to the next page
  const onClick = () => {
    navigate(`/${article?.title}`, { state: article });
  };

  return {
    onClick
  }
}