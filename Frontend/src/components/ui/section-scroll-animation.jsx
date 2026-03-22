import {
	motion,
	useScroll,
	useTransform,
	useMotionValueEvent,
} from "motion/react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export function SectionScrollAnimation({ children, className, id, ...props }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
	const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

	const [scrollDirection, setScrollDirection] = useState("down");
	let lastScrollY = useRef(0);

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		if (latest > lastScrollY.current) {
			setScrollDirection("down");
		} else {
			setScrollDirection("up");
		}
		lastScrollY.current = latest;
	});

	return (
		<motion.section
			ref={ref}
			id={id}
			className={cn("relative w-full", className)}
			style={{
				y,
				opacity,
				transformOrigin: "center center",
			}}
			{...props}
		>
			{children}
		</motion.section>
	);
}
