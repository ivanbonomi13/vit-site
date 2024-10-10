import '../../public/styles/components/about.css'

const clients = ['osep', 'adita', 'epidata', 'iosfa', 'sms-chile', 'abc-tech', 'osfatlyf', 'sindicato-luz-fuerza']

export const AboutUs = () => {
    return (
        <section className='about section'>
            <div className='about__container about-container section-container'>
                <h2 className='about__container__title about-title section-title not-selectable'>
                    Sobre Nosotros
                </h2>
                <div className='about__container__content about-content section-content'>
                    <video className='about__container__content__video about-clients-video'
                        autoPlay loop muted>
                        <source src='../../public/videos/vit-clients.mp4' type='video/mp4' />
                    </video>
                    <span className='about__container__content__callout about-clients-callout not-selectable'>
                        De <strong>VIT</strong> <br />para el <strong>Mundo</strong>
                    </span>
                </div>
                <div className='about__container__clients about-clients'>
                    {
                        clients.map((client, index) =>
                            <div key={index} className='about__container__content__clients__item about-clients-item'>
                                <img className='about__container__content__clients__item__logo about-clients-logo'
                                    src={`../../public/images/clients/${client}-logo.webp`} alt={`Logo de ${client.toUpperCase()}`} />
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}
