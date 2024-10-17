import '../../public/styles/components/about.css'
import {Stack} from './Stack'
import { Clients } from './Clients'
import { Philosophy } from './Philosophy'
import { Team } from './Team'

export const AboutUs = () => {
    return (
        <section className='about section'>
            <div className='about__container about-container section-container'>
                <div className='about__container__content about-content section-content'>
                    <Stack />
                    <Clients />
                    <Philosophy />
                    <Team />
                </div>
            </div>
        </section>
    )
}
