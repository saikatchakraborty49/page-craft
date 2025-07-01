"use client"
import { setPreview } from '@/lib/features/sidebar/sidebarSlice';
import React, { useEffect, useRef, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';

const Preview = () => {
  const iframeRef = useRef(null);
  const {index,style,script}=useSelector((state)=>state.code)

  const [escVisible,setEscVisible]=useState(true)

  useEffect(() => {

    const iframe = iframeRef.current;
    if (!iframe) return;

    const document = iframe.contentDocument;
    const combined = `
      <html>
        <head>
          <style>${style}</style>
        </head>
        <body>
          ${index}
          <script>${script}<\/script>
        </body>
      </html>
    `;

    document.open();
    document.write(combined);
    document.close();
  }, [index,style,script]);

  useEffect(() => {
    setTimeout(() => {
      setEscVisible(false)
    }, 3000);
  }, [])
  

  const dispatch=useDispatch();
  
  
  useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      dispatch(setPreview(false));
    }
  };

  document.addEventListener('keydown', handleKeyDown);

  // Cleanup on unmount
  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
}, [dispatch]);
  return (
    <div  className='w-screen h-screen flex items-center justify-center bg-transparent z-20 fixed top-0 left-0'>
      <div onClick={()=>{
        dispatch(setPreview(false))
      }} className='absolute hover:scale-150 z-50 hover:cursor-pointer text-white top-3 left-1 p-1 text-2xl bg-red-800'>
        <RxCross1 />
      </div>
      <div className='relative w-[96vw] h-[96vh] bg-white'>
        {/* <div className='absolute'> */}
        {/* <div className={`${escVisible?'block':'hidden'} absolute top-8 justify-center items-center  left-[50%] -translate-[50%] bg-black/80 flex gap-1 p-2`}>To exit preview, press 
          <div className='border-1 p-2 bg-transparent'>Esc</div>
        </div> */}
        {/* </div> */}
        <iframe
          ref={iframeRef}
          title="Live Preview"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}

export default Preview