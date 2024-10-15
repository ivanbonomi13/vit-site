import { Icon } from './Icon'

export const DataPad = ({ title, icon, amount, types }) => {
    return (
        <div className='data__container__content__pad data-pad'>
            {
                title === 'Proyectos' || title === 'Microservicios'
                    ?
                    <div className='data__container__content__pad__simple data-pad-simple'>
                        <span className='data__container__content__pad__simple__amount data-pad-simple-amount'>
                            {amount}
                        </span>
                        <h4 className={'data__container__content__pad__simple__title data-pad-simple-title'}>
                            {title}
                        </h4>
                    </div>
                    :
                    <>
                        <div className='data__container__content__pad__head data-pad-head'>
                            {
                                icon &&
                                <Icon className={'data__container__content__pad__head__icon data-pad-head-icon'}>
                                    {icon}
                                </Icon>
                            }
                            <h4 className={'data__container__content__pad__head__icon data-pad-head-title'}>
                                {title}
                            </h4>
                        </div>
                        {
                            amount
                                ?
                                <span className='data__container__content__pad__amount data-pad-amount'>
                                    {amount}
                                </span>
                                :
                                <div className='data__container__content__pad__box data-pad-box'>
                                    <ul className='data__container__content__pad__box__list data-pad-list'>
                                        {
                                            types.map((item, index) =>
                                                <li key={index} className='data__container__content__pad__box__list__item data-pad-list-item'>
                                                    <h5 className='data__container__content__pad__box__list__item__title data-pad-list-item-title'>
                                                        {item.title}
                                                    </h5>
                                                    <span className='data__container__content__pad__box__list__item__amount data-pad-list-item-amount'>
                                                        {item.amount}
                                                    </span>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                        }
                    </>
            }
        </div>
    )
}