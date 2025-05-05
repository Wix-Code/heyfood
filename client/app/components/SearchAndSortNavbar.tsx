import React, { useContext, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import SortProducts from './SortProducts';
import SearchRestaurants from './SearchRestaurants';
import { contextApi } from '../utils/context';

const SearchAndSortNavbar = () => {
  
  const context = useContext(contextApi);

  if (!context) {
    throw new Error('MyComponent must be used within a ContextProvider');
  }

  const { openSearchMobile, setOpenSearchMobile, handleSearch, setIsSearching, setSearchTerm, setRestaurantResults } = context;
  const [openSort, setOpenSort] = useState(false)
  return (
    <div className='hidden max-sm:mx-5 justify-between max-sm:flex gap-3'>
      <div className='bg-[#ececec] px-3 py-[10px] items-center rounded-[40px] flex gap-2 w-full'>
        <SearchIcon />
        <input onClick={() => setOpenSearchMobile(true)}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            if (e.target.value === '') {
              setIsSearching(false); 
              setRestaurantResults([]);
            }
          }}
          onKeyDown={handleSearch} type="text" className='w-full outline-0 text-[14px]' placeholder='Search restaurants' />
      </div>
      <button className='text-right' onClick={() => setOpenSort(!openSort)}><SwapVertOutlinedIcon /></button>
      <div>
        {
          openSort && (<SortProducts setOpenSort={setOpenSort} />)
        }
        {
          openSearchMobile && ( <SearchRestaurants />)
        }
      </div>
    </div>
  )
}

export default SearchAndSortNavbar