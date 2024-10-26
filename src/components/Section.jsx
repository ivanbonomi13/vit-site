export const Section = ({ title, className, extraClasses, id, children }) => {
    return (
        <section id={id} className={`${className} section${extraClasses ? ` ${extraClasses}` : ''}`}>
            <div className={`${className}__container ${className}-container section-container`}>
                {
                    title &&
                    <h2 className={`${className}__container__title ${className}-title section-title`}>
                        {title}
                    </h2>
                }
                <div className={`${className}__container__content ${className}-content section-content`}>
                    {children}
                </div>
            </div>
        </section>
    )
}