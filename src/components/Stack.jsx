import '../../public/styles/components/stack.css'
import { AboutHead } from './AboutHead'

const sections = [
    {
        'title': 'Engines',
        'tools': ['mongodb', 'documentdb', 'mysql', 'postgresql', 'sql-server']
    },
    {
        'title': 'Clouds',
        'tools': ['aws', 'huawei', 'oracle', 'azure']
    }
]

export const Stack = () => {
    return (
        <div className="about__container__content__stack about-stack">
            <AboutHead section={'stack'} number={'0'} callout={'Las herramientas de VIT'} title={'Nuestro Stack'} />
            <div className='about__container__content__stack__board about-stack-board'>
                {
                    sections.map((section, index) =>
                        <div key={index} className='about__container__content__stack__board__section about-stack-section'>
                            <h3 className='about__container__stack__board__section__title about-stack-section-title'>
                                {section.title}
                            </h3>
                            <div className='about__container__stack__board__section__carousel about-stack-section-carousel'>
                                {
                                    section.tools.map((tool, index) =>
                                        <img className='about__container__stack__board__section__carousel__logo about-stack-section-carousel-logo'
                                            key={index} src={`../../public/images/stack/${tool}.png`} alt={`Logo de ${tool}`} />
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}