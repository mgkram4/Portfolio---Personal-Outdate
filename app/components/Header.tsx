"use client";

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Header() {
  return (
    <div className="min-h-screen flex justify-center mx-auto sm:mx-8">
      <div className="max-w-xl">
        <div className="flex flex-col items-center justify-center">
          <Player
            autoplay
            loop
            src="/devChad.json"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="text-3xl font-bold text-blue-700">
            Hi, I&apos;m Mark Garcia
          </div>
          <div className="text-lg text-gray-700 mt-2">
            Welcome to my awesome website!
          </div>
        </div>
      </div>
    </div>
  );
}
