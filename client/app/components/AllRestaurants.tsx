import React from 'react'
import { useFetchRestaurants } from '../utils/tanksQuerry'
import { formatTime } from '../utils/timeFunction'

const AllRestaurants = () => {
    const { data: restaurants =[], error, isLoading } = useFetchRestaurants()
  
  return (
    <div className='max-lg:mr-5 max-sm:mx-5'>
      <div className='flex mb-4'>
        <h1 className='text-[28px] max-sm:text-[20px] tracking-[1px] font-[800]'>All Restaurants</h1>
      </div>
      <div className='grid max-md:w-full max-lg:grid-cols-2 max-sm:grid-cols-1 grid-cols-3 gap-5'>
        {
          restaurants?.map((product) => {
            return (
              <div key={product.id} className='flex relative cursor-pointer flex-col gap-[2px]'>
                <img className='h-[110px] rounded-[4px] w-full object-cover' src={product.img} alt="" />
                <p className='font-[600] text-[17px]'>{product.shop}</p>
                <p className='text-[#757575] text-[14px]'>{product.name}</p>
                <p className='text-[15px]'>4.2 • 6607+ Ratings</p>
                <div className='absolute left-3 top-3 flex flex-col justify-between'>
                  <p className='text-[13px] text-[#FFFFFF]'>{formatTime(product.openHour)} - {formatTime(product.closeHour)}</p>
                  {
                    product.discount !== null && (<p className='text-[13px] text-[#FFFFFF] px-3 py-1 bg-[#00c75a]'>{product.discount}</p>)
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AllRestaurants