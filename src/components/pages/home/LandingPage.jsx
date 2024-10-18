import { Hero } from './hero/Hero'
import { Data } from './data/Data'
import { AboutUs } from './about/AboutUs'
import { Contact } from './contact/Contact'

export const LandingPage = () => {
    return (
        <>
            <Hero />
            <Data />
            <AboutUs />
            <Contact />
        </>
    )
}