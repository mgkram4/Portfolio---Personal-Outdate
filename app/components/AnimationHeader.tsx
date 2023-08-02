"use client";

import { Player } from "@lottiefiles/react-lottie-player";

export default function AnimationHeader() {
  return (
    <div className="flex justify-center items-center">
      <Player
        autoplay
        loop
        src="/devCoding.json"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
