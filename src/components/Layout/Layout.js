import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import 'aos/dist/aos.css'
import Header from '../Header'
import Footer from '../Footer'
import './Layout.scss'

const Layout = ({ children }) => {
  let AOS

  useEffect(() => {
    if (AOS) {
      AOS.refresh()
    } else {
      const AOS = require('aos')
      AOS.init()
    }
  })

  return (
    <div class="container">
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
