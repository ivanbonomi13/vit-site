import '../../../../public/styles/components/serviceshero.css'
import { ServicesBackground } from './ServicesBackground'
import { Icon } from '../../Icon';
import { getIcons } from '../../Icons';
import { useEffect, useState } from 'react';

const services = [
    {
        name: 'Outsourcing IT',
        path: '#outsourcing',
        icon: getIcons('services', undefined, 'outsourcing'),
        details: 'Los servicios Outsourcing IT de VIT cubren desde el análisis hasta el monitoreo post implementación de nuevas tecnologías y servicios brindando correcto asesoramiento y entregando la mejor solución en el menor tiempo.'
    },
    {
        name: 'Desarrollo',
        path: '#development',
        icon: getIcons('services', undefined, 'development'),
        details: 'En VIT, ofrecemos servicios integrales de desarrollo que abarcan desde la conceptualización y diseño hasta la implementación y mantenimiento de aplicaciones personalizadas. Nuestro equipo de expertos trabaja estrechamente con cada cliente para asegurar que sus necesidades y objetivos específicos se cumplan de manera eficiente y efectiva.'
    },
    {
        name: 'DevOps',
        path: '#devops',
        icon: getIcons('services', undefined, 'devops'),
        details: 'Los servicios DevOps de VIT introducen cambios en la cultura de su organización, brindando las mejores prácticas y nuevas tecnologías, trabajando de manera conjunta entre equipos de desarrollo y operaciones a través de un ciclo de vida ágil.'
    }
];


export const ServicesHero = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <main className="services section">
            <div className="services__container services-container section-container">
                <ServicesBackground />
                <div className="services__container__content services-content">
                    <div className="services__container__content__ad services-ad">
                        <span className="services__container__content__ad__box services-ad-box not-selectable">
                            SERVICIOS VIT
                        </span>
                    </div>
                    <h1 className="services__container__content__quote services-main-quote">
                        Soluciones en <strong>IT</strong> para<br />
                        <strong>Mejores Negocios.</strong>
                    </h1>
                    <span className="services__container__content__quote services-secondary-quote">
                        Ambientes a medida de las necesidades de tu equipo. Consigue que tu empresa se enfoque plenamente en crear valor.
                    </span>
                </div>
            </div>

            <h2 className={`services__additional-sections__title ${isLoaded ? "underline" : ""}`}>
                Nuestros <span className="services__highlight">Servicios</span>
            </h2>

            <div className="services__additional-sections">
                {services.map((service, index) => (
                    <section key={index} id={service.path.substring(1)} className="services__section">
                        <div className="services__section__content">
                            <div className="services__section__icon">
                                <Icon className="services__section__icon-img">
                                    {service.icon}
                                </Icon>
                            </div>
                            <h2 className="services__section__title">
                                {service.name}
                            </h2>
                            <div className="services__section__details">
                                <p>{service.details}</p>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
};

