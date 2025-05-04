import { useQuery } from "@tanstack/react-query";
import { Restaurant } from "./context";

interface Category {
  id:     number,
  name:   string,
  img:    string
}

const fetchCategories = async (): Promise<Category> => {
  const res = await fetch(`http://localhost:8800/api/category`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  const response = await res.json();
  return response.data;
};

export const usePodcasts = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
};

const fetchRestaurants = async (): Promise<Restaurant> => {
  const res = await fetch(`http://localhost:8800/api/restaurants`);
  if (!res.ok) throw new Error('Failed to fetch restaurants');
  const response = await res.json();
  return response.data;
};

export const useFetchRestaurants = () => {
  return useQuery({
    queryKey: ['restaurants'],
    queryFn: fetchRestaurants,
  });
};