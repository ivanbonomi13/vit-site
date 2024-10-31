import '../../../../../public/styles/components/philosophy.css'

import { getIcons } from '../../../Icons'
import { Icon } from '../../../Icon'
import { AboutHead } from './AboutHead'

const topics = [
    {
        'name': 'Misión',
        'text':
            <>
                Brindar <strong>soluciones tecnológicas modernas</strong><Icon className={'philosophy-pad-text-icon'}>{getIcons('philosophy', 'text', 'solutions')}</Icon> que impulsen la <strong>eficiencia y seguridad</strong><Icon className={'philosophy-pad-text-icon'}>{getIcons('philosophy', 'text', 'safety')}</Icon> de tu empresa. No nos limitamos a resolver problemas, nos aseguramos de proporcionarte un estrecho <strong>servicio colaborativo</strong><Icon className={'philosophy-pad-text-icon'}>{getIcons('philosophy', 'text', 'colab')}</Icon>.
            </>,
        'icon': getIcons('philosophy', 'head', 'mission')
    },
    {
        'name': 'Visión',
        'text':
            <>
                Nos proyectamos como el mayor <strong>socio estratégico</strong><Icon className={'philosophy-pad-text-icon'}>{getIcons('philosophy', 'text', 'strategy')}</Icon> en la transformación de nuestros clientes. Vernos como <strong>líderes</strong><Icon className={'philosophy-pad-text-icon'}>{getIcons('philosophy', 'text', 'leaders')}</Icon> en el mercado nos impulsa a <strong>mejorar continuamente</strong><Icon className={'philosophy-pad-text-icon'}>{getIcons('philosophy', 'text', 'kaizen')}</Icon> con nuestras nuevas soluciones.
            </>,
        'icon': getIcons('philosophy', 'head', 'vision')
    },
    {
        'name': 'Propuesta de Valor',
        'text':
            <>
                Hacer de tu éxito nuestro objetivo. Nos integramos a tu proceso de trabajo para <strong>pulirlo y escalarlo</strong><Icon className={'philosophy-pad-text-icon'}>{getIcons('philosophy', 'text', 'upgrade')}</Icon>. Se nos destaca por tratar las inquietudes de nuestros clientes <strong>velozmente</strong><Icon className={'philosophy-pad-text-icon'}>{getIcons('philosophy', 'text', 'fast')}</Icon>, siempre priorizando el compromiso con tu negocio.
            </>,
        'icon': getIcons('philosophy', 'head', 'value-proposal')
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