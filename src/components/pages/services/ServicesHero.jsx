import '../../../../public/styles/components/serviceshero.css'

import { ServicesBackground } from './ServicesBackground'

export const ServicesHero = () => {
    return (
        <main className='services section'>
            <div className='services__container services-container section-container'>
                <ServicesBackground />
                <div className='services__container__content services-content'>
                    <div className='services__container__content__ad services-ad'>
                        <span className='services__container__content__ad__box services-ad-box not-selectable'>
                            SERVICIOS VIT
                        </span>
                    </div>
                    <h1 className='services__container__content__quote services-main-quote'>
                        Soluciones en <strong>IT</strong> para<br />
                        <strong>Mejores Negocios.</strong>
                    </h1>
                    <span className='services__container__content__quote services-secondary-quote'>
                        Ambientes a medida de las necesidades de tu equipo. Consigue que tu empresa se enfoque plenamente en crear valor.
                    </span>
                </div>
            </div>
        </main>
    )
}