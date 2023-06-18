import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import Background from "../assets/pink-blue-bg.png";
import { postData } from "../helpers/methods";
// import { useAppSelector, useAppDispatch } from '../store/hooks';
// import { updateRender } from '../store/authSlice';
// import Selection from "../pages/selection";
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { updateAIData } from '../store/authSlice';

const HeroV2 = ({ render, setRender }) => {
  const [select, setSelect] = useState("text");
  const [text, setText] = useState("");

  // const { render } = useAppSelector(state => state.flashy)
  // const dispatch = useAppDispatch();
  const { aiData } = useAppSelector(state => state.flashy)
  const dispatch = useAppDispatch();

  const handleText = (e) => {
    console.log('this is text', e)
    setText(e)
  }
  console.log('UGHKJHDFGHJKF', aiData)

  const handleSubmit = () => {
    console.log('this is being submitted', text)
    postData({ user_input: text }, (data) => {
      dispatch(updateAIData(data.cards))
    })
    // dispatch(updateRender("selection"))
    setRender("selection")
  }




  return (
      <div className="heroMain flex bg-heroColor" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", /* border: "3px solid red", */ margin: "1em" }}>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", /* border: "3px solid purple", */ width: "100%", padding: "2em" }}>
          <div className="p-10 w-fit mb-8">
            <div className="pt-16">
              <p className="py-2 text-xl leading-normal text-gray-500 lg:text-2xl xl:text-2xl dark:text-gray-300">
              Revolutionize your
              </p>
              <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-8xl xl:leading-none dark:text-white">
              Notes with the <br></br>Ultimate AI-Powered <br></br>Tool
              </h1>
            </div>
          </div>

          <div id="btn-input-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div>
            <button type="button" style={{ border: "2px solid black", backgroundColor: "white", border: "1px solid black", padding: "8px", borderRadius: '7.5px', marginBottom: "5px" }} onClick={() => setSelect("text")}>Text</button>
            <button type="button" style={{ border: "2px solid black", backgroundColor: "white", border: "1px solid black", padding: "8px", borderRadius: '7.5px', marginBottom: "5px" }} onClick={() => setSelect("pdf")}>PDF</button>
          </div>

          {select === "text" ?
            <div>
              <textarea placeholder='Input text here...' value={text} onChange={(e) => handleText(e.target.value)} style={{ height: "300px", width: "300px" }}></textarea>
            </div>
            :
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", bocrder: "3px solid purple", width: "fit-content", padding: "1em" }}>
              <div className="flex items-center justify-center w-full h-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center py-10" style={{ padding: "2em 8em 2em 8em" }}>
                    <svg aria-hidden="true" className="w-12 h-12 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    <p className="mb-2 text-lg text-gray-500 dark:text-gray-400">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Maximum file size 20MB</p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
          }
                      <button type="button" style={{ border: "2px solid black", backgroundColor: "white", border: "1px solid white", padding: "8px", borderRadius: '7.5px', marginBottom: "5px" }} onClick={() => handleSubmit()}>Submit</button>

          </div>

        </div>

        <div className="relative bg-heroColor" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: "20px", padding: "1em", position: "relative" }}>
          <Image src={Background} alt="Background" objectFit="cover" style={{ zIndex: 3, overflow: "hidden", maxWidth: "100%", display: "flex", borderRadius: "20px", padding: "1em"}}/>

          <div className="bg-text" style={{ position: "absolute", top: 0, left: 0, zIndex: 4, display: "flex", alignItems: "center", justifyContent: "center", /* border: "3px solid red", */ flex: "100px 1 0", marginBottom: "300px", padding: "1em" }}>

            <div className="bg-inner-text text-2xl leading-snug tracking-tight text-gray-800 lg:text-xl lg:leading-tight xl:text-xl xl:leading-none dark:text-white" style={{ padding: "2em", color: "#84848D" }}>
              <h4 className="font-bold" style={{ textDecoration: "underline" }}>For Students</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
            </div>

            <div className="bg-inner-text text-2xl leading-snug tracking-tight text-gray-800 lg:text-xl lg:leading-tight xl:text-xl xl:leading-none dark:text-white" style={{ padding: "2em", color: "#84848D" }}>
              <h4 className="font-bold" style={{ textDecoration: "underline" }}>For Teachers</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
            </div>

            <div className="bg-inner-text text-2xl leading-snug tracking-tight text-gray-800 lg:text-xl lg:leading-tight xl:text-xl xl:leading-none dark:text-white" style={{ padding: "2em", color: "#84848D" }}>
              <h4 className="font-bold" style={{ textDecoration: "underline" }}>For Learners</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
            </div>

          </div>

        </div>

      </div>
  );
}

export default HeroV2;

