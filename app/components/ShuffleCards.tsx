"use client";

import {
  MotionValue,
  motion,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

type ListOrderItem = "front" | "middle" | "back";

const ShuffleCards = () => {
  const dragProgress = useMotionValue(0);
  const [order, setOrder] = useState<ListOrderItem[]>([
    "front",
    "middle",
    "back",
  ]);

  const handleDragEnd = () => {
    const x = dragProgress.get();
    if (x <= -50) {
      const orderCopy = [...order];
      orderCopy.unshift(orderCopy.pop() as ListOrderItem);
      setOrder(orderCopy);
    }
  };

  useEffect(() => {
    const FIVE_SECONDS = 5000;

    const intervalRef = setInterval(() => {
      const x = dragProgress.get();
      if (x === 0) {
        setOrder((pv) => {
          const orderCopy = [...pv];
          orderCopy.unshift(orderCopy.pop() as ListOrderItem);
          return orderCopy;
        });
      }
    }, FIVE_SECONDS);

    return () => clearInterval(intervalRef);
  }, []);

  return (
    <div className="grid place-content-center overflow-hidden min-w-full px-8 py-24 text-black mr-8">
      <motion.div
        whileTap={{ scale: 0.985 }}
        className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]"
      >
        <Card
          imgUrl="/cats1.png"
          handleDragEnd={handleDragEnd}
          dragProgress={dragProgress}
          position={order[0]}
        />
        <Card
          imgUrl="/cats2.png"
          handleDragEnd={handleDragEnd}
          dragProgress={dragProgress}
          position={order[1]}
        />
        <Card
          imgUrl="/cats4.png"
          handleDragEnd={handleDragEnd}
          dragProgress={dragProgress}
          position={order[2]}
        />
      </motion.div>
    </div>
  );
};

interface CardProps {
  handleDragEnd: Function;
  dragProgress: MotionValue<number>;
  position: ListOrderItem;
  imgUrl: string;
}

const Card = ({ handleDragEnd, dragProgress, position, imgUrl }: CardProps) => {
  const [dragging, setDragging] = useState(false);

  const dragX = useMotionValue(0);

  useMotionValueEvent(dragX, "change", (latest) => {
    if (typeof latest === "number" && dragging) {
      dragProgress.set(latest);
    } else {
      dragProgress.set(0);
    }
  });

  const onDragStart = () => setDragging(true);

  const onDragEnd = () => {
    setDragging(false);
    handleDragEnd();
  };

  const x = position === "front" ? "0%" : position === "middle" ? "33%" : "66%";
  const rotateZ =
    position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg";
  const zIndex = position === "front" ? "2" : position === "middle" ? "1" : "0";

  const draggable = position === "front";

  return (
    <motion.div
      style={{
        zIndex,
        x: dragX,
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
      dragListener={draggable}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{
        duration: 0.35,
      }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-gray-200  p-6 shadow-xl backdrop-blur-md ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    ></motion.div>
  );
};

export default ShuffleCards;
