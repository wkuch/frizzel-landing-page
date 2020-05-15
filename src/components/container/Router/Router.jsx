import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from '../../pages/Home/Home'
import Layout from '../Layout/Layout'
import { NotFound } from '../../pages/NotFound/NotFound'
import { DataProtection } from '../../pages/DataProtection/DataProtection'
import { Impressum } from '../../pages/Impressum/Impressum'


export const RouterConfig = () => (
  <Router>
    
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/data-protection' component={DataProtection} />
        <Route exact path='/impressum' component={Impressum} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
)
