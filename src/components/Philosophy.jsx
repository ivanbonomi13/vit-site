import { Icon } from './Icon'
import '../../public/styles/components/philosophy.css'

const icons = [
    <>
        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M12 7a5 5 0 1 0 5 5" />
        <path d="M13 3.055a9 9 0 1 0 7.941 7.945" />
        <path d="M15 6v3h3l3 -3h-3v-3z" />
        <path d="M15 9l-3 3" />
    </>,
    <>
        <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
        <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
        <path d="M9.7 17l4.6 0" />
    </>,
    <>
        <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" />
    </>
]

const topics = [
    {
        'name': 'Misión',
        'text':
            <>
                Brindar <strong>soluciones tecnológicas modernas</strong> y de alta calidad que impulsen la <strong>eficiencia y seguridad</strong> de tu empresa. No nos limitamos a resolver problemas, nos aseguramos de proporcionarte un estrecho <strong>servicio colaborativo</strong>.
            </>
    },
    {
        'name': 'Visión',
        'text':
            <>
                Nos proyectamos como el mayor <strong>socio estratégico</strong> en la transformación de nuestros clientes. Visualizarnos como <strong>líderes</strong> en el mercado de servicios tecnológicos nos impulsa a <strong>mejorar continuamente</strong> con nuestras nuevas soluciones.
            </>
    },
    {
        'name': 'Propuesta de Valor',
        'text':
            <>
                Hacer de tu éxito nuestro objetivo. Nos integramos a tu proceso de trabajo para <strong>pulirlo y escalarlo</strong>. Se nos destaca por tratar las inquietudes de nuestros clientes <strong>velozmente</strong>, priorizando el compromiso adquirido con tu negocio.
            </>
    }
]

export const Philosophy = () => {
    return (
        <div className="about__container__content__philosophy about-philosophy">
            <div className='about__container__content__philosophy__board philosophy-board'>
                {
                    topics.map((topic, index) =>
                        <div key={index} className='about__container__content__philosophy__board__pad philosophy-pad'>
                            <div className={`about__container__content__philosophy__board__pad__box philosophy-pad-box${index === 1 ? ' philosophy-mid-box' : ''}`}>
                                <Icon className={'about__container__content__philosophy__board__pad__box__icon philosophy-pad-icon'}>
                                    {icons[index]}
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