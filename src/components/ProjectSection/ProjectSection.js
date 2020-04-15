import React from 'react'
import useProjects from '../../hooks/use-projects'
import Project from './components/Project'

const ProjectSection = () => {
	const projects = useProjects()
  
  return (
    <div>
      <h1>Portfolio</h1>
      <p>Here are some projects.</p>
      <div>
        {projects.map(p => (
          <Project {...p} key={p.title} />
        ))}
      </div>
    </div>
  )
}

export default ProjectSection
