"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

export default function AnimationHeader() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
      }}
      className="flex justify-center items-center"
    >
      <Player
        autoplay
        loop
        src="/devCoding.json"
        style={{ width: "100%", height: "100%" }}
      />
    </motion.div>
  );
}
