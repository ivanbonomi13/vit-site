import '../../../../../public/styles/components/stack.css'

import { Icon } from '../../../Icon'
import { getIcons } from '../../../Icons'
import { AboutHead } from './AboutHead'

const sections = [
    {
        'title': 'Engines',
        'icon': getIcons('stack', undefined, 'engines'),
        'tools': ['mongodb', 'documentdb', 'mysql', 'postgresql', 'sql-server']
    },
    {
        'title': 'Clouds',
        'icon': getIcons('stack', undefined, 'clouds'),
        'tools': ['aws', 'huawei', 'oracle', 'azure']
    }
]

export const Stack = () => {
    return (
        <div id='stack' className="about__container__content__stack about-stack">
            <AboutHead section={'stack'} number={'1'} callout={'Las herramientas de VIT'} title={'Nuestro Stack'} />
            <div className='about__container__content__stack__board about-stack-board'>
                {
                    sections.map((section, index) =>
                        <div key={index} className='about__container__content__stack__board__section about-stack-section'>
                            <div className='about__container__stack__board__section__head about-stack-section-head'>
                                <Icon className={'about__container__stack__board__section__head__icon about-stack-section-head-icon'}>
                                    {section.icon}
                                </Icon>
                                <h3 className='about__container__stack__board__section__head__title not-selectable about-stack-section-head-title'>
                                    {section.title}
                                </h3>
                            </div>
                            <div className='about__container__stack__board__section__carousel about-stack-section-carousel'>
                                <div className='about__container__stack__board__section__carousel__group about-stack-section-carousel-group'>
                                    {
                                        section.tools.map((tool, index) =>
                                            <img className='about__container__stack__board__section__carousel__group__logo about-stack-section-carousel-logo'
                                                key={index} src={`/images/stack/${tool}.webp`} alt={`Logo de ${tool}`} />
                                        )
                                    }
                                </div>
                                <div className='about__container__stack__board__section__carousel__group about-stack-section-carousel-group'>
                                    {
                                        section.tools.map((tool, index) =>
                                            <img className='about__container__stack__board__section__carousel__group__logo about-stack-section-carousel-logo'
                                                key={index} src={`/images/stack/${tool}.webp`} alt={`Logo de ${tool}`} />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}