export const AboutHead = ({ section, number, callout, title }) => {
    return (
        <div className={`about__container__content__${section}__head about-${section}-head about-head not-selectable`}>
            <div className={`about__container__content__${section}__head__box ${section}-head-box about-head-box`}>
                <span className={`about__container__content__${section}__head__box__number ${section}-head-number about-head-number`}>
                    {number}
                </span>
            </div>
            <span className={`about__container__content__${section}__head__callout ${section}-head-callout about-head-callout`}>
                {callout}
            </span>
            <h3 className={`about__container__content__${section}__head__title ${section}-head-title about-head-title`}>
                {title}
            </h3>
        </div>
    )
}