import React from 'react';
import { BrowserRouter as BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from "./pages/Home";
import Service from './pages/Service';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Login from './pages/Login';

export default function App() {
    return (
        <BrowserRouter basename="/">
             <Header/>
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL + "/"}`} component={Home} />
                <Route exact path={`${process.env.PUBLIC_URL + "/service"}`} component={Service} />
                <Route exact path={`${process.env.PUBLIC_URL + "/about"}`} component={About} />
                <Route exact path={`${process.env.PUBLIC_URL + "/portfolio"}`} component={Portfolio} />
                <Route exact path={`${process.env.PUBLIC_URL + "/contact"}`} component={Contact} />
                <Route exact path={`${process.env.PUBLIC_URL + "/login"}`} component={Login} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}