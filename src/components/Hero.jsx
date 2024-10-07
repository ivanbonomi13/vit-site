import '../../public/styles/components/hero.css'

export const Hero = () => {
    return (
        <main className='hero'>
            <div className='hero__container hero-container section-container'>
                <div className='hero__container__content hero-content'>
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
