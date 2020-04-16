import React from 'react'
import useProjectMetadata from '../../hooks/use-project-metadata'
import Project from './components/Project'

const ProjectSection = () => {
	const projects = useProjectMetadata()
  
  return (
    <div>
      <h1>Portfolio</h1>
      <p>Here are some projects.</p>
      <div>
        {projects.map(({ node }) => (
          <Project {...node} key={node.id} />
        ))}
      </div>
    </div>
  )
}

export default ProjectSection
