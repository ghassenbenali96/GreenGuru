"use client";
import React, { useState } from "react";
import Head from "next/head";
import { PiPlant } from "react-icons/pi";
import { Colab } from "@lobehub/icons";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [moveLogoToTop, setMoveLogoToTop] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
    setMoveLogoToTop(true);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Head>
        <title>GreenGuru</title>
        <meta
          name="description"
          content="GreenGuru is an AI-based web application for plant classification and parasitic herb detection. It supports 12 types of seedlings, using computer vision models to make efficient predictions and produce reliable results."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Background Video */}
      <div className="relative w-full h-full">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/greenGuruVid.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-green-300 opacity-30"></div>
      </div>

      {/* Logo */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          moveLogoToTop ? "top-0" : "top-1/2 translate-y-[-50%]"
        }`}
      >
        <img src="/logo.png" alt="GreenGuru Logo" className="max-w-md" />

        {/* Conditionally render the button */}
        {!showForm && (
          <button
            onClick={handleButtonClick}
            className="mt-[-50px] relative overflow-hidden flex items-center px-6 py-3 bg-green-500 text-white rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:bg-green-600 hover:shadow-xl focus:outline-none"
          >
            <PiPlant className="mr-2 text-xl" />
            Get Started
            {/* Radiating effect */}
            <span className="absolute inset-0 w-full h-full bg-green-500 rounded-full opacity-30 animate-pulse"></span>
          </button>
        )}
      </div>

      {/* Form */}
      {showForm && (
        <div
          className="fixed top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-30 p-6 rounded-xl shadow-lg transition-all duration-500 ease-in-out"
          style={{ width: "350px" }}
        >
          <h2 className="text-xl font-sans text-center text-gray-500 mb-4 flex items-center justify-center">
            Connect to your Google Colab{" "}
            <Colab.Color size={18} className="ml-2" />
          </h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Enter ngrok URL"
              className="px-4 py-2 rounded-md bg-transparent border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="mt-4 py-2 px-6 bg-green-500 text-white rounded-full shadow-lg transform transition duration-300 ease-in-out hover:bg-green-600 hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center py-4">
        <strong>&copy; 2025 GreenGuru. All Rights Reserved.</strong>
      </footer>
    </div>
  );
}
