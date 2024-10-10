import '../public/styles/main.css'
import '../public/styles/font.css'
import '../public/styles/classes.css'

import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AboutUs } from './components/AboutUs'

export const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <AboutUs />
        </>
    )
}