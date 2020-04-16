import React from 'react'
import PropTypes from 'prop-types'

const Project = ({ title, description, source }) => {
  return (
    <div>
      {title}, {description}, {source}
    </div>
  )
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  source: PropTypes.string,
}

export default Project
