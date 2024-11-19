import { AboutHead } from './AboutHead'
import '../../../../../public/styles/components/clients.css'
const clients = [
    {
        'name': 'osep',
        'url': 'https://osepmendoza.com.ar/web/'
    },
    {
        'name': 'adita',
        'url': 'https://www.aditasrl.com.ar/'
    },
    {
        'name': 'epidata',
        'url': 'https://epidata.net/es/'
    },
    {
        'name': 'iosfa',
        'url': 'https://iosfa.gob.ar/'
    },
    {
        'name': 'sms-chile',
        'url': 'https://smslatam.com/'
    },
    {
        'name': 'abc-tech',
        'url': 'https://abctech.com.ar/'
    },
    {
        'name': 'osfatlyf',
        'url': 'https://osfatlyf.org/'
    },
    {
        'name': 'sindicato-luz-fuerza',
        'url': 'https://www.sind-luzyfuerza-cap.org.ar/slyf/'
    }
]

export const Clients = () => {
    return (
        <div id='clients' className='about__container__content__clients  about-clients'>
            <AboutHead section={'clients'} number={2} callout={'Quienes confían en nosotros'} title={'Nuestros Clientes'} />
            <div className='about__container__content__clients__locations clients-location'>
                <video className='about__container__content__clients__locations__video clients-location-video'
                    autoPlay loop muted>
                    <source src='/videos/vit-clients.mp4' type='video/mp4' />
                </video>
                <span className='about__container__content__client__locations__callout clients-location-callout not-selectable'>
                    De <strong>VIT</strong><br />para el <strong>Mundo</strong>
                </span>
            </div>
            <ul className='about__container__content__clients__list clients-list'>
                {
                    clients.map((client, index) =>
                        <li key={index} className='about__container__content__clients__list__item clients-list-item'>
                            <a target='_blank' className='about__container__content__clients__list__item__link clients-list-link' href={client.url}>
                                <img className='about__container__content__clients__list__item__logo clients-list-item-logo'
                                    src={`/images/clients/${client.name}-logo.webp`} alt={`Logo de ${client.name.toUpperCase()}`} />
                            </a>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
