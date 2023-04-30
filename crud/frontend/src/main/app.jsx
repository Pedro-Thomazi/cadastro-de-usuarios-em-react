import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

import Routes from './routes'
import Logo from '../components/templates/logo'
import Nav from '../components/templates/nav'
import Footer from '../components/templates/footer'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>


