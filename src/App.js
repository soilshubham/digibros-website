import React, { Component } from 'react'
import './App.scss'

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, AboutPage, ServicesPage, ContactPage } from './pages';


const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/about">
                    <AboutPage />
                </Route>
                <Route path="/services">
                    <ServicesPage />
                </Route>
            </Switch>
        </Router>
    )
}
export default App;


