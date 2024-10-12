import { AboutHead } from './AboutHead'
import '../../public/styles/components/clients.css'
const clients = ['osep', 'adita', 'epidata', 'iosfa', 'sms-chile', 'abc-tech', 'osfatlyf', 'sindicato-luz-fuerza']

export const Clients = () => {
    return (
        <div className='about__container__content__clients  about-clients'>
            <AboutHead section={'clients'} number={1} callout={'Quienes confían en nosotros'} title={'Nuestros Clientes'} />
            <div className='about__container__content__clients__locations clients-location'>
                <video className='about__container__content__clients__locations__video clients-location-video'
                    autoPlay loop muted>
                    <source src='../../public/videos/vit-clients.mp4' type='video/mp4' />
                </video>
                <span className='about__container__content__client__locations__callout clients-location-callout not-selectable'>
                    De <strong>VIT</strong><br />para el <strong>Mundo</strong>
                </span>
            </div>
            <ul className='about__container__content__clients__list clients-list'>
                {
                    clients.map((client, index) =>
                        <li key={index} className='about__container__content__clients__list__item clients-list-item'>
                            <img className='about__container__content__clients__list__item__logo clients-list-item-logo'
                                src={`../../public/images/clients/${client}-logo.webp`} alt={`Logo de ${client.toUpperCase()}`} />
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
