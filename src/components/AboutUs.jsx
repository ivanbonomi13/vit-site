import '../../public/styles/components/about.css'
import { Clients } from './Clients'
import { Philosophy } from './Philosophy'
import { Team } from './Team'

export const AboutUs = () => {
    return (
        <section className='about section'>
            <div className='about__container about-container section-container'>
                <h2 className='about__container__title about-title section-title not-selectable'>
                    Sobre Nosotros
                </h2>
                <div className='about__container__content about-content section-content'>
                    <Clients />
                    <Philosophy />
                    <Team />
                </div>
            </div>
        </section>
    )
}
