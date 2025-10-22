import axios from "axios";
import { Photo } from "../types";

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const BASE_URL = "https://api.pexels.com/v1";

export const fetchPhotos = async (
  page = 1,
  query: string,
): Promise<Photo[]> => {
  const { data } = await axios.get(`${BASE_URL}/search`, {
    headers: { Authorization: API_KEY },
    params: { query: query || "nature", per_page: 30, page },
  });
  return data.photos;
};
