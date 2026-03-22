import { cn } from "@/lib/utils";
import { InfiniteSlider } from "../../../components/motion-primitives/infinite-slider";

const TechStack = () => {
	const logos = [
		{ title: "HTML", img: "/html.svg" },
		{ title: "CSS", img: "/css.svg" },
		{ title: "JS", img: "/js.svg" },
		{ title: "TAILWIND", img: "/tailwindcss.svg" },
		{ title: "REACT", img: "/react.svg" },
		{ title: "MONGODB", img: "/mongodb.svg" },
		{ title: "NODE", img: "/nodejs.svg" },
		{ title: "EXPRESS", img: "/express.svg" },
		{ title: "VERCEL", img: "/vercel.svg" },
		{ title: "RENDER", img: "/render.svg" },
	];
	return (
		<div
			className="w-screen flex flex-col items-center justify-center"
			style={{
				paddingTop: "5rem",
				paddingBottom: "2rem",
				paddingLeft: "2rem",
				paddingRight: "2rem",
			}}
		>
			<span
				className="flex justify-center text-2xl md:text-4xl lg:text-5xl font-semibold text-white/75"
				style={{ marginBottom: "4rem" }}
			>
				Tech Stack
			</span>
			<div style={{ marginBottom: "2rem" }} />
			<InfiniteSlider
				speed={65}
				gap={40}
				className={cn("w-full py-20 md:py-24")}
			>
				{logos.map((logo) => (
					<div
						key={logo.title}
						className="group bg-linear-to-br from-white/5 via-black/30 to-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 md:p-10 flex items-center justify-center gap-6 mx-3 md:mx-4 lg:mx-6 shadow-2xl shadow-black/20 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 cursor-pointer min-h-30 md:min-h-35 min-w-45 md:min-w-50 shrink-0"
					>
						<img
							src={logo.img}
							alt={logo.title}
							className="h-9 md:h-11 lg:h-13 w-auto shrink-0 drop-shadow-lg group-hover:drop-shadow-2xl transition-all"
						/>
						<span className="text-white/90 text-sm md:text-base font-semibold transition-colors duration-300 tracking-wide">
							{logo.title}
						</span>
					</div>
				))}
			</InfiniteSlider>
		</div>
	);
};

export default TechStack;
