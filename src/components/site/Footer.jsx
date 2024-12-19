import '../../../public/styles/components/footer.css'

import { getIcons } from '../Icons'
import { Icon } from '../Icon'
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const sections = [
    {
        'title': 'Sobre VIT',
        'baseURL': '/',
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
        'baseURL': '/servicios',
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
        'baseURL': '/blog',
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

const offices = [
    <>
        <strong>Buenos Aires</strong> - Argentina
    </>,
    <>
        <strong>Santiago</strong> - Chile
    </>
]

const socialItems = [
    {
        'link': 'https://www.instagram.com/virtualitsrl/',
        'icon': getIcons('header', 'social', 'instagram')
    },
    {
        'link': 'https://www.linkedin.com/company/virtual-it-srl/',
        'icon': getIcons('header', 'social', 'linkedin')
    },
    {
        'link': 'https://www.facebook.com/people/VIT/61551742214173/',
        'icon': getIcons('header', 'social', 'facebook')
    },
];


export const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate(); 

    
    const handleRedirect = (baseURL, sectionID) => {
        
        if (location.pathname !== baseURL) {
            
            navigate(`${baseURL}#${sectionID}`, { replace: true });
        } else {
            
            navigate(`#${sectionID}`);
        }
    };

    
    useEffect(() => {
        
        if (location.hash) {
            
            const section = document.querySelector(location.hash);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]); 

    return (
        <footer className='footer section'>
            <div className='footer__container footer-container section-container'>
                <div className='footer__container__top footer-top'>
                    <div className='footer__container__top__banner footer-banner'>
                        <a className='footer__container__top__banner__link footer-banner-link' href="">
                            <img className='footer__container__top__banner__link__logo footer-banner-logo'
                                src="/images/logo/horizontal-logo.webp" alt="Logo de VIT" />
                        </a>
                        <span className='footer__container__top__banner__callout footer-banner-callout'>
                            Somos una empresa de <strong>servicios de IT</strong> enfocada en ser el mejor aliado de tu negocio: una garantía de <strong>calidad, seguridad y modernidad</strong>.
                        </span>
                    </div>
                    <div className='footer__container__top__grid footer-grid'>
                        {
                            sections.map((section, index) => (
                                <div className='footer__container__top__grid__section footer-section' key={index}>
                                    <h4 className='footer__container__top__grid__section__title footer-section-title'>
                                        {section.title}
                                    </h4>
                                    <ul className='footer__container__top__grid__section__content footer-section-content'>
                                        {section.content.map((item, index) => (
                                            <li className='footer__container__top__grid__section__content__item footer-section-item' key={index}>
                                                <button
                                                    className='footer__container__top__grid__section__content__item__link footer-section-link'
                                                    onClick={() => handleRedirect(section.baseURL, item.id)} 
                                                >
                                                    {item.name}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                    <div className='footer__container__top__offices footer-offices'>
                        <h4 className='footer__container__top__offices__title footer-offices-title'>
                            Oficinas Comerciales
                        </h4>
                        <ul className='footer__container__top__offices__list footer-offices-list'>
                            {
                                offices.map((office, index) =>
                                    <li key={index} className='footer__container__top__offices__list__item footer-offices-item'>
                                        <Icon className={'footer__container__top__offices__list__item__icon footer-offices-icon'}>
                                            {getIcons('footer', undefined, 'ubication')}
                                        </Icon>
                                        <span className='footer__container__top__offices__list__item__text  footer-offices-text'>
                                            {office}
                                        </span>
                                    </li>
                                )
                            }
                        </ul>
                        <div className='footer__container__top__offices__zone footer-offices-zone'>
                            <span className='footer__container__top__offices__zone__ad footer-offices-ad'>
                                PRINCIPAL
                            </span>
                            <a href='https://maps.app.goo.gl/MADvtHiQJ3tZEMAy7' target='_blank' className='footer__container__top__offices__zone__ubication footer-offices-ubication'>
                                Cap. Joaquín Madariaga 718
                            </a>
                        </div>
                    </div>
                </div>
                <div className='footer__container__bottom footer-bottom'>
                    <span className='footer__container__bottom__rights footer-bottom-rights'>
                        <strong>Virtual IT</strong> 2024 ©. Todos los derechos reservados.
                    </span>
                    <div className='footer__container__bottom__social footer-social'>
                        <span className='footer__container__bottom__social__text footer-social-text'>
                            Conocé más sobre nosotros en
                        </span>
                        <div className='footer__container__bottom__social__icons footer-social-icons'>
                            {socialItems.map((item, index) => (
                                <a key={index} className='footer__container__bottom__social__link footer-social-link'
                                    target="_blank" rel="noopener noreferrer" href={item.link}>
                                    <Icon className={'footer__container__bottom__social__link__text footer-social-icon'}>
                                        {item.icon}
                                    </Icon>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}