// IMPORT STYLES

import '../public/styles/main.css'
import '../public/styles/font.css'
import '../public/styles/classes.css'

// IMPORT MODULES

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// IMPORT COMPONENTS

import { Header } from './components/site/Header'
import { Footer } from './components/site/Footer'
import { LandingPage } from './components/pages/home/LandingPage'
import { Services } from './components/pages/services/Services'

export const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/servicios" element={<Services/>} />
            </Routes>
            <Footer />
        </Router>
    )
}