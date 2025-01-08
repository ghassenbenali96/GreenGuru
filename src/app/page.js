"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { PiPlant } from "react-icons/pi";
import { Colab } from "@lobehub/icons";
import Preprocessing from "./preprocessing";

export default function Home() {
  // Get Starting
  const [showForm, setShowForm] = useState(false);
  const [moveLogoToTop, setMoveLogoToTop] = useState(false);
  // Connect to GoogleColab
  const [inputUrl, setInputUrl] = useState("");
  const [flaskStatus, setFlaskStatus] = useState(null);

  // Check GreenGuru-FlaskApp Status
  const checkFlaskReadiness = async (ngrokUrl) => {
    try {
      const formattedNgrokUrl = ngrokUrl.endsWith("/")
        ? ngrokUrl
        : `${ngrokUrl}/`;
      const response = await fetch(`${formattedNgrokUrl}health`);
      if (response.ok) {
        setFlaskStatus(true);
      } else {
        setFlaskStatus(false);
      }
    } catch (error) {
      setFlaskStatus(false);
    }
  };
  // handle Submit When Getting Started
  const handleButtonClick = () => {
    setShowForm(true);
    setMoveLogoToTop(true);
  };
  // Connect to GoogleColab Logic
  const handleInputChange = (e) => {
    setInputUrl(e.target.value);
  };
  const handleSubmit = async () => {
    checkFlaskReadiness(inputUrl);
    // Regular expression to validate a basic URL structure
    const urlPattern =
      /^(https?:\/\/)([a-z0-9-]+\.)+[a-z]{2,6}(:[0-9]+)?(\/[^\s]*)?$/i;
    // Check if the entered URL matches the pattern
    if (!inputUrl || !urlPattern.test(inputUrl)) {
      setFlaskStatus(false);
      return;
    }

    try {
      const response = await fetch(inputUrl);
      if (!response.ok) {
        setFlaskStatus(false);
      }
      if (
        response.status === 200 &&
        response.body.locked === false &&
        response.url === inputUrl &&
        response.url.includes("ngrok-free.app")
      ) {
        setFlaskStatus(true);
      } else {
        setFlaskStatus(false);
      }
    } catch (error) {
      setFlaskStatus(false);
    }
  };
  return (
    <>
      {/* Render Default GreenGuru Screen */}
      {!flaskStatus && (
        <div className="relative w-full h-screen overflow-hidden">
          <Head>
            <title>GreenGuru</title>
            <meta
              name="description"
              content="GreenGuru is an AI-based web application for plant classification and parasitic herb detection. It supports 12 types of seedlings, using computer vision models to make efficient predictions and produce reliable results."
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
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
            <img
              title="GreenGuru"
              src="/logo.png"
              alt="GreenGuru Logo"
              className="max-w-md"
            />

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
              style={{ width: "420px" }}
            >
              <h2 className="text-xl font-sans text-center text-gray-500 mb-4 flex items-center justify-center">
                Connect to your Google Colab{" "}
                <Colab.Color size={18} className="ml-2" />
              </h2>
              {/* Error Message if flaskStatus is false */}
              {flaskStatus === false && (
                <div className="p-2 bg-transparent rounded-lg shadow-sm max-w-sm w-full text-center">
                  <div className="flex items-center justify-center gap-2">
                    {/* Error Icon */}
                    <div className="relative h-4 w-4 mb-2">
                      <div className="absolute inset-0 rounded-full bg-red-500 opacity-75 animate-ping"></div>
                      <div className="h-full w-full rounded-full bg-red-500 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                    {/* Error Message */}
                    <h2 className="text-sm font-semibold text-gray-700 mb-2">
                      Invalid URL or app not running.
                    </h2>
                  </div>
                </div>
              )}
              {/* Input Ngrok URL */}
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Enter ngrok URL"
                  className="px-4 py-2 rounded-md bg-transparent border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  onChange={handleInputChange}
                />
                {/* Connect Button */}
                <button
                  className="mt-4 py-2 px-6 bg-green-500 text-white rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-green-600 hover:scale-105"
                  onClick={handleSubmit}
                >
                  Connect
                </button>
              </div>
            </div>
          )}

          {/* Footer */}
          <footer className="absolute bottom-0 w-full text-center py-4">
            <strong>&copy; 2025 GreenGuru. All Rights Reserved.</strong>
          </footer>
        </div>
      )}
      {/* Render the Preprocessing if the user connect to GoogleColab through Ngrok */}
      {flaskStatus === true && <Preprocessing ngrokURL={inputUrl} />}
    </>
  );
}
