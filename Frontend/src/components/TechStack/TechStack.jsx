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
		<div>
			<h2 className="text-center text-white/75 text-2xl md:text-4xl lg:text-5xl font-semibold mb-8">
				Tech Stack
			</h2>
			<div className="flex flex-wrap justify-center gap-6">
				{logos.map((logo) => (
					<div
						key={logo.title}
						className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 flex items-center gap-3 hover:scale-105 transition"
					>
						<img src={logo.img} alt={logo.title} className="h-8 w-auto" />

						<span className="text-white text-sm font-medium">{logo.title}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default TechStack;
