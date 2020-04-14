import React from 'react'

import Layout from '../components/Layout'
import Helmet from 'react-helmet'

const NotFoundPage = () => (
  <Layout>
    <Helmet title='404: Not found' />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist.</p>
  </Layout>
)

export default NotFoundPage
