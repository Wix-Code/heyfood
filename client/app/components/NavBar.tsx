"use client"

import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import TableRowsIcon from '@mui/icons-material/TableRows';
import DesktopSideBar from './DesktopSideBar';
import SearchAndSortNavbar from './SearchAndSortNavbar';
import CloseIcon from '@mui/icons-material/Close';
import SearchRestaurants from './SearchRestaurants';

const NavBar = () => {
  const [openDesktopSidebar, setOpenDesktopSidebar] = useState<boolean>(false)
  const [openSearch, setOpenSearch] = useState(false)
  return (
    <div style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"}} className='sticky top-0 z-50 bg-[#FFFFFF]'>
      <div className='relative'>
        <div className='flex justify-between h-[80px] max-w-[1200px] m-auto items-center'>
          {
            openDesktopSidebar && (<DesktopSideBar setOpenDesktopSidebar={setOpenDesktopSidebar} />)
          }
          <div className='flex max-lg:ml-5 gap-5 items-center'>
            <button className='cursor-pointer' onClick={() => setOpenDesktopSidebar(!openDesktopSidebar)}><TableRowsIcon /></button>
            <img className='max-xl:hidden' src="https://heyfood.africa/icons/new/logo-circle-green.svg" alt="" />
            <div className='flex items-center gap-2'>
              <LocationOnIcon />
              <p>Set Location</p>
            </div>
          </div>
          <div className='bg-[#ececec] max-sm:hidden max-lg:w-[200px] px-3 py-[10px] items-center rounded-[40px] flex gap-2 w-[400px]'>
            <SearchIcon />
            <input onClick={() => setOpenSearch(true)} type="text" className='w-full outline-0 text-[14px]' placeholder='Search restaurants or food' />
          </div>
          {
            openSearch ? (
              <button className='cursor-pointer max-sm:mr-5' onClick={() => setOpenSearch(false)}><CloseIcon /></button>
            ) : (
                <>
                  <div className='flex max-lg:mr-5 gap-3 items-center'>
                    <p className='font-[600] max-sm:hidden text-[14px]'>SIGN IN</p>
                    <div className='bg-[#000000] font-[600] text-[14px] px-6 py-2 rounded-[30px] flex gap-2 items-center text-[#FFFFFF]'>
                      <ShoppingCartIcon sx={{ fontSize: 18 }} />
                      <p className='max-sm:hidden'>CART</p>
                      <span>0</span>
                    </div>
                  </div>
                </>
            )
          }
        </div>
      </div>
      <div className='pb-3'>
        <SearchAndSortNavbar />
        {
          openSearch && ( <SearchRestaurants setOpenSearch={setOpenSearch} />)
        }
      </div>
    </div>
  )
}

export default NavBar