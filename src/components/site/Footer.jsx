import '../../../public/styles/components/footer.css'
import { Icon } from '../Icon'

const sections = [
    {
        'title': 'Sobre VIT',
        'content': [
            {
                'name': 'Stack',
                'id': 'stack'
            },
            {
                'name': 'Clientes',
                'id': 'clients'
            },
            {
                'name': 'Filosofía',
                'id': 'philosophy'
            },
            {
                'name': 'Equipo',
                'id': 'team'
            }
        ]
    },
    {
        'title': 'Servicios',
        'content': [
            {
                'name': 'Outsourcing IT',
                'id': 'outsourcing'

            },
            {
                'name': 'Desarrollo',
                'id': 'development'

            },
            {
                'name': 'DevOps',
                'id': 'devops'

            }
        ]
    },
    {
        'title': 'Blog',
        'content': [
            {
                'name': 'Tecnologías',
                'id': 'technology'

            },
            {
                'name': 'Novedades',
                'id': 'news'

            },
            {
                'name': 'Herramientas VIT',
                'id': 'vit-tools'

            }
        ]
    }
]

const offices = ['Buenos Aires - Argentina', 'Santiago -  Chile']

export const Footer = () => {
    return (
        <footer className='footer section'>
            <div className='footer__container footer-container section-container'>
                <div className='footer__container__banner footer-banner'>
                    <img className='footer__container__banner__logo footer-banner-logo'
                        src="../../public/images/logo/horizontal-logo.webp" alt="Logo de VIT" />
                    <span className='footer__container__banner__callout footer-banner-callout'>
                        Servicios de calidad.<br />
                        Soluciones modernas.
                    </span>
                </div>
                <div className='footer__container__grid footer-grid'>
                    {
                        sections.map((section, index) =>
                            <div className='footer__container__grid__section footer-grid-section' key={index}>
                                <h4 className='footer__container__grid__section__title footer-grid-section-title'>
                                    {section.title}
                                </h4>
                                <ul className='footer__container__grid__section__content footer-grid-section-content'>
                                    {section.content.map((item, index) =>
                                        <li className='footer__container__grid__section__content__item footer-grid-section-content-item' key={index}>
                                            <a className='footer__container__grid__section__content__item__link footer-grid-section-content-item-link' href={`#${item.id}`}>
                                                {item.name}
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )
                    }
                </div>
                <div className='footer__container__offices footer-offices'>
                    <h4 className='footer__container__offices__title footer-offices-title'>
                        Oficinas Comerciales
                    </h4>
                    <ul className='footer__container__offices__list footer-offices-list'>
                        {
                            offices.map((office, index) =>
                                <li key={index} className='footer__container__offices__list__item footer-offices-list-item'>
                                    <Icon className={'footer__container__offices__list__item__icon footer-offices-list-item-icon'}>
                                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                    </Icon>
                                    <span className='footer__container__offices__list__item__text  footer-offices-list-item-text'>
                                        {office}
                                    </span>
                                </li>
                            )
                        }
                    </ul>
                    <span className='footer__container__offices__rights footer-offices-rights'>
                        Virtual IT 2023 ©. Todos los derechos reservados.
                    </span>
                </div>
            </div>
        </footer>
    )
}