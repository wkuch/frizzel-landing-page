import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from '../../pages/Home/Home'
import Contact from '../../pages/Contact/Contact'
import Layout from '../Layout/Layout'
import { NotFound } from '../../pages/NotFound/NotFound'

export const RouterConfig = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path='/kontakt' component={Contact} />
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
)
