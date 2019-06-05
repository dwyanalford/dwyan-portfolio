import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// the routes components for main navigation
import App from './App'
import About from './components/pages/About'
import PortfolioFull from './components/pages/PortfolioFull'
import Contact from './components/pages/Contact'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
<Router>
    <Switch>
        <Route exact path='/' component={App}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/portfolio' component={PortfolioFull}></Route>
        <Route path='/contact' component={Contact}></Route>
    </Switch>
</Router>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
