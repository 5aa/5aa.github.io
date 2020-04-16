import React from 'react'
import PropTypes from 'prop-types'

const BlogEntry = ({ title, date, link }) => {
  return (
    <div>
      <a href={link}>
        <div>{title}</div>
      </a>
      <div>{date}</div>
    </div>
  )
}

BlogEntry.propTypes = {
  title: PropTypes.string, 
  date: PropTypes.string, 
}

export default BlogEntry
