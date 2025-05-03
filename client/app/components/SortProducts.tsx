import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'
import SwapVertIcon from '@mui/icons-material/SwapVert';

const SortProducts = ({setOpenSort}:{setOpenSort : React.Dispatch<React.SetStateAction<boolean>>;}) => {
  return (
    <div className='absolute  left-0 h-screen bg-[#00000054] w-full top-[132px]'>
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
            >
              <FormControlLabel value="most-popular" control={<Radio size="small" />} label="Most Popular" />
              <FormControlLabel value="highest" control={<Radio size="small" />} label="Highest Rated" />
              <FormControlLabel value="newest" control={<Radio size="small" />} label="Newest" />
              <FormControlLabel value="nearest" control={<Radio size="small" />} label="Nearest" />
              <FormControlLabel value="newest" control={<Radio size="small" />} label="Most Rated" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  )
}

export default SortProducts