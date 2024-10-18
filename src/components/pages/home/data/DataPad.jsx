import { useEffect, useState } from 'react';
import { Icon } from '../../../Icon';

export const DataPad = ({ title, icon, amount, types = [], duration = 750 }) => {
    const [currentAmount, setCurrentAmount] = useState(0);
    const [currentTypes, setCurrentTypes] = useState(types.map(type => ({ ...type, currentAmount: 0 })));

    useEffect(() => {
        let start = 0;
        const increment = amount / (duration / 10);

        const timer = setInterval(() => {
            start += increment;
            if (start >= amount) {
                start = amount;
                clearInterval(timer);
            }
            setCurrentAmount(Math.floor(start));
        }, 10);

        return () => clearInterval(timer);
    }, [amount, duration]);

    useEffect(() => {
        const updatedTypes = types.map(type => ({ ...type, currentAmount: 0 }));
        updatedTypes.forEach((type, index) => {
            let start = 0;
            const increment = type.amount / (duration / 10);

            const timer = setInterval(() => {
                start += increment;
                if (start >= type.amount) {
                    start = type.amount;
                    clearInterval(timer);
                }

                setCurrentTypes(prevTypes => {
                    const newTypes = [...prevTypes];
                    newTypes[index] = { ...newTypes[index], currentAmount: Math.floor(start) };
                    return newTypes;
                });
            }, 10);
        });

        return () => {
            updatedTypes.forEach((_, index) => clearInterval(updatedTypes[index]?.timer));
        };
    }, [types, duration]);

    return (
        <div className='data__container__content__pad data-pad'>
            {
                title === 'Proyectos' || title === 'Microservicios'
                    ? <div className='data__container__content__pad__simple data-pad-simple'>
                        <span className='data__container__content__pad__simple__amount data-pad-simple-amount'>
                            {currentAmount}
                        </span>
                        <h4 className={'data__container__content__pad__simple__title data-pad-simple-title'}>
                            {title}
                        </h4>
                    </div>
                    : <>
                        <div className='data__container__content__pad__head data-pad-head'>
                            {icon &&
                                <Icon className={'data__container__content__pad__head__icon data-pad-head-icon'}>
                                    {icon}
                                </Icon>
                            }
                            <h4 className={'data__container__content__pad__head__icon data-pad-head-title'}>
                                {title}
                            </h4>
                        </div>
                        {amount ?
                            <span className='data__container__content__pad__amount data-pad-amount'>
                                {currentAmount}
                            </span>
                            : <div className='data__container__content__pad__box data-pad-box'>
                                <ul className='data__container__content__pad__box__list data-pad-list'>
                                    {currentTypes.map((item, index) =>
                                        <li key={index} className='data__container__content__pad__box__list__item data-pad-list-item'>
                                            <h5 className='data__container__content__pad__box__list__item__title data-pad-list-item-title'>
                                                {item.title}
                                            </h5>
                                            <span className='data__container__content__pad__box__list__item__amount data-pad-list-item-amount'>
                                                {item.currentAmount}
                                            </span>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        }
                    </>
            }
        </div>
    );
};
