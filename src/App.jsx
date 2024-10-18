import '../public/styles/main.css'
import '../public/styles/font.css'
import '../public/styles/classes.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/site/Header'
import { Footer } from './components/site/Footer'
import { LandingPage } from './components/pages/home/LandingPage'

export const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                {/* <Route path="/data" element={<></>} />
                <Route path="/about" element={<></>} />
                <Route path="/contact" element={<></>} /> */}
            </Routes>
            <Footer />
        </Router>
    )
}