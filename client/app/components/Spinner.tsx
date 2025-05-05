import React from 'react'

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] py-10">
      <div className="w-10 h-10 border-4 border-t-transparent border-[#37962b] rounded-full animate-spin">
        <img src="https://heyfood.africa/icons/new/logo-circle-green.svg" alt="" />
      </div>
    </div>
  )
}

export default Spinner