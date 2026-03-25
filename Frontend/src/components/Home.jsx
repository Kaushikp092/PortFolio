import { TypingAnimation } from "@/components/ui/typing-animation";
import { TextEffect } from "../../components/motion-primitives/text-effect";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
// import man from "@/assets/man.png";
import personal from "@/assets/personal.jpeg";
const Home = () => {
	const [startTyping, setStartTyping] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setStartTyping(true);
		}, 2800); // Smooth transition after TextEffects ~2s total
		return () => clearTimeout(timer);
	}, []);
	return (
		<>
			<div
				className="flex flex-col md:flex-row items-center justify-between gap-6"
				style={{
					maxWidth: "1100px",
					padding: "2rem 3rem 3rem",
					margin: "6rem auto",
				}}
			>
				<div className="flex-1">
					<div
						className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.02em] text-white/75"
						style={{
							marginBottom: "2rem",
						}}
					>
						<TextEffect
							per="word"
							delay={0.5}
							variants={{
								container: {
									hidden: {
										opacity: 0,
									},
									visible: {
										opacity: 1,
										transition: {
											staggerChildren: 0.05,
										},
									},
								},
								item: {
									hidden: {
										opacity: 0,
										rotateX: 90,
										y: 10,
									},
									visible: {
										opacity: 1,
										rotateX: 0,
										y: 0,
										transition: {
											duration: 0.02,
										},
									},
								},
							}}
						>
							Hey There! 👋
						</TextEffect>
						<br />
						<TextEffect per="char" delay={1.3}>
							I'm Kaushik Patil
						</TextEffect>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 3.1 }}
					>
						<TypingAnimation
							className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.02em] text-blue-400"
							style={{
								marginBottom: "2rem",
							}}
							words={["Junior web developer", "Learning web dev", "MERN Stack"]}
						/>
					</motion.div>
				</div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						delay: 2.1,
						ease: "easeIn",
					}}
					className="flex justify-center items-center"
				>
					<img
						src={personal}
						alt="Kaushik Patil"
						className="w-75 h-75 rounded-full object-cover "
					/>
				</motion.div>
			</div>
		</>
	);
};

export default Home;
