import React from 'react'
import PropTypes from 'prop-types'
import './Project.scss'

const Project = ({ title, description, source }) => {
  return (
    <div
      class="project-wrapper"
      data-aos="fade-up"
      data-aos-easing="ease-out-quad"
      data-aos-duration="800"
    >
      <a href={source} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
      <div class="project-description">{description}</div>
    </div>
  )
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  source: PropTypes.string,
}

export default Project
