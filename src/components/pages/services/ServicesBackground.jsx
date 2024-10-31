import { Icon } from '../../Icon';
import { getIcons } from '../../Icons';

const services = [
    {
        'name': 'Outsourcing IT',
        'path': '#outsourcing',
        'icon': getIcons('services', undefined, 'outsourcing')
    },
    {
        'name': 'Desarrollo',
        'path': '#development',
        'icon': getIcons('services', undefined, 'development')
    },
    {
        'name': 'DevOps',
        'path': '#devops',
        'icon': getIcons('services', undefined, 'devops')
    }
];

export const ServicesBackground = () => {
    return (
        <div className='services__container__bg services-bg'>
            {
                services.map((service, index) =>
                    <a href={service.path} key={index} className='services__container__bg__box services-bg-box'>
                        <span className='services__container__bg__box__text services-box-text'>
                            {service.name}
                        </span>
                        <Icon className={'services__container__bg__box__icon services-bg-icon'}>
                            {service.icon}
                        </Icon>
                    </a>
                )
            }
        </div>
    )
}