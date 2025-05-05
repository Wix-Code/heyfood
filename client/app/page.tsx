/*import React, { useState } from 'react'
import Discounts from './components/Discounts'
import AllRestaurants from './components/AllRestaurants'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { component } from './dummyData'

const page = () => {
  const [filterCategory, setFilterCategory] = useState(null);
  return (
    <div>
      <div className='flex  max-w-[1200px] m-auto items-center my-6 gap-5'>
        <button className='bg-[#000000] font-[600] cursor-pointer px-8 py-4 rounded-[30px] text-[#FFFFFF]'>Restaurants</button>
        <button>Grocery</button>
      </div>
      <hr className='h-[1px] mb-6 w-full bg-[#f3f3f3] border-0' />
      <div className='flex max-w-[1200px] m-auto justify-between items-center'>
        {
          component.map((item, i) => {
            return (
              <div key={item.id}>
                <img className='w-[100px]' src={item.img} alt={item.name} />
                <p className='text-center'>{item.name}</p>
              </div>
            )
          })
        }
      </div>
      <div className='flex max-w-[1200px] m-auto mt-6'>
        <div className='flex-1'>
          <div className='flex flex-col sticky top-[80px] gap-4'>
            <h2 className='text-[#000000] font-[800] text-[24px]'>All Stores</h2>
            <p className='text-[#757575] text-[18px]'>(639 Stores)</p>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">  Sort</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  color='black'
                >
                  <FormControlLabel className='text-[#000000]'  value="female" control={<Radio className='text-[#000000]' size="small"/>} label="Most Popular" />
                  <FormControlLabel value="nearest" control={<Radio size="small"/>} label="Nearest" />
                  <FormControlLabel value="highest" control={<Radio size="small" />} label="Highest rate" />
                  <FormControlLabel value="newest" control={<Radio size="small"/>} label="Newest" />
                  <FormControlLabel value="other" control={<Radio size="small"/>} label="Most Rated" />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className='flex-3 flex flex-col gap-10'>
          <Discounts />
          <AllRestaurants />
        </div>
      </div>
    </div>
  )
}

export default page */
"use client"
import React, { useContext, useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
//import { component, data } from './dummyData';
import Discounts from './components/Discounts';
import AllRestaurants from './components/AllRestaurants';
import { contextApi } from './utils/context';
import { useFetchCategories } from './utils/tanksQuerry';


const Page = () => {
  const context = useContext(contextApi);
    
  if (!context) {
    throw new Error('MyComponent must be used within a ContextProvider');
  }

  const { filteredProducts, handleSortChange, handleCardClick, filterCategory, sortedBy } = context;
  const { data : categories, error, isLoading } = useFetchCategories()
  console.log(categories, "datatta")
  /*const [filterCategory, setFilterCategory] = useState<string | null>(null);;
  const [sortedBy, setSortedBy] = useState(null);

  const handleCardClick = (category : any) => {
    setFilterCategory(category);
    setSortedBy(null);
  };

  const handleSortChange = (e: any) => {
    setSortedBy(e.target.value);
    setFilterCategory(null);
  };

  const getFilteredProducts = () => {
    let filtered = [...data];

    if (filterCategory) {
      filtered = filtered.filter(
        (item) => filterCategory && item.name?.toLowerCase() === filterCategory.toLowerCase()
      );
    }

    /*if (sortedBy) {
      switch (sortedBy) {
        case 'highest':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        case 'newest':
          filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          break;
        case 'most-popular':
          filtered.sort((a, b) => b.popularity - a.popularity);
          break;
        default:
          break;
      }
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts(); */
  if(isLoading) return <p>Loading...</p>
  return (
    <div>
      <div className='flex max-w-[1200px] max-lg:mx-5 m-auto items-center my-6 gap-5'>
        <button className='bg-[#000000] font-[600] cursor-pointer px-8 py-4 rounded-[30px] text-[#FFFFFF]'>Restaurants</button>
        <button>Grocery</button>
      </div>
      <hr className='h-[1px] mb-6 w-full bg-[#f3f3f3] border-0' />

      {/* Filter Cards */}
      <div className='flex hide-scrollbar max-w-[1200px] max-lg:mx-5 overflow-x-scroll m-auto justify-between gap-2 items-center'>
        {categories?.map((item) => (
          <div key={item.id} className='w-fit p-3 max-sm:p-4 hover:bg-[#f7f7f7] flex flex-col justify-center items-center gap-2 bg-[#d4d4d4] max-xl:hover:bg-[#f7f7f7] cursor-pointer' onClick={() => handleCardClick(item.name)}>
            <img className='w-[40px] h-[40px] object-cover' src={item.img} alt={item.name} />
            <p className='text-center max-sm:text-[11px] text-[13px] font-bold tracking-[1px]'>{item.name}</p>
          </div>
        ))}
      </div>

      {/* Layout */}
      <div className='flex max-w-[1200px] max-sm:flex-col m-auto mt-6'>
        <div className='flex-1 max-sm:hidden max-lg:mx-5'>
          <div className='flex flex-col sticky top-[80px] gap-4'>
            <h2 className='text-[#000000] font-[800] text-[24px]'>All Stores</h2>
            <p className='text-[#757575] text-[18px]'>{`(${filteredProducts.length} Stores)`}</p>
            <div>
              <FormControl>
                <FormLabel id="sort-label">Sort</FormLabel>
                <RadioGroup
                  aria-labelledby="sort-label"
                  name="radio-buttons-group"
                  onChange={handleSortChange}
                >
                  <FormControlLabel value="most-popular" control={<Radio size="small" />} label="Most Popular" />
                  <FormControlLabel value="highest" control={<Radio size="small" />} label="Highest rated" />
                  <FormControlLabel value="oldest" control={<Radio size="small" />} label="Oldest" />
                  <FormControlLabel value="newest" control={<Radio size="small" />} label="Newest" />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>

        <div className='flex-3 max-md:w-full flex flex-col gap-10'>
          {(!filterCategory && !sortedBy) ? (
            <>
              <Discounts />
              <AllRestaurants />
            </>
          ) : (
            <div className='grid grid-cols-3 max-md:grid-cols-1 max-lg:mx-5 gap-6'>
              {filteredProducts.map(product => (
                <div key={product.id} className='flex cursor-pointer flex-col gap-[2px]'>
                  <img className='h-[110px] rounded-[4px] w-full object-cover' src={product.img} alt="" />
                  <p className='font-[600] text-[17px]'>{product.shop}</p>
                  <p className='text-[#757575] text-[14px]'>{product.name}</p>
                  <p className='text-[15px]'>{product.rating} Ratings</p>
                  <p>{product.rating}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;