import '../../../../../public/styles/components/data.css'

import { getIcons } from '../../../Icons'
import { DataPad } from './DataPad'

const data = [
    {
        'title': 'Proyectos',
        'amount': 13
    },
    {
        'title': 'Servidores',
        'icon': getIcons('data', undefined, 'servers'),
        'types': [
            {
                'title': 'Físicos',
                'amount': 25
            },
            {
                'title': 'Virtuales',
                'amount': 127
            }
        ]
    },
    {
        'title': 'Bases de Datos',
        'icon': getIcons('data', undefined, 'databases'),
        'types': [
            {
                'title': 'DBs',
                'amount': 48
            },
            {
                'title': 'RDS',
                'amount': 13
            }
        ]
    },
    {
        'title': 'Microservicios',
        'amount': 3
    },
    {
        'title': 'Ambientes',
        'icon': getIcons('data', undefined, 'environments'),
        'types': [
            {
                'title': 'Ops',
                'amount': 27
            },
            {
                'title': 'Test',
                'amount': 27
            },
            {
                'title': 'QA',
                'amount': 10
            }
        ]
    },
    {
        'title': 'Usuarios',
        'icon': getIcons('data', undefined, 'users'),
        'amount': 800
    }
]

export const Data = () => {
    return (
        <section className='data section'>
            <div className='data__container data-container section-container'>
                <div className='data__container__content data-content section-content'>
                    {
                        data.map((item, index) =>
                            <DataPad key={index} title={item.title} icon={item.icon} amount={item.amount} types={item.types} />
                        )
                    }
                </div>
            </div>
        </section>
    )
}