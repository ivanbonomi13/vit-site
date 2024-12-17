import { Icon } from '../../Icon';
import { getIcons } from '../../Icons';

const group = [
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

export const GroupBackground = () => {
    return (
        <div className='group__container__bg group-bg'>
            {
                group.map((group, index) =>
                    <a href={group.path} key={index} className='group__container__bg__box group-bg-box'>
                        <span className='group__container__bg__box__text group-box-text'>
                            {group.name}
                        </span>
                        <Icon className={'group__container__bg__box__icon group-bg-icon'}>
                            {group.icon}
                        </Icon>
                    </a>
                )
            }
        </div>
    )
}