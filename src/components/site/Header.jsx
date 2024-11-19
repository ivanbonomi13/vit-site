import '../../../public/styles/components/header.css';

import { Link } from 'react-router-dom';

import { Icon } from '../Icon';
import { getIcons } from '../Icons';

const navItems = [
    {
        'name': 'Inicio',
        'path': '/',
        'icon': getIcons('header', 'nav', 'home')
    },
    {
        'name': 'Servicios',
        'path': '/servicios',
        'icon': getIcons('header', 'nav', 'services')
    },
    {
        'name': 'Equipo',
        'path': '/equipo',
        'icon': getIcons('header', 'nav', 'team')
    },
    {
        'name': 'Blog',
        'path': '/blog',
        'icon': getIcons('header', 'nav', 'blog')
    },
    {
        'name': 'TutoVit',
        'path': '/tutovit',
        'icon': getIcons('header', 'nav', 'tutovit')
    },
    {
        'name': 'Contacto',
        'path': '/contacto',
    },
];

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

export const Header = () => {
    return (
        <header className='header'>
            <div className='header__container header-container section-container'>
                <div className='header__container__brand header-brand'>
                    <Link className='header__container__brand__link header-logo-link' to='/'>
                        <img className='header__container__link__logo header-logo' src='../../../public/images/logo/horizontal-logo.webp' alt='Logo de VIT' />
                    </Link>
                </div>
                <nav className='header__container__nav header-nav'>
                    <ul className='header__container__nav__list nav-list not-selectable'>
                        {navItems.map((item, index) => (
                            <li key={index} className={`header__container__nav__list__item nav-item${item.name === 'Contacto' ? ' contact-button' : ''}`}>
                                <Link className='header__container__nav__list__item__link nav-link' to={item.path}>
                                    {item.icon && (
                                        <Icon className={'header__container__nav__list__item__link__icon nav-link-icon'}>
                                            {item.icon}
                                        </Icon>
                                    )}
                                    <span className='header__container__nav__list__item__link__text nav-link-text'>
                                        {item.name}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='header__container__social header-social'>
                    {socialItems.map((item, index) => (
                        <a key={index} className='header__container__social__link header-social-link'
                            target="_blank" rel="noopener noreferrer" href={item.link}>
                            <Icon className={'header__container__social__link__icon header-social-icon'}>
                                {item.icon}
                            </Icon>
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};
