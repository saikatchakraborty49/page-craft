"use client"
import React, { useState } from 'react'
import Preview from './Preview'
import Code from './code/Code'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const preview=useSelector((state)=>state.sidebar.preview)
  const sidebar=useSelector((state)=>state.sidebar.value)
  // console.log("sidebar"+sidebar);
  return (
    <div className={`relative ${sidebar?"block":"hidden"} w-screen lg:w-[70vw] h-full z-40`}>
        {preview?<Preview/>:<Code/>}
    </div>
  )
}

export default Sidebar