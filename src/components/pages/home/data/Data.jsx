import '../../../../../public/styles/components/data.css'

import { Section } from '../../../Section'
import { getIcons } from '../../../Icons'
import { DataPad } from './DataPad'

const data = [
    {
        'title': 'Usuarios',
        'icon': getIcons('data', undefined, 'users'),
        'amount': 800
    },
    {
        'title': 'Proyectos',
        'amount': 13
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
]

export const Data = () => {
    return (
        <Section id={'data'} className={'data'}>
            {
                data.map((item, index) =>
                    <DataPad key={index} title={item.title} icon={item.icon} amount={item.amount} types={item.types} />)
            }
        </Section>
    )
}