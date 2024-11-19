import '../../../../../public/styles/components/team.css'

import { getIcons } from '../../../Icons'
import { Icon } from '../../../Icon'
import { AboutHead } from './AboutHead'

const team = [
    {
        'title': 'Gerencial',
        'members': [
            {
                'name': 'Pablo Stocco',
                'role': 'CEO',
                'icon': getIcons('team', 'management', 'ceo'),
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
                'icon': getIcons('team', 'analysis', 'finances'),
                'linkedin': 'https://www.linkedin.com/company/virtual-it-srl/'
            },
            {
                'name': 'Diana Soria',
                'role': 'Analista Administrativa',
                'icon': getIcons('team', 'analysis', 'administration'),
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
                'icon': getIcons('team', 'executive', 'team-leader'),
                'linkedin': 'https://www.linkedin.com/in/nicolas-calatayud-b33bab64/'
            },
            {
                'name': 'Nazareno Peralta',
                'role': 'SysAdmin - DBA Senior',
                'icon': getIcons('team', 'executive', 'sys-admin-dba-senior'),
                'linkedin': 'https://www.linkedin.com/in/nazareno-peralta/'
            },
            {
                'name': 'Elian Denon',
                'role': 'SysAdmin - DBA',
                'icon': getIcons('team', 'executive', 'sys-admin-dba'),
                'linkedin': 'https://www.linkedin.com/in/elian-denon/'
            },
            {
                'name': 'Lucas Infantino',
                'role': 'Ingeniero Cloud',
                'icon': getIcons('team', 'executive', 'cloud-engineer'),
                'linkedin': 'https://www.linkedin.com/in/lucas-infantino-1929b0218/'
            },
            {
                'name': 'Ivan Bonomi',
                'role': 'Desarrollador',
                'icon': getIcons('team', 'executive', 'developer'),
                'linkedin': 'https://www.linkedin.com/in/ivan-luciano-bonomi/'
            },
            {
                'name': 'Juan Manuel Martínez',
                'role': 'Analista de Soporte',
                'icon': getIcons('team', 'executive', 'support'),
                'linkedin': 'https://www.linkedin.com/in/juan-manuel-martinez-575542165/'
            }
        ]
    }
]

export const Team = () => {
    return (
        <div id='team' className="about__container__content__team about-team">
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
                        src="/images/photos/vit-team-photo.webp" alt="Foto del Equipo de VIT" />
                    <img className='about__container__content__team__box__banner__photo team-banner-photo'
                        src="/images/photos/vit-meet-photo.webp" alt="Foto de una Reunión del Equipo de VIT" />
                </div>
            </div>
        </div>
    )
}