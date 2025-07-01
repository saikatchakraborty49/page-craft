"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCopy } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import toast from "react-hot-toast";
import JSZip from "jszip";
import { setPreview } from "@/lib/features/sidebar/sidebarSlice";

const Code = () => {
  const [activeTab, setActiveTab] = useState("index");
  const dispatch=useDispatch();
  // Fetch code content from Redux store
  const { index, style, script } = useSelector((state) => state.code);


  const downloadZip = async () => {
    const zip = new JSZip();

    zip.file("index.html", index);
    zip.file("style.css", style);
    zip.file("script.js", script);

    const content = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(content);

    const a = document.createElement("a");
    a.href = url;
    a.download = "website-files.zip";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-4 text-white h-full">
     
              {/* Tab buttons */}
        <div className="flex gap-4 mb-2 items-center border-b justify-between"> 
          <div className="flex gap-4 ">
            <button
              onClick={() => setActiveTab("index")}
              className={`pb-1 ${activeTab === "index" ? "text-amber-400 border-b-2 border-amtext-amber-400 font-semibold" : ""}`}
            >
              index.html
            </button>
            <button
              onClick={() => setActiveTab("style")}
              className={`pb-1 ${activeTab === "style" ? "text-amber-400 border-b-2 border-amtext-amber-400 font-semibold" : ""}`}
            >
              style.css
            </button>
            <button
              onClick={() => setActiveTab("script")}
              className={`pb-1 ${activeTab === "script" ? "text-amber-400 border-b-2 border-amtext-amber-400 font-semibold" : ""}`}
            >
              script.js
            </button>
        </div>
          {/* Download button  */}
          <div className="mr-1 mb-0.5 flex gap-1 items-center">
            <button className="text-md bg-white/35 p-2 rounded-full hover:bg-white hover:text-black" onClick={()=>{
              dispatch(setPreview(true))
            }}>
              Show Preview
            </button>
            <button onClick={downloadZip} className="text-lg bg-white/35 p-3 rounded-full hover:bg-white hover:text-black">
              <FaDownload />
            </button>
            
          </div>
        </div>


      {/* Display code content */}
      <div className="relative text-black bg-white p-4 rounded overflow-auto h-[76vh] custom-scrollbar">
        <button className="text-2xl bg-black/10 p-3 rounded-full sticky top-1 right-1 float-right hover:bg-black hover:text-white" onClick={()=>{
          if(activeTab === "index"){
            navigator.clipboard.writeText(index).then(toast.success("Copied!!!"))
          }
          if(activeTab === "style"){
            navigator.clipboard.writeText(style).then(toast.success("Copied!!!"))
          }
          if(activeTab === "script"){
            navigator.clipboard.writeText(script).then(toast.success("Copied!!!"))
          }
        }}><FaCopy /></button>
        {activeTab === "index" && <pre>{index}</pre>}
        {activeTab === "style" && <pre>{style}</pre>}
        {activeTab === "script" && <pre>{script}</pre>}
      </div>
    </div>
  );
};

export default Code;
