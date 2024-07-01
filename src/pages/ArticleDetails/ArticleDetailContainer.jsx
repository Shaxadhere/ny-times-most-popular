import { useLocation } from "react-router-dom";

export const useArticleDetailsData = () => {
  const { state } = useLocation();
  const {
    title,
    byline,
    published_date,
    abstract,
    media,
    url,
    section,
    adx_keywords,
  } = state;

  return {
    title,
    byline,
    published_date,
    abstract,
    media,
    url,
    section,
    adx_keywords,
  }
}