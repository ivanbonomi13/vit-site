import { useState } from "react"
import { Icon } from "../../../Icon"

export const ContactFill = ({ content, selected, data, handleFillClick }) => {
    return (
        <div className={`contact__container__content__fill contact-pad-fill ${selected}-fill-selected`}>
            <Icon className={'contanct__container__content__fill__cursor contact-pad-fill-cursor'}>
                <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" />
            </Icon>
            {
                content.map((item, index) =>
                    <div onClick={() => handleFillClick(item.name)} key={index} className={`contact__container__content__fill__data contact-pad-fill-data ${item.name}-data`}>
                        <Icon key={index} className="contact__container__content__fill__data__icon contact-pad-fill-data-icon">
                            {item.icon}
                        </Icon>
                        <Icon className={`contact__container__content__fill__data__check contact-pad-fill-data-check${data.find(field => field.name === item.name).validity ? ' fill-checked' : ''}`}>
                            <path d="M5 12l5 5l10 -10" />
                        </Icon>
                    </div>
                )
            }
        </div>
    )
}