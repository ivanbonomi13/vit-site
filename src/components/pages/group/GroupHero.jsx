import '../../../../public/styles/components/grouphero.css'

import { GroupBackground } from './GroupBackground'

export const GroupHero = () => {
    return (
        <main className='group section'>
            <div className='group__container group-container section-container'>
                <GroupBackground />
                <div className='group__container__content group-content'>
                    <div className='group__container__content__ad group-ad'>
                        <span className='group__container__content__ad__box group-ad-box not-selectable'>
                            SERVICIOS VIT
                        </span>
                    </div>
                    <h1 className='group__container__content__quote group-main-quote'>
                        Soluciones en <strong>IT</strong> para<br />
                        <strong>Mejores Negocios.</strong>
                    </h1>
                    <span className='group__container__content__quote group-secondary-quote'>
                        Ambientes a medida de las necesidades de tu equipo. Consigue que tu empresa se enfoque plenamente en crear valor.
                    </span>
                </div>
            </div>
        </main>
    )
}