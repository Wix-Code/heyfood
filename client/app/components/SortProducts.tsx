import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React, { useContext } from 'react'
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { contextApi } from '../utils/context';

const SortProducts = ({ setOpenSort }: { setOpenSort: React.Dispatch<React.SetStateAction<boolean>>; }) => {
  const context = useContext(contextApi);
  
    if (!context) {
      throw new Error('MyComponent must be used within a ContextProvider');
    }
  
    const { handleSortChange} = context;
  return (
    <div className='absolute  left-0 h-screen bg-[#00000054] z-20 w-full top-[132px]'>
      <div className='flex px-5  pt-8 pb-10 bg-[#FFFFFF] flex-col sticky top-[80px] gap-2'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <SwapVertIcon />
            <p className='font-[600] text-[20px]'>Sort</p>
          </div>
          <button onClick={() => setOpenSort(false)}><CloseIcon /></button>
        </div>
        <div>
          <FormControl>
            <RadioGroup
              aria-labelledby="sort-label"
              name="radio-buttons-group" 
              onChange={handleSortChange}
            >
              <FormControlLabel onClick={() => setOpenSort(false)} value="most-popular" control={<Radio size="small" />} label="Most Popular" />
              <FormControlLabel onClick={() => setOpenSort(false)} value="highest" control={<Radio size="small" />} label="Highest Rated" />
              <FormControlLabel onClick={() => setOpenSort(false)} value="newest" control={<Radio size="small" />} label="Newest" />
              <FormControlLabel onClick={() => setOpenSort(false)} value="oldest" control={<Radio size="small" />} label="Oldest" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  )
}

export default SortProducts