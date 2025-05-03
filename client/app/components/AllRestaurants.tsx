import React from 'react'
import { data } from '../dummyData'

const AllRestaurants = () => {
  return (
    <div className='max-lg:mr-5 max-sm:mx-5'>
      <div className='flex mb-4'>
        <h1 className='text-[28px] max-sm:text-[20px] tracking-[1px] font-[800]'>All Restaurants</h1>
      </div>
      <div className='grid max-md:w-full max-lg:grid-cols-2 max-sm:grid-cols-1 grid-cols-3 gap-5'>
        {
          data.map((product) => {
            return (
              <div key={product.id} className='flex cursor-pointer flex-col gap-[2px]'>
                <img className='h-[110px] rounded-[4px] w-full object-cover' src={product.img} alt="" />
                <p className='font-[600] text-[17px]'>{product.title}</p>
                <p className='text-[#757575] text-[14px]'>{product.foods}</p>
                <p className='text-[15px]'>4.2 • 6607+ Ratings</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AllRestaurants