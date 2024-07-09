'use client';
import React, { useEffect } from 'react';

const PhoneNumberBig = ({ phoneNumber, setShowPhoneNumber }) => {
  useEffect(() => {
    console.log('Component mounted');
    const videoElement = document.getElementById('background-video');
    if (videoElement) {
      console.log('Video element found:', videoElement);
    } else {
      console.error('Video element not found');
    }
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <video
        id="background-video"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img
        src="/logo-white.svg"
        alt="Hec the Handyman Logo"
        className="absolute top-4 left-4 w-32 h-auto z-20"
      />
      <button
        className="absolute top-4 right-4 text-white z-20"
        onClick={() => setShowPhoneNumber(false)}
      >
        X
      </button>
      <div className="relative text-6xl font-bold text-white text-center z-20">
        <a href={`tel:+1${phoneNumber}`}>{phoneNumber}</a>
        <p className="mt-4 text-2xl">Call us today to get a free estimate scheduled!</p>
        <small className="text-center text-xs block mt-4">Click the number to call now</small>
      </div>
    </div>
  );
}

export default PhoneNumberBig;
