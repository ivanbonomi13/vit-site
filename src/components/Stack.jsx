import '../../public/styles/components/stack.css'
import { AboutHead } from './AboutHead'
import { Icon } from './Icon'

const sections = [
    {
        'title': 'Engines',
        'icon':
            <>
                <path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" />
                <path d="M4 6v6c0 1.657 3.582 3 8 3c.21 0 .42 -.003 .626 -.01" />
                <path d="M20 11.5v-5.5" />
                <path d="M4 12v6c0 1.657 3.582 3 8 3" />
                <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M19.001 15.5v1.5" />
                <path d="M19.001 21v1.5" />
                <path d="M22.032 17.25l-1.299 .75" />
                <path d="M17.27 20l-1.3 .75" />
                <path d="M15.97 17.25l1.3 .75" />
                <path d="M20.733 20l1.3 .75" />
            </>,
        'tools': ['mongodb', 'documentdb', 'mysql', 'postgresql', 'sql-server']
    },
    {
        'title': 'Clouds',
        'icon':
            <>
                <path d="M11 18.004h-4.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99a3.468 3.468 0 0 1 3.307 2.444" />
                <path d="M20 21l2 -2l-2 -2" />
                <path d="M17 17l-2 2l2 2" />
            </>,
        'tools': ['aws', 'huawei', 'oracle', 'azure']
    }
]

export const Stack = () => {
    return (
        <div className="about__container__content__stack about-stack">
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
                                                key={index} src={`../../public/images/stack/${tool}.webp`} alt={`Logo de ${tool}`} />
                                        )
                                    }
                                </div>
                                <div className='about__container__stack__board__section__carousel__group about-stack-section-carousel-group'>
                                    {
                                        section.tools.map((tool, index) =>
                                            <img className='about__container__stack__board__section__carousel__group__logo about-stack-section-carousel-logo'
                                                key={index} src={`../../public/images/stack/${tool}.webp`} alt={`Logo de ${tool}`} />
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