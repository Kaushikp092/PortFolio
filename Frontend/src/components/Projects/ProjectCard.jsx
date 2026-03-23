import { InView } from "../ui/in-view";
import "./ProjectCard.css";

const ProjectCard = ({
	image,
	title,
	description,
	tech,
	liveLink,
	githubLink,
}) => {
	return (
		<>
			<InView
				variants={{
					hidden: {
						opacity: 0,
						x: 100,
					},
					visible: {
						opacity: 1,
						x: 0,
					},
				}}
				transition={{ duration: 0.3, ease: "easeInOut" }}
				viewOptions={{ margin: "0px 0px -350px 0px" }}
			>
				<div className="project-card">
					<img src={image} alt={title} className="project-image" />
					<div className="project-content">
						<h3>{title}</h3>
						<p className="project-desc">{description}</p>
						<p className="project-tech">
							<strong>Tech:</strong>
							{tech}
						</p>
						<div className="project-links">
							<a href={liveLink} target="_blank" rel="noopener noreferrer">
								Live Demo
							</a>
							<a href={githubLink} target="_blank" rel="noopener noreferrer">
								Github
							</a>
						</div>
					</div>
				</div>
			</InView>
		</>
	);
};

export default ProjectCard;
