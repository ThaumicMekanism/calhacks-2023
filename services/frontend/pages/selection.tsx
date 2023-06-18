import Image from "next/image";
import Card from "../components/card";
import React, { useState } from 'react';

const Selection = () => {
  return (
    <div className="sectionCards" /* style={{ display: "flex", alignItems: "center", justifyContent: "center" }} */>
      <h1 className="questionText text-2xl font-bold">What is your goal for today?</h1>
      <div className="section">
        <Card title="Flashcards" text="Elevate learning with interactive flashcards for easy review and retention. Dynamic and engaging, they enhance understanding and memorization for exams, presentations, and reinforcing knowledge."/>
        <Card title="Summarize" text="Effortlessly condense texts into concise summaries. Our advanced summarization tool extracts relevant information for quick grasp of main points. Save time with intuitive summarization."/>
        <Card title="Bullet Points" text="Simplify note-taking with bullet points for effective organization. Create structured outlines to break down complex topics. Streamline note-taking, prioritize details, enhance comprehension." />
      </div>
    </div>
  );
}

export default Selection;