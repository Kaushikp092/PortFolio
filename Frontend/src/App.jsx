import Background from "./components/Background";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Projects/Project";
import Form from "./components/Contact/Contact";
import TechStack from "./components/TechStack/TechStack";
import { SectionScrollAnimation } from "./components/ui/section-scroll-animation";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
	return (
		<>
			<SpeedInsights />
			<Background
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					zIndex: -2,
				}}
			/>
			<Navbar logo="KP" />
			<ScrollProgress />
			<main className="page-content">
				<SectionScrollAnimation id="home">
					<Home />
				</SectionScrollAnimation>
				<SectionScrollAnimation id="about">
					<About />
				</SectionScrollAnimation>

				<SectionScrollAnimation id="techstack">
					<TechStack />
				</SectionScrollAnimation>

				<SectionScrollAnimation id="projects">
					<Project />
				</SectionScrollAnimation>

				<SectionScrollAnimation id="contact">
					<Form />
				</SectionScrollAnimation>

				<Footer />
			</main>
		</>
	);
}

export default App;
