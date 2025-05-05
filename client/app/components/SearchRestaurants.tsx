import React, { useContext, useState, useEffect } from 'react';
import { contextApi } from '../utils/context';
import { useFetchCategories, useFetchRestaurants } from '../utils/tanksQuerry';
import GradeIcon from '@mui/icons-material/Grade';

const SearchRestaurants = () => {
  const context = useContext(contextApi);
  if (!context) throw new Error('Component must be used within a ContextProvider');

  const { setIsSearching, searchTerm, isSearching, restaurantResults,setSearchTerm, handleSearch,setRestaurantResults   } = context;
  const { data: categories, isLoading } = useFetchCategories();

  return (
    <div className='absolute left-0 top-[130px] bg-[#FFFFFF] hide-scrollbar overflow-y-scroll w-full h-screen z-10'>
      <div className='py-6'>
        {isSearching ? (
          <div>
            <h2 className='text-[22px] max-xl:px-5 tracking-[1px] px-20 my-5 font-[600]'>Search Results {restaurantResults?.length}</h2>
            {restaurantResults.length > 0 ? (
              restaurantResults.map((restaurant: any) => (
                <div key={restaurant.id} className='py-6 px-20 max-xl:px-5 flex gap-3 cursor-pointer hover:bg-[#f7f7f7] border-b border-[#e9e9e9]'>                  
                  <img className='w-[70px] max-sm:w-[40px] max-sm:h-[40px] h-[70px] object-cover' src={restaurant.img} alt="" />
                  <div>
                  <p className="font-[600]  max-sm:text-[15px] text-[17px]">{restaurant.shop}</p>
                  <p className="text-[#757575] max-sm:text-[12px] text-[14px]">{restaurant.name}</p>
                  <p className='text-[15px]  max-sm:text-[13px] flex items-center gap-2'><GradeIcon color='success'/>{restaurant.rating} Ratings</p>
                  </div>
                </div>
              ))
            ) : (
              <p className='text-gray-500 max-xl:px-5'>No restaurants found for “{searchTerm}”.</p>
            )}
          </div>
        ) : (
          <div>
            <h1 className='text-[22px] px-20 max-xl:px-5 tracking-[1px] my-5 font-[600]'>Categories</h1>
            {categories?.map((item) => (
              <div
                key={item.id}
                className='py-7 max-xl:px-5 border-[#e9e9e9] items-center flex gap-3 cursor-pointer hover:bg-[#f7f7f7] px-20 border-b'
              >
                <img className='w-[30px] h-[30px]' src={item.img} alt="" />
                <p className='text-[16px] tracking-[1px] font-[600]'>{item.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchRestaurants;