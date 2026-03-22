import ProjectCard from "./ProjectCard";
import weatherApp from "@/assets/weatherApp.jpeg";
import crypto from "@/assets/crypto.jpeg";
import DailyExpenseTracker from "@/assets/DailyExpenseTracker.png";

const projects = [
	{
		title: "Daily Expenses Tracker",
		description: "Make easy overview of your daily expenses",
		tech: "React, React Router, ReCharts.js",
		image: DailyExpenseTracker,
		liveLink: "https://daily-expenses-tracker-chi.vercel.app/",
		githubLink: "https://github.com/Kaushikp092/Daily-Expenses-Tracker",
	},
	{
		title: "Weather App",
		description: "fetch real time weather condition",
		tech: "React, Material UI, OpenWeatherApi",
		image: weatherApp,
		liveLink: "https://weather-app-virid-one-68.vercel.app",
		githubLink: "https://github.com/Kaushikp092/WeatherApp",
	},
	{
		title: "Crypto-Dash",
		description: "fetch current Crypto coins details",
		tech: "React",
		image: crypto,
		liveLink: "https://crypto-dash-six-ruddy.vercel.app/",
		githubLink: "https://github.com/Kaushikp092/crypto-dash",
	},
];
const Project = () => {
	return (
		<>
			<section className="projects-section">
				<span
					className="flex justify-center text-2xl md:text-4xl lg:text-5xl font-semibold  text-white/75"
					style={{
						marginTop: "5rem",
						marginBottom: "2rem",
					}}
				>
					My Projects
				</span>

				<div className="projects-container">
					{projects.map((p, i) => (
						<ProjectCard key={i} {...p} />
					))}
				</div>

				<div
					className="flex justify-center items-center md:text-2xl lg:text-4xl font-semibold leading-tight tracking-[-0.02em] text-white/75 max-w-10/12"
					style={{
						margin: "2rem",
					}}
				>
					Some Projects are currently under development and will be added to
					this portfolio soon.
				</div>
			</section>
		</>
	);
};

export default Project;
