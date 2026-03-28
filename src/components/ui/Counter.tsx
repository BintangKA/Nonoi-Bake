"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Counter({
  value,
  duration = 2,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}) {
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => {
    return new Intl.NumberFormat("id-ID", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(Number(latest.toFixed(decimals)));
  });

  const [display, setDisplay] = useState("0");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplay(latest);
    });

    return () => unsubscribe();
  }, [rounded]);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: duration,
        ease: "easeOut",
      });

      return controls.stop;
    }
  }, [isInView, count, value, duration]);

  return (
    <motion.span ref={ref}>
      {display}
      {suffix}
    </motion.span>
  );
}
