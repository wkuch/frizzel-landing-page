import 'bootstrap/dist/css/bootstrap.css'
import "react-image-gallery/styles/css/image-gallery.css";
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { RouterConfig } from './components/container/Router/Router'
import * as serviceWorker from './serviceWorker'

window.apiURL = 'http://localhost:1337/'
ReactDOM.render(<RouterConfig />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
