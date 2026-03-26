import { useEffect, useState } from "react";
import "./Navbar.css";
import Menu from "./Menu";
import { AnimatedBackground } from "../../../components/motion-primitives/animated-background";
const NAVBAR_HEIGHT = 80; // keep in sync with CSS

const Navbar = ({ logo }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);

		// cleanup (important in SPA)
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (id) => {
		const el = document.getElementById(id);
		if (!el) return;

		const yOffset = -NAVBAR_HEIGHT;
		const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

		window.scrollTo({
			top: y,
			behavior: "smooth",
		});

		setIsOpen(false);
	};

	return (
		<nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
			<div className="logo">{logo}</div>

			<Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

			<ul className={`nav-links ${isOpen ? "open" : ""}`}>
				<AnimatedBackground
					className="rounded-lg bg-zinc-100/20 backdrop-blur-sm p-1"
					transition={{
						type: "spring",
						bounce: 0.2,
						duration: 0.3,
					}}
					enableHover
				>
					<button
						data-id="Home"
						type="button"
						className="px-6 py-3 text-lg font-medium text-white/80 transition-all hover:text-white hover:px-8 hover:py-4 data-[checked=true]:text-white"
						onClick={() => scrollToSection("home")}
					>
						Home
					</button>
					<button
						data-id="About"
						type="button"
						className="px-6 py-3 text-lg font-medium text-white/80 transition-all hover:text-white hover:px-8 hover:py-4 data-[checked=true]:text-white"
						onClick={() => scrollToSection("about")}
					>
						About
					</button>
					<button
						data-id="Project"
						type="button"
						className="px-6 py-3 text-lg font-medium text-white/80 transition-all hover:text-white hover:px-8 hover:py-4 data-[checked=true]:text-white"
						onClick={() => scrollToSection("projects")}
					>
						Project
					</button>
					<button
						data-id="Contact"
						type="button"
						className="px-6 py-3 text-lg font-medium text-white/80 transition-all hover:text-white hover:px-8 hover:py-4 data-[checked=true]:text-white"
						onClick={() => scrollToSection("contact")}
					>
						Contact
					</button>
				</AnimatedBackground>
			</ul>
		</nav>
	);
};

export default Navbar;
