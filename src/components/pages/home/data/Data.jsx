import '../../../../../public/styles/components/data.css'
import { DataPad } from './DataPad'

const data = [
    {
        'title': 'Proyectos',
        'amount': 13
    },
    {
        'title': 'Servidores',
        'icon':
            <>
                <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                <path d="M3 12m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                <path d="M7 8l0 .01" />
                <path d="M7 16l0 .01" />
                <path d="M11 8h6" />
                <path d="M11 16h6" />
            </>,
        'types': [
            {
                'title': 'Físicos',
                'icon':
                    <>
                        <path d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
                        <path d="M9 9h6v6h-6z" />
                        <path d="M3 10h2" />
                        <path d="M3 14h2" />
                        <path d="M10 3v2" />
                        <path d="M14 3v2" />
                        <path d="M21 10h-2" />
                        <path d="M21 14h-2" />
                        <path d="M14 21v-2" />
                        <path d="M10 21v-2" />
                    </>,
                'amount': 25
            },
            {
                'title': 'Virtuales',
                'icon':
                    <>
                        <path d="M6 9a6 6 0 1 0 12 0a6 6 0 0 0 -12 0" />
                        <path d="M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6" />
                        <path d="M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6" />
                        <path d="M6 9h12" />
                        <path d="M3 20h7" />
                        <path d="M14 20h7" />
                        <path d="M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                        <path d="M12 15v3" />
                    </>,
                'amount': 127
            }
        ]
    },
    {
        'title': 'Bases de Datos',
        'icon':
            <>
                <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
                <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
                <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
            </>,
        'types': [
            {
                'title': 'DBs',
                'icon':
                    <>
                        <path d="M12 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7" />
                        <path d="M3 10h18" />
                        <path d="M10 3v18" />
                        <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M19.001 15.5v1.5" />
                        <path d="M19.001 21v1.5" />
                        <path d="M22.032 17.25l-1.299 .75" />
                        <path d="M17.27 20l-1.3 .75" />
                        <path d="M15.97 17.25l1.3 .75" />
                        <path d="M20.733 20l1.3 .75" />
                    </>,
                'amount': 48
            },
            {
                'title': 'RDS',
                'icon':
                    <>
                        <path d="M17 18.5a15.198 15.198 0 0 1 -7.37 1.44a14.62 14.62 0 0 1 -6.63 -2.94" />
                        <path d="M19.5 21c.907 -1.411 1.451 -3.323 1.5 -5c-1.197 -.773 -2.577 -.935 -4 -1" />
                        <path d="M3 11v-4.5a1.5 1.5 0 0 1 3 0v4.5" />
                        <path d="M3 9h3" />
                        <path d="M9 5l1.2 6l1.8 -4l1.8 4l1.2 -6" />
                        <path d="M18 10.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" />
                    </>,
                'amount': 13
            }
        ]
    },
    {
        'title': 'Microservicios',
        'icon':
            <>
                <path d="M3 12l3 0" />
                <path d="M12 3l0 3" />
                <path d="M7.8 7.8l-2.2 -2.2" />
                <path d="M16.2 7.8l2.2 -2.2" />
                <path d="M7.8 16.2l-2.2 2.2" />
                <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
            </>,
        'amount': 3
    },
    {
        'title': 'Ambientes',
        'icon':
            <>
                <path d="M3 5h6v14h-6z" />
                <path d="M12 9h10v7h-10z" />
                <path d="M14 19h6" />
                <path d="M17 16v3" />
                <path d="M6 13v.01" />
                <path d="M6 16v.01" />
            </>,
        'types': [
            {
                'title': 'Ops',
                'icon':
                    <>
                        <path d="M11.414 10l-7.383 7.418a2.091 2.091 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0l7.407 -7.385" />
                        <path d="M18.121 15.293l2.586 -2.586a1 1 0 0 0 0 -1.414l-7.586 -7.586a1 1 0 0 0 -1.414 0l-2.586 2.586a1 1 0 0 0 0 1.414l7.586 7.586a1 1 0 0 0 1.414 0z" />
                    </>,
                'amount': 27
            },
            {
                'title': 'Test',
                'icon':
                    <>
                        <path d="M15 3v15a3 3 0 0 1 -6 0v-15" />
                        <path d="M9 12h6" />
                        <path d="M8 3h8" />
                    </>,
                'amount': 27
            },
            {
                'title': 'QA',
                'icon':
                    <>
                        <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                        <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
                        <path d="M6 9l12 0" />
                        <path d="M6 12l3 0" />
                        <path d="M6 15l2 0" />
                    </>,
                'amount': 10
            }
        ]
    },
    {
        'title': 'Usuarios',
        'icon':
            <>
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </>,
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