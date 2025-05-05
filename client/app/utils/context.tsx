'use client';

import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
//import { data } from '../dummyData';
import { useFetchRestaurants } from './tanksQuerry';

export interface Restaurant {
  id: number;
  img: string;
  openHour: string;
  closeHour: string;
  shop: string;
  discount: string;
  freeDrink: boolean;
  partyJellof: boolean;
  name: string;
  rating?: number;
  createdAt?: string;
  reviewCount?: number;
};

type SortOption = 'highest' | 'newest' | 'most-popular' | 'oldest' | null;

interface AppContextType {
  openSearch: boolean;
  setOpenSearch: Dispatch<SetStateAction<boolean>>;
  openSearchMobile: boolean;
  setOpenSearchMobile: Dispatch<SetStateAction<boolean>>;
  filteredProducts: Restaurant[];
  filterCategory: string | null;
  setFilterCategory: Dispatch<SetStateAction<string | null>>;
  sortedBy: SortOption;
  setSortedBy: Dispatch<SetStateAction<SortOption>>;
  handleSortChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardClick: (category: string) => void;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  restaurantResults: Restaurant[];
  setRestaurantResults: Dispatch<SetStateAction<Restaurant[]>>;
  isSearching: boolean;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
  handleSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const contextApi = createContext<AppContextType | null>(null);

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openSearchMobile, setOpenSearchMobile] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [sortedBy, setSortedBy] = useState<SortOption>(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [restaurantResults, setRestaurantResults] = useState<Restaurant[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      setIsSearching(true);
      try {
        const res = await fetch(`https://heyfood.onrender.com/api/restaurants?search=${encodeURIComponent(searchTerm.trim())}`);
        const data = await res.json();
        setRestaurantResults(data.data || []);
      } catch (error) {
        console.error('Search failed:', error);
      }
    }
  };


  const { data =[], error, isLoading } = useFetchRestaurants()
  console.log(data, "erroorr")
  

  const handleCardClick = (category: string) => {
    setFilterCategory(category);
    setSortedBy(null);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortedBy(e.target.value as SortOption);
    setFilterCategory(null);
  };

  const getFilteredProducts = (): Restaurant[] => {
    let filtered = [...data];
  
    if (filterCategory) {
      filtered = filtered.filter(
        (item) =>
          filterCategory &&
          item.name?.toLowerCase() === filterCategory.toLowerCase()
      );
    }
  
    if (sortedBy) {
      switch (sortedBy) {
        case 'highest':
          filtered.sort((a, b) => (b?.rating ?? 0) - (a?.rating ?? 0));
          break;
        case 'newest':
          filtered.sort(
            (a, b) =>
              new Date(b.createdAt ?? 0).getTime() -
              new Date(a.createdAt ?? 0).getTime()
          );
          break;
        case 'oldest':
          filtered.sort((a, b) =>
            new Date(a.createdAt ?? 0).getTime() -
            new Date(b.createdAt ?? 0).getTime()
          )
          break;
        case 'most-popular':
          filtered.sort((a, b) => (b?.reviewCount ?? 0) - (a?.reviewCount ?? 0));
          break;
        default:
          break;
      }
    }
  
    return filtered;
  };
  

  const filteredProducts = getFilteredProducts();

  return (
    <contextApi.Provider
      value={{
        openSearch,
        setOpenSearch,
        openSearchMobile,
        setOpenSearchMobile,
        filteredProducts,
        filterCategory,
        setFilterCategory,
        sortedBy,
        setSortedBy,
        handleSortChange,
        handleCardClick,

        setSearchTerm,
        searchTerm,
        handleSearch,
        setRestaurantResults,
        restaurantResults,
        isSearching,
        setIsSearching,

      }}
    >
      {children}
    </contextApi.Provider>
  );
};

export default ContextProvider;