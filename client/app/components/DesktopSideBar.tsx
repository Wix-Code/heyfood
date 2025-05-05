import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

const DesktopSideBar = ({
    setOpenDesktopSidebar
  }: {
    setOpenDesktopSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
  return (
    <div className='absolute z-40 bg-[#00000062] top-0 left-0 w-full h-screen'>
      <div className='bg-[#FFFFFF] flex flex-col py-10 justify-between h-screen max-sm:w-[90%] w-[20%]'>
        <div className='flex justify-end mr-4'>
          <button onClick={() => setOpenDesktopSidebar(false)} className='text-right cursor-pointer w-[45px] h-[45px] flex items-center justify-center rounded-[50%] hover:bg-[#f1f1f1]'><CloseIcon /></button>
        </div>
        <div className='flex cursor-pointer px-6 py-4 hover:bg-[#f1f1f1] items-center gap-5'>
          <LockOpenOutlinedIcon />
          <p>Sign in</p>
        </div>
        <div>
          <p className='text-[16px] cursor-pointer px-6 py-4 hover:bg-[#f1f1f1] font-[600] text-[#111111]'>Add your restaurant</p>
          <p className='text-[16px] cursor-pointer px-6 py-4 hover:bg-[#f1f1f1] font-[600] text-[#111111]'>Become a delivery rider</p>
          <p className='text-[16px] cursor-pointer px-6 py-4 hover:bg-[#f1f1f1] font-[600] text-[#111111]'>Go to Homepage</p>
        </div>
        <div className='ml-6 max-sm:mb-5'>
          <div className='flex mb-4 items-center gap-3'>
            <img src="https://heyfood.africa/icons/new/logo-circle-green.svg" alt="heyfood icon" />
            <p className='text-[16px] font-[600] text-[#111111]'>Experience the <br />
            Heyfood mobile app</p>
          </div>
          <div className='flex gap-1'>
            <img className='w-[110px]' src="https://w7.pngwing.com/pngs/961/859/png-transparent-google-play-android-app-store-apple-android-text-rectangle-logo-thumbnail.png" alt="" />
            <img className='w-[110px]' src="https://w7.pngwing.com/pngs/961/859/png-transparent-google-play-android-app-store-apple-android-text-rectangle-logo-thumbnail.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesktopSideBar