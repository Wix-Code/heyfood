import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import SortProducts from './SortProducts';
import SearchRestaurants from './SearchRestaurants';

const SearchAndSortNavbar = ({setOpenSearch, openSearch}:{setOpenSearch : React.Dispatch<React.SetStateAction<boolean>>; openSearch: boolean}) => {
  const [openSort, setOpenSort] = useState(false)
  return (
    <div className='hidden max-sm:mx-5 justify-between max-sm:flex gap-3'>
      <div className='bg-[#ececec] px-3 py-[10px] items-center rounded-[40px] flex gap-2 w-full'>
        <SearchIcon />
        <input onClick={() => setOpenSearch(true)} type="text" className='w-full outline-0 text-[14px]' placeholder='Search restaurants or food' />
      </div>
      <button className='text-right' onClick={() => setOpenSort(!openSort)}><SwapVertOutlinedIcon /></button>
      <div>
        {
          openSort && (<SortProducts setOpenSort={setOpenSort} />)
        }
        {
          openSearch && ( <SearchRestaurants setOpenSearch={setOpenSearch} />)
        }
      </div>
    </div>
  )
}

export default SearchAndSortNavbar