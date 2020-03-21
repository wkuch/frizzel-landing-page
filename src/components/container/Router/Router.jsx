import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from '../../pages/Home/Home'
import Contact from '../../pages/Contact/Contact'
import Layout from '../Layout/Layout'

export const RouterConfig = () => (
  <Router>
    <Switch>
      <Layout>
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/' component={Home} />
      </Layout>
    </Switch>
  </Router>
)
