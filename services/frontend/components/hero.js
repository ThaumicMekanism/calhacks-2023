import Image from "next/image";
import Container from "./container";
import React, { useState } from 'react';

const Card = ({ title, text }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`card ${isSelected ? 'selected' : ''}`}
      onClick={handleCardClick}
    >
      <h2 className="card-heading">{title}</h2>
      <p className="card-text">{text}</p>
    </div>
  );
}


const Hero = () => {
  return (
    <>   
    <div className="sectionCards">
      <h1 className="questionText text-2xl font-bold">What is your goal for today?</h1>
    <div className="section">
      <Card title="Flashcards" text="Elevate learning with interactive flashcards for easy review and retention. Dynamic and engaging, they enhance understanding and memorization for exams, presentations, and reinforcing knowledge."/>
      <Card title="Summarize" text="Effortlessly condense texts into concise summaries. Our advanced summarization tool extracts relevant information for quick grasp of main points. Save time with intuitive summarization."/>
      <Card title="Bullet Points" text="Simplify note-taking with bullet points for effective organization. Create structured outlines to break down complex topics. Streamline note-taking, prioritize details, enhance comprehension." />
    </div>
    </div>

    <div className="flex items-center justify-center w-auto h-full">
      <label htmlFor="dropzone-file" className="fileUpload flex flex-col items-center justify-center w-auto border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100">
        <div className="flex flex-col items-center justify-center py-10">
          <svg aria-hidden="true" className="w-12 h-12 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
          </svg>
          <p className="mb-2 text-lg text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Maximum file size 20MB</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
    </>
  );
}

export default Hero;