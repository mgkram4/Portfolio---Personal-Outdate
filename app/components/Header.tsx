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
    <div className="h-screen flex flex-col items-center justify-center mx-4 sm:mx-8">
      <div className="max-w-xl">
        <div className="flex flex-col items-center justify-center">
          <div
            className={`flex justify-center items-center bg-slate-50 font-semibold text-4xl sm:text-5xl p-4 sm:p-6 rounded-xl ${
              showText ? "opacity-100 animate-fadeIn" : "opacity-0"
            } transition-opacity`}
          >
            Hi, I&apos;m&nbsp;Mark Garcia
          </div>
        </div>

        <div
          className={`flex justify-center items-center underline bg-slate-50 font-semibold text-2xl sm:text-4xl p-2 sm:p-4 m-4 sm:m-6 rounded-xl ${
            showText ? "opacity-100 animate-fadeIn" : "opacity-0"
          } transition-opacity`}
        >
          FullStack Web Developer
        </div>

        <div className="flex px-2 sm:px-4 items-center">
          <Player
            autoplay
            loop
            src="/dev.json"
            style={{ width: "400px", height: "400px" }}
          />
        </div>
      </div>
      <style jsx>
        {`
          @keyframes fadeInAnimation {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-in;
          }
        `}
      </style>
    </div>
  );
}
