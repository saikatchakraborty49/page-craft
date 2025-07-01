"use client";
import React, { useEffect, useRef, useState } from "react";
import MessageComponent from "./MessageComponent";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { push } from "@/lib/features/history/historySlice";
import { apiConnector } from "@/services/apiConnector";
import { setCode } from "@/lib/features/code/codeSlice";
import { setSidebar } from "@/lib/features/sidebar/sidebarSlice";
import { IoIosSend } from "react-icons/io";
import toast from "react-hot-toast";

const Chatbot = () => {
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [generating, setGenerating] = useState(false);
  const [recording, setRecording] = useState(false);
  const recognitionRef = useRef(null);

  const dispatch = useDispatch();
  const { array } = useSelector((state) => state.history);
  const sidebar = useSelector((state) => state.sidebar.value);
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [array]);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
      const SpeechRecognition = window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = ""; // Auto-detect language

      recognition.onresult = (event) => {
        const speechText = event.results[0][0].transcript;
        setValue("description", speechText);
        setRecording(false);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setRecording(false);
      };

      recognition.onend = () => setRecording(false);
      recognitionRef.current = recognition;
    }
  }, [setValue]);

  const toggleRecording = () => {
    if (!recognitionRef.current) {
      alert("Speech Recognition not supported on this browser");
      return;
    }

    if (recording) {
      recognitionRef.current.stop();
      setRecording(false);
    } else {
      recognitionRef.current.start();
      setRecording(true);
    }
  };

  async function onSubmit(data) {
    if (generating || data.description === "") return;

    setGenerating(true);
    reset();
    try {
      console.log(description);
      const userMessage = {
        role: "user",
        parts: [{ text: data.description }],
      };
      let updatedArray = [...array, userMessage];
      dispatch(push(userMessage));
    
      const response = await apiConnector("POST", "api/LLM", {
      history: updatedArray,
      });
      const modelMessage = {
        role: "model",
        parts: [{ text: response.data.data }],
      };
      console.log(response.data);
      dispatch(setCode(JSON.parse(response.data.data)));
      updatedArray = [...updatedArray, modelMessage];
      dispatch(push(modelMessage));
      dispatch(setSidebar(true));
    } catch (error) {
      console.log(error);
      toast.error("Unexpected error occured")
    }
    
    setGenerating(false);
  }

  return (
    <div
      className={`relative h-[87vh] p-4 ${
        sidebar ?  "w-screen lg:w-[30vw]"  : "w-screen"
      }`}
    >
      {array.length === 0 ? (
        <div className="h-5/6 p-2 flex flex-col justify-center items-center">
          <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center gap-6">
        <h1 className="text-5xl md:text-6xl font-bold text-gradient">
          Welcome to PageCraft
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
          Transform your ideas into fully functional websites using the power of
          AI. Generate HTML, CSS, and JavaScript with voice or text prompts.
        </p>
        </div>
        </div>
      ) : (
        <div className="h-5/6 overflow-y-auto p-4 custom-scrollbar">
          <div className="flex gap-2 justify-center items-center">
            {/* <p className="text-5xl font-bold text-white text-gradient">PageCraft</p> */}
          </div>
          {array.map((message, i) => (
            <MessageComponent key={i} message={message} />
          ))}
          {/*  */}
          
          <div className={`${generating?'block':'hidden'} flex justify-center items-center mt-2 bg-gray-800/75 rounded-md w-[90px] h-[60px] `}>
          <div className="loader"></div>
          {/* <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full animate-bounce [animation-delay:-0.3s]' bg-white"></div>
              <div class="w-3 h-3 rounded-full animate-bounce [animation-delay:-0.15s] bg-white"></div>
              <div class="w-3 h-3 rounded-full animate-bounce bg-white"></div>
          </div> */}
          </div>
          <div ref={bottomRef} />
        </div>
      )}
      
      <div className="h-1/6 w-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex justify-center gap-2"
        >
          <input
            autoComplete="off"
            required
            className="p-2 w-3/4 bg-gray-800/75 text-white text-lg rounded-md"
            type="text"
            {...register("description")}
            placeholder="Describe what you want us to create"
          />

          <button
            type="button"
            onClick={toggleRecording}
            // onClick={()=>{
            //   // if(generating==="false"){
            //     toggleRecording
            //   // }
            // }}
            className={`${generating?'hover:scale-100 cursor-default':'hover:scale-105 cursor-pointer'} p-2 rounded-md text-xl text-white ${
              recording ? "bg-red-600" : "bg-gray-800/75"
            }`}
            title={recording ? "Stop Recording" : "Start Voice Input"}
          >
            🎤
          </button>

          <button
            className={`${
              !generating
                ? "hover:scale-105 cursor-pointer"
                : "hover:scale-100 cursor-default"
            } p-2 bg-gray-800/75 rounded-md text-white text-2xl`}
            type="submit"
          >
            <IoIosSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
