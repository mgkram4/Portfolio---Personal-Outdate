"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Header() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mx-auto sm:mx-8">
      <div className="max-w-xl">
        <div className="flex flex-col items-center justify-center">
          <div
            className={`flex justify-center items-center font-semibold text-4xl sm:text-5xl p-4 sm:p-6 rounded-xl ${
              showText ? "opacity-100 animate-fadeIn" : "opacity-0"
            } transition-opacity`}
          >
            Hi, I&apos;m&nbsp;Mark Garcia
          </div>
        </div>

        <div
          className={`flex justify-center items-center underline  font-semibold text-2xl sm:text-4xl p-2 sm:p-4 m-4 sm:m-6 rounded-xl ${
            showText ? "opacity-100 animate-fadeIn" : "opacity-0"
          } transition-opacity`}
        >
          FullStack Web Developer
        </div>

        <div className="flex justify-center items-center  ">
          {/* Update w-1/2 and h-1/2 to adjust the player size */}
          <Player
            autoplay
            loop
            src="/devCoding.json"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
