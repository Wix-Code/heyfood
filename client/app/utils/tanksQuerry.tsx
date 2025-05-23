import { useQuery } from "@tanstack/react-query";
import { Restaurant } from "./context";

interface Category {
  id:     number,
  name:   string,
  img:    string
}

const fetchCategories = async (): Promise<Category[]> => {
  const res = await fetch(`https://heyfood.onrender.com/api/category`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  const response = await res.json();
  return response.data;
};

export const useFetchCategories = () => {
  return useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
};

const fetchRestaurants = async (): Promise<Restaurant[]> => {
  const res = await fetch(`https://heyfood.onrender.com/api/restaurants`);
  if (!res.ok) throw new Error('Failed to fetch restaurants');
  const response = await res.json();
  return response.data; // Make sure response.data is an array
};

export const useFetchRestaurants = () => {
  return useQuery<Restaurant[]>({
    queryKey: ['restaurants'],
    queryFn: fetchRestaurants,
  });
};