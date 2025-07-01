"use client"
import React, { useRef } from 'react'
// import RohitImage from '../assets/rohit-negi-photo.jpg';
import { useSelector } from 'react-redux';

const MessageComponent = (props) => {
    const {message}=props;
    let parsed=message.parts[0].text;
    if(message.role=="model"){
      parsed=JSON.parse(message.parts[0].text).message
    }
    // let image=RohitImage
    // const {profilePicture}=useSelector((state)=>state.user)
    // if(message.role=="user"){
    //   image=profilePicture
    // }

  

  return (
    <div className={`mt-2 w-full flex text-justify  text-white text-lg
       ${message.role=="user"?"justify-end":"justify-start "}      
      `}>
        <div className={`bg-gray-800/75 p-3  rounded-md max-w-[80%] flex items-center gap-2 
          ${message.role=="user"?"flex-row-reverse":"flex"}`}>
            {/* <div className="flex items-start flex-shrink-0 h-full">
              <img
                src={image}
                className="w-[50px] h-[50px] rounded-full object-cover"
                alt="profile"
              />
            </div> */}
              <p className='whitespace-pre-line'>
                {parsed}
              </p>
        </div>
    </div>
  )
}

export default MessageComponent