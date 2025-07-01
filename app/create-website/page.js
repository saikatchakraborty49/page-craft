"use client"
import Chatbot from '@/components/create-website/Chatbot'
import Sidebar from '@/components/create-website/Sidebar/Sidebar'
// import { apiConnector } from '@/services/apiConnector'
// import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const CreateWebsite = () => {
  const sidebar=useSelector((state)=>state.sidebar.value)
  console.log(sidebar);

  // useEffect(async() => {
  //   let a = await apiConnector("POST","/api/LLM");
    
  //   console.log(a.data.data)   // this is a string
  //   let b=JSON.parse(a.data.data)   //so we need to parse it
  //   console.log(b);   //now this is an object
  //   // console.log(b.index);   //so this is valid
  // }, [])
  // const {showSideBar,setShowSideBar}=useState(false)
  return (
    <div className='w-screen h-auto lg:h-[87vh] flex flex-col lg:flex-row'>
    {/* <div className='w-screen flex flex-col lg:flex-row'> */}
      <Chatbot/>
      <Sidebar/>
    </div>
  )
}

export default CreateWebsite