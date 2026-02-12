import './ProjectCard.css'

const ProjectCard = ({image,title,description,tech,liveLink,githubLink}) => {
  return (
    <div className='project-card'>
        <img src={image} alt={title} className='project-image' />
        <div className="project-content">
            <h3>{title}</h3>
            <p className="project-desc">{description}</p>
            <p className="project-tech">
                <strong>Tech:</strong>{tech}
            </p>
            <div className="project-links">
                <a href={liveLink} target='_blank' rel='noopener noreferrer'>Live Demo</a>
                <a href={githubLink} target='_blank' rel='noopener noreferrer'>Github</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
