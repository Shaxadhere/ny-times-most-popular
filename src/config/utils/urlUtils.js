import { BASE_URL } from "../constants/api";

export const makeRequestUrl= (url) => {
  return BASE_URL + url+ "?api-key=" + import.meta.env.VITE_API_KEY;
}