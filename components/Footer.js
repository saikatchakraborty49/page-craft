import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='w-screen h-[30px] bg-gray-700 flex justify-center items-center'>
        Copyright © {currentYear} PageCraft
    </div>
  )
}

export default Footer