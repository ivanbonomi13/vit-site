import '../../../../../public/styles/components/hero.css'

import { useState } from 'react';

import { getIcons } from '../../../Icons';

import { HeroBackground } from './HeroBackground'
import { Icon } from '../../../Icon'

export const Hero = () => {
    const [mouseOver, setMouseOver] = useState(false)
    return (
        <main className='hero section'>
            <div className='hero__container hero-container section-container'>
                <HeroBackground mouseOverCta={mouseOver}/>
                <div className='hero__container__content hero-content'>
                    <div className='hero__container__content__ad hero-top-ad'>
                        <span className='hero__container__content__ad__box hero-top-ad-box not-selectable'>
                            NUEVO POST
                        </span>
                        <a href='' className='hero__container__content__ad__link hero-top-ad-link'>
                            <span className='hero__container__content__ad__link__comment hero-top-ad-link-comment'>
                                ¿Qué es
                            </span>
                            <Icon className={'hero__container__content__ad__link__icon hero-top-ad-link-icon'}>
                                {getIcons('hero', 'ad', 'terraform')}
                            </Icon>
                            <span className='hero__container__content__ad__link__comment hero-top-ad-link-comment'>
                                Terraform y cuáles son sus beneficios?
                            </span>
                            <Icon className={'hero__container__content__ad__link__icon hero-top-ad-link-icon'}>
                                {getIcons('hero', 'ad', 'arrow-right')}
                            </Icon>
                        </a>
                    </div>
                    <h1 className='hero__container__content__quote hero-main-quote'>
                        Potencia tu Empresa.<br />
                        Obtén el Control.
                    </h1>
                    <span className='hero__container__content__quote hero-secondary-quote'>
                        Líderes en optimización de procesos.<br />
                        Expertos en construir mejores negocios.
                    </span>
                    <a className='hero__container__content__cta hero-cta' href='#' onMouseOut={() => setMouseOver(false)} onMouseOver={() => setMouseOver(true)}>
                        <img className='hero__container__content__cta__logo hero-cta-logo'
                            src="/images/logo/logo-icon.webp" alt="Ícono del Logo de VIT" />
                        <span className='hero__container__content__cta__text hero-cta-text'>
                            ¡VITeate!
                        </span>
                    </a>
                </div>
            </div>
        </main>
    )
}
