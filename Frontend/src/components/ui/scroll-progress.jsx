import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils"

export function ScrollProgress({
  className,
  ref,
  ...props
}) {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  
  // Smooth spring animation for the progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Fade in on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed left-0 right-0 top-20 z-999 h-0.75 origin-left",
        isVisible ? "opacity-100" : "opacity-0",
        "transition-opacity duration-500 ease-out",
        className
      )}
      style={{
        scaleX,
      }}
      {...props}
    >
      {/* Progress bar background */}
      <div className="absolute inset-0 bg-white/10" />
      
      {/* Animated progress fill with gradient and glow */}
      <motion.div
        className="h-full w-full origin-left"
        style={{
          background: "linear-gradient(90deg, #A97CF8 0%, #F38CB8 50%, #FDCC92 100%)",
          boxShadow: "0 0 10px rgba(169, 124, 248, 0.5), 0 0 20px rgba(243, 140, 184, 0.3)",
        }}
      />
      
    </motion.div>
  );
}

