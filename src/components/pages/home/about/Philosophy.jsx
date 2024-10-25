import '../../../../../public/styles/components/philosophy.css'

import { getIcons } from '../../../Icons'
import { Icon } from '../../../Icon'
import { AboutHead } from './AboutHead'

const topics = [
    {
        'name': 'Misión',
        'text':
            <>
                Brindar <strong>soluciones tecnológicas modernas</strong> y de alta calidad que impulsen la <strong>eficiencia y seguridad</strong> de tu empresa. No nos limitamos a resolver problemas, nos aseguramos de proporcionarte un estrecho <strong>servicio colaborativo</strong>.
            </>,
        'icon': getIcons('philosophy', undefined, 'mission')
    },
    {
        'name': 'Visión',
        'text':
            <>
                Nos proyectamos como el mayor <strong>socio estratégico</strong> en la transformación de nuestros clientes. Visualizarnos como <strong>líderes</strong> en el mercado de servicios tecnológicos nos impulsa a <strong>mejorar continuamente</strong> con nuestras nuevas soluciones.
            </>,
        'icon': getIcons('philosophy', undefined, 'vision')
    },
    {
        'name': 'Propuesta de Valor',
        'text':
            <>
                Hacer de tu éxito nuestro objetivo. Nos integramos a tu proceso de trabajo para <strong>pulirlo y escalarlo</strong>. Se nos destaca por tratar las inquietudes de nuestros clientes <strong>velozmente</strong>, priorizando el compromiso adquirido con tu negocio.
            </>,
        'icon': getIcons('philosophy', undefined, 'value-proposal')
    }
]

export const Philosophy = () => {
    return (
        <div id='philosophy' className="about__container__content__philosophy about-philosophy">
            <AboutHead section={'philosophy'} number={3} callout={'Quienes somos y por qué'} title={'Nuestra Filosofía'} />
            <div className='about__container__content__philosophy__board philosophy-board'>
                {
                    topics.map((topic, index) =>
                        <div key={index} className='about__container__content__philosophy__board__pad philosophy-pad'>
                            <div className={`about__container__content__philosophy__board__pad__box philosophy-pad-box${index === 1 ? ' philosophy-mid-box' : ''}`}>
                                <Icon className={'about__container__content__philosophy__board__pad__box__icon philosophy-pad-icon'}>
                                    {topic.icon}
                                </Icon>
                            </div>
                            <h3 className='about__container__content__philosophy__board__pad__title philosophy-pad-title'>
                                {topic.name}
                            </h3>
                            <p className='about__container__content__philosophy__board__pad__text philosophy-pad-text'>
                                {topic.text}
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}