import React from 'react'
import useProjectMetadata from '../../hooks/use-project-metadata'
import Project from './components/Project'
import './ProjectSection.scss'

const ProjectSection = () => {
  const projects = useProjectMetadata()

  return (
    <div class='portfolio-container'>
      <h1 
        class='portfolio-title'
        data-aos='fade-up'
        data-aos-easing='ease-out-quad'
        data-aos-duration='800'>Portfolio</h1>
      <>
        {projects.map(({ node }) => (
          <Project {...node} key={node.id} />
        ))}
      </>
    </div>
  )
}

export default ProjectSection
