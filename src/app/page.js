import React from "react";
import Head from "next/head";

export default function Home() {
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
      {/* Overlay Content */}

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center py-4">
        <strong>&copy; 2025 GreenGuru. All Rights Reserved.</strong>
      </footer>
    </div>
  );
}
