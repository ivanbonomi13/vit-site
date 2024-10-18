import '../../public/styles/components/team.css'
import { Icon } from './Icon'
import { AboutHead } from './AboutHead'

const team = [
    {
        'title': 'Gerencial',
        'members': [
            {
                'name': 'Pablo Stocco',
                'role': 'CEO',
                'icon':
                    <>
                        <path d="M12 22l4 -4l-2.5 -11l.993 -2.649a1 1 0 0 0 -.936 -1.351h-3.114a1 1 0 0 0 -.936 1.351l.993 2.649l-2.5 11l4 4z" />
                        <path d="M10.5 7h3l5 5.5" />
                    </>,
                'linkedin': 'https://www.linkedin.com/in/pablostocco/'
            }
        ]
    },
    {
        'title': 'de Análisis',
        'members': [
            {
                'name': 'Elizabeth Sauco',
                'role': 'Analista Financiera',
                'icon':
                    <>
                        <path d="M21 15h-2.5c-.398 0 -.779 .158 -1.061 .439c-.281 .281 -.439 .663 -.439 1.061c0 .398 .158 .779 .439 1.061c.281 .281 .663 .439 1.061 .439h1c.398 0 .779 .158 1.061 .439c.281 .281 .439 .663 .439 1.061c0 .398 -.158 .779 -.439 1.061c-.281 .281 -.663 .439 -1.061 .439h-2.5" />
                        <path d="M19 21v1m0 -8v1" />
                        <path d="M13 21h-7c-.53 0 -1.039 -.211 -1.414 -.586c-.375 -.375 -.586 -.884 -.586 -1.414v-10c0 -.53 .211 -1.039 .586 -1.414c.375 -.375 .884 -.586 1.414 -.586h2m12 3.12v-1.12c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-2" />
                        <path d="M16 10v-6c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-4c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414v6m8 0h-8m8 0h1m-9 0h-1" />
                        <path d="M8 14v.01" />
                        <path d="M8 17v.01" />
                        <path d="M12 13.99v.01" />
                        <path d="M12 17v.01" />
                    </>,
                'linkedin': 'https://www.linkedin.com/company/virtual-it-srl/'
            },
            {
                'name': 'Diana Soria',
                'role': 'Analista Administrativa',
                'icon':
                    <>
                        <path d="M12.5 19h-7.5a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3" />
                        <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M19.001 15.5v1.5" />
                        <path d="M19.001 21v1.5" />
                        <path d="M22.032 17.25l-1.299 .75" />
                        <path d="M17.27 20l-1.3 .75" />
                        <path d="M15.97 17.25l1.3 .75" />
                        <path d="M20.733 20l1.3 .75" />
                    </>,
                'linkedin': 'https://www.linkedin.com/company/virtual-it-srl/'
            }
        ]
    },
    {
        'title': 'Ejecutivo',
        'members': [
            {
                'name': 'Nicolás Calatayud',
                'role': 'Team Leader',
                'icon':
                    <>
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" />
                        <path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" />
                    </>,
                'linkedin': 'https://www.linkedin.com/in/nicolas-calatayud-b33bab64/'
            },
            {
                'name': 'Nazareno Peralta',
                'role': 'SysAdmin - DBA Senior',
                'icon':
                    <>
                        <path d="M12 12.75m-4 0a4 1.75 0 1 0 8 0a4 1.75 0 1 0 -8 0" />
                        <path d="M8 12.5v3.75c0 .966 1.79 1.75 4 1.75s4 -.784 4 -1.75v-3.75" />
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                    </>,
                'linkedin': 'https://www.linkedin.com/in/nazareno-peralta/'
            },
            {
                'name': 'Elian Denon',
                'role': 'SysAdmin - DBA',
                'icon':
                    <>
                        <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                        <path d="M12 20h-6a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h10.5" />
                        <path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M18 14.5v1.5" />
                        <path d="M18 20v1.5" />
                        <path d="M21.032 16.25l-1.299 .75" />
                        <path d="M16.27 19l-1.3 .75" />
                        <path d="M14.97 16.25l1.3 .75" />
                        <path d="M19.733 19l1.3 .75" />
                        <path d="M7 8v.01" />
                        <path d="M7 16v.01" />
                    </>,
                'linkedin': 'https://www.linkedin.com/in/elian-denon/'
            },
            {
                'name': 'Lucas Infantino',
                'role': 'Ingeniero Cloud',
                'icon':
                    <>
                        <path d="M11.482 20.924a1.666 1.666 0 0 1 -1.157 -1.241a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.312 .318 1.644 1.794 .995 2.697" />
                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M20 21l2 -2l-2 -2" />
                        <path d="M17 17l-2 2l2 2" />
                    </>,
                'linkedin': 'https://www.linkedin.com/in/lucas-infantino-1929b0218/'
            },
            {
                'name': 'Ivan Bonomi',
                'role': 'Desarrollador',
                'icon':
                    <>
                        <path d="M7 8l-4 4l4 4" />
                        <path d="M17 8l4 4l-4 4" />
                        <path d="M14 4l-4 16" />
                    </>,
                'linkedin': 'https://www.linkedin.com/in/ivan-luciano-bonomi/'
            },
            {
                'name': 'Juan Manuel Martínez',
                'role': 'Analista de Soporte',
                'icon':
                    <>
                        <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
                        <path d="M18 19c0 1.657 -2.686 3 -6 3" />
                        <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
                        <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
                    </>,
                'linkedin': 'https://www.linkedin.com/in/juan-manuel-martinez-575542165/'
            }
        ]
    }
]

export const Team = () => {
    return (
        <div className="about__container__content__team about-team">
            <AboutHead section={'team'} number={4} callout={'Tus próximos aliados'} title={'Nuestro Equipo'} />
            <div className="about__container__content__team__box about-team-box">
                <div className='about__container__content__team__box__staff about-team-staff'>
                    {
                        team.map((section, index) =>
                            <div key={index} className="about__container__content__team__box__staff__section team-section">
                                <h4 className="about__container__content__team__box__staff__section__title team-section-title">
                                    Sector {section.title}
                                </h4>
                                <ol className="about__container__content__team__box__staff__section__list team-section-list">
                                    {
                                        section.members.map((member, index) =>
                                            <li key={index} className="about__container__content__team__box__staff__section__list__item team-section-member">
                                                <a target="_blank" className='about__container__content__team__box__staff__section__list__item__link team-member-link' href={member.linkedin}>
                                                    <Icon className="about__container__content__team__box__staff__section__list__item__link__icon team-member-icon">
                                                        {member.icon}
                                                    </Icon>
                                                    <div className='about__container__content__team__box__staff__section__list__item__link__data team-member-data'>
                                                        <span className="about__container__content__team__box__staff__section__list__item__link__data__name team-member-name">
                                                            {member.name}
                                                        </span>
                                                        <span className="about__container__content__team__box__staff__section__list__item__link__data__role team-member-role">
                                                            {member.role}
                                                        </span>
                                                    </div>
                                                </a>
                                            </li>
                                        )
                                    }
                                </ol>
                            </div>
                        )
                    }
                </div>
                <div className='about__container__content__team__box__banner about-team-banner'>
                    <img className='about__container__content__team__box__banner__photo team-banner-photo'
                        src="../../public/images/photos/vit-team-photo.webp" alt="Foto del Equipo de VIT" />
                    <img className='about__container__content__team__box__banner__photo team-banner-photo'
                        src="../../public/images/photos/vit-meet-photo.webp" alt="Foto de una Reunión del Equipo de VIT" />
                </div>
            </div>
        </div>
    )
}