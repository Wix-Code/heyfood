import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className='max-w-[1200px] flex flex-col gap-20 max-xl:mx-5  py-36 m-auto'>
      <div className='flex max-sm:flex-col gap-3 justify-between'>
        <div>
          <img src="https://heyfood.africa/icons/new/logo-long.svg" alt="" />
          <p className='text-[22px] mt-4'>Your food delivered within<br />minutes.</p>
        </div>
        <div className='flex max-sm:flex-col gap-4'>
          <div className='flex flex-col gap-1'>
            <p className='text-[18px] font-[700]'>Get To Know Us</p>
            <p className='text-[16px]  text-[#198a02]'>About Us</p>
            <p className='text-[16px]  text-[#198a02]'>LinkedIn</p>
            <p className='text-[16px] text-[#198a02]'>Blog</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-[18px] font-[700]'>Let Us Help You</p>
            <p className='text-[16px]  text-[#198a02]'>Support</p>
            <p className='text-[16px]  text-[#198a02]'>FAQs</p>
            <p className='text-[16px] text-[#198a02]'>Restaurants Near Me</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-[18px] font-[700]'>Doing Business</p>
            <p className='text-[16px]  text-[#198a02]'>Become a driver</p>
            <p className='text-[16px]  text-[#198a02]'>Become a partner</p>
            <p className='text-[16px] text-[#198a02]'>restaurant</p>
          </div>
        </div>
      </div>
      <div className='flex max-sm:flex-col max-sm:gap-4 justify-between'>
        <div className='flex gap-3 items-center'>
          <button className='w-[35px] bg-[#000000] text-[#FFFFFF] h-[35px] rounded-[50%]'><TwitterIcon /></button>
          <button className='w-[35px] bg-[#000000] text-[#FFFFFF] h-[35px] rounded-[50%]'><TwitterIcon /></button>
          <button className='w-[35px] bg-[#000000] text-[#FFFFFF] h-[35px] rounded-[50%]'><TwitterIcon /></button>
          <button className='w-[35px] bg-[#000000] text-[#FFFFFF] h-[35px] rounded-[50%]'><TwitterIcon /></button>
        </div>
        <div className='flex flex-col max-sm:gap-4 gap-2'>
          <div className='float-right max-sm:justify-start flex justify-end'>
            <img src="https://heyfood.africa/images/new/download-qr.svg" alt="" />
          </div>
          <div className='flex items-center max-sm:items-start max-sm:flex-col gap-3'>
            <p className='text-[17px] text-[#198a02]'>Terms Of Service</p>
            <p className='text-[17px] text-[#198a02]'>Privacy Policy</p>
          </div>
        </div>
      </div>
      <p className='text-[14px] max-sm:text-[12px] text-center'>© 2025 Hey Technologies Limited. All rights reserved</p>
    </div>
  )
}

export default Footer