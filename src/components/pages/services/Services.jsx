import '../../../../public/styles/components/services.css'

import { Section } from '../../Section'
import { ServicesBackground } from './ServicesBackground'

export const Services = () => {
    return (
        <main className='services section'>
            <div className='services__container services-container section-container'>
                <ServicesBackground />
                <div className='services__container__content services-content'>
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