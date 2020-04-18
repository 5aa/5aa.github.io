import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import './BlogEntry.scss'

const BlogEntry = ({ title, date, link }) => {
  return (
    <div
      class="blog-post"
      data-aos="fade-up"
      data-aos-easing="ease-out-quad"
      data-aos-duration="800"
    >
      <Link to={link}>{title}</Link>
      <div class="date">Published {date}</div>
    </div>
  )
}

BlogEntry.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
}

export default BlogEntry
