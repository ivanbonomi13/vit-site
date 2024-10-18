import '../../../../../public/styles/components/hero.css'
import { HeroBackground } from './HeroBackground'
import { Icon } from '../../../Icon'

const icons = [
    <>
        <path d="M15 15.5l-11.476 -6.216a1 1 0 0 1 -.524 -.88v-4.054a1.35 1.35 0 0 1 2.03 -1.166l9.97 5.816v10.65a1.35 1.35 0 0 1 -2.03 1.166l-3.474 -2.027a1 1 0 0 1 -.496 -.863v-11.926" />
        <path d="M15 15.5l5.504 -3.21a1 1 0 0 0 .496 -.864v-3.576a1.35 1.35 0 0 0 -2.03 -1.166l-3.97 2.316" />
    </>,
    <>
        <path d="M5 12l14 0" />
        <path d="M15 16l4 -4" />
        <path d="M15 8l4 4" />
    </>
]

export const Hero = () => {
    return (
        <main className='hero section'>
            <div className='hero__container hero-container section-container'>
                <HeroBackground />
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
                                {icons[0]}
                            </Icon>
                            <span className='hero__container__content__ad__link__comment hero-top-ad-link-comment'>
                                Terraform y cuáles son sus beneficios?
                            </span>
                            <Icon className={'hero__container__content__ad__link__icon hero-top-ad-link-icon'}>
                                {icons[1]}
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
                    <a className='hero__container__content__cta hero-cta' href=''>
                        <img className='hero__container__content__cta__logo hero-cta-logo'
                            src="../../public/images/logo/logo-icon.webp" alt="Ícono del Logo de VIT" />
                        <span className='hero__container__content__cta__text hero-cta-text'>
                            ¡VITeate!
                        </span>
                    </a>
                </div>
            </div>
        </main>
    )
}
