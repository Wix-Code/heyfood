"use client"

import React, { useContext, useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import Discounts from './components/Discounts';
import AllRestaurants from './components/AllRestaurants';
import { contextApi } from './utils/context';
import { useFetchCategories } from './utils/tanksQuerry';
import FreeDrinks from './components/FreeDrinks';
import { formatTime } from './utils/timeFunction';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import GradeIcon from '@mui/icons-material/Grade';
import Link from 'next/link';
import PartyJellof from './components/PartyJellof';
import Spinner from './components/Spinner';




const Page = () => {
  const context = useContext(contextApi);
    
  if (!context) {
    throw new Error('MyComponent must be used within a ContextProvider');
  }

  const { filteredProducts, handleSortChange, handleCardClick, filterCategory, sortedBy } = context;
  const { data : categories, error, isLoading } = useFetchCategories()
  console.log(categories, "datatta")
 
  if(isLoading) return <Spinner />
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
          <div key={item.id} onClick={() => handleCardClick(item.name)} className={`w-fit p-3 ${filterCategory === item.name ? 'bg-[#f7f7f7] border border-[#eeeeee]' : 'hover:bg-[#f7f7f7]'} max-sm:p-4 hover:bg-[#f7f7f7] flex flex-col justify-center items-center gap-2 max-xl:hover:bg-[#f7f7f7] cursor-pointer`}>
            <img className='w-[40px] h-[40px] object-cover' src={item.img} alt={item.name} />
            <p className='text-center max-sm:text-[11px] text-[13px] font-bold tracking-[1px]'>{item.name}</p>
          </div>
        ))}
      </div>

      {/* Layout */}
      <div className='flex max-w-[1200px] max-sm:flex-col m-auto mt-6'>
        <div className='flex-1 max-sm:hidden max-lg:mx-5'>
          <div className='flex flex-col sticky top-[100px] gap-4'>
            <h2 className='text-[#000000] font-[800] text-[24px]'>All Stores</h2>
            <p className='text-[#757575] text-[18px]'>{`(${filteredProducts.length} Stores)`}</p>
            <div>
              <button className='flex gap-2 items-center'>
                <SwapVertIcon />
                <p className='font-[600] text-[20px]'>Sort</p>
              </button>
              <FormControl>
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

        <div className='flex-3 max-md:w-full overflow-hidden flex flex-col gap-10'>
          {(!filterCategory && !sortedBy) ? (
            <>
              <Discounts />
              <PartyJellof />
              <FreeDrinks />
              <AllRestaurants />
            </>
          ) : (
              <div>
                <Link href="/"><button className='py-2 max-xl:mx-5 px-5 cursor-pointer text-[18px] font-[600] mb-5 bg-[#f1f1f1]'>Reset</button></Link>
                <div className='grid grid-cols-3 max-md:grid-cols-1 max-lg:mx-5 gap-6'>
                {filteredProducts.map(product => (
                  <div key={product.id} className='flex cursor-pointer flex-col gap-[2px]'>
                    <img className='h-[110px] rounded-[4px] w-full object-cover' src={product.img} alt="" />
                    <p className='font-[600] text-[17px]'>{product.shop}</p>
                    <p className='text-[#757575] text-[14px]'>{product.name}</p>
                    <p className='text-[15px] flex items-center gap-2'><GradeIcon color='success'/>{product.rating} Ratings</p>
                    <div className='absolute left-3 top-3 flex flex-col justify-between gap-6'>
                      <p className='text-[13px]  px-3 py-1  bg-[#e68201] text-[#FFFFFF]'>{formatTime(product.openHour)} - {formatTime(product.closeHour)}</p>
                      {
                        product.discount !== null && (<p className='text-[13px] w-fit text-[#FFFFFF] px-3 py-1 bg-[#0c0c0c]'>{product.discount}</p>)
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;