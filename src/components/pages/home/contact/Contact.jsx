import '../../../../../public/styles/components/contact.css'

import { Section } from '../../../Section'
import { getIcons } from '../../../Icons'
import { Icon } from '../../../Icon'
import { useState, useRef, useEffect } from 'react'
import { ContactFill } from './ContactFill'

const content = [
    {
        'type': 'text',
        'name': 'name',
        'text': 'Nombre Completo',
        'icon': getIcons('contact', 'form', 'name'),
        'placeHolder': 'Juan Pérez'
    },
    {
        'type': 'email',
        'name': 'email',
        'text': 'Email de Contacto',
        'icon': getIcons('contact', 'form', 'email'),
        'placeHolder': 'usuario@vit.com'
    },
    {
        'type': 'tel',
        'name': 'phone',
        'text': 'Número de Teléfono',
        'icon': getIcons('contact', 'form', 'phone'),
        'placeHolder': '+54 9 11 0000-0000'
    },
    {
        'type': 'select',
        'name': 'services',
        'text': 'Servicios de VIT',
        'icon': getIcons('contact', 'form', 'services'),
        'options': [
            'Elije Uno', 'Outsourcing IT', 'Desarrollo', 'DevOps'
        ]
    },
    {
        'type': 'textarea',
        'name': 'message',
        'text': 'Déjanos un Mensaje',
        'icon': getIcons('contact', 'form', 'message'),
        'placeHolder': 'Me interesa...'
    }
]

const buttons = [
    {
        'name': 'Anterior',
        'icon': getIcons('contact', 'buttons', 'arrow-left'),
    },
    {
        'name': 'Siguiente',
        'icon': getIcons('contact', 'buttons', 'arrow-right'),
    }
]

export const Contact = () => {
    const [data, setData] = useState(
        [
            {
                'name': 'name',
                'value': '',
                'validity': false
            },
            {
                'name': 'email',
                'value': '',
                'validity': false
            },
            {
                'name': 'phone',
                'value': '',
                'validity': false
            },
            {
                'name': 'services',
                'value': '',
                'validity': false
            },
            {
                'name': 'message',
                'value': '',
                'validity': false
            },
        ]
    )

    const [selected, setSelected] = useState('name')
    const inputRefs = useRef([])

    useEffect(() => {
        let index = content.findIndex(item => item.name === selected)
        if (index !== -1 && inputRefs.current[index]) {
            inputRefs.current[index].focus({ preventScroll: true })
        }
    }, [selected])

    const handleClick = btn => {
        setSelected(prev => {
            let actualIndex = content.findIndex(data => data.name === prev)
            if (btn === 'Siguiente') return content[actualIndex + 1].name
            else if (btn === 'Anterior') return content[actualIndex - 1].name
        })
    }

    const handleData = (inputName, value, validity) => setData(prev => [{ 'name': inputName, value, validity }, ...prev.filter(item => item.name != inputName)])

    const handleFillClick = fillName => setSelected(fillName)
    const checkFormProgress = () => data.filter(item => !item.validity).length

    return (
        <Section title={'Contacto'} id={'contact'} className={'contact'} extraClasses={checkFormProgress() === 0 && ' completed-form'}>
            <div className='contact__container__content__pad contact-pad'>
                <ContactFill content={content} selected={selected} data={data} handleFillClick={handleFillClick} />
                <form className='contact__container__content__pad__form contact-pad-form'>
                    {
                        content.map((item, index) =>
                            <div key={index} className={`contact__container__content__pad__form__data contact-pad-form-data${selected === item.name ? ' data-visible' : ''}${index === content.findIndex(data => data.name === selected - 1) ? ' prev-selected' : ''}`}>
                                <label className='contact__container__content__pad__form__label contact-pad-form-label' htmlFor={item.name}>
                                    <span className='contact__container__content__pad__form__label__text contact-pad-form-label-text not-selectable'>
                                        {item.text}
                                    </span>
                                </label>
                                <div className='contact__container__content__pad__form__data__box contact-pad-form-data-box'>
                                    <Icon className={'contact__container__content__pad__form__data__box__icon contact-pad-form-box-icon'}>
                                        {item.icon}
                                    </Icon>
                                    {
                                        item.type !== 'select'
                                            ? <input ref={el => inputRefs.current[index] = el} required onChange={e => handleData(item.name, e.currentTarget.value, e.target.checkValidity())} value={data[item.name]}
                                                className={`contact__container__content__pad__form__data__box__input contact-pad-form-box-input`}
                                                type={item.type} name={item.name} id={item.name} placeholder={item.placeHolder} />
                                            : <select ref={el => inputRefs.current[index] = el} required onChange={e => handleData(item.name, e.currentTarget.value, e.target.checkValidity())}
                                                className={`contact__container__content__pad__form__data__box__select contact-pad-form-box-select`}
                                                name={item.name} id={item.name}>
                                                {
                                                    item.options.map((option, index) =>
                                                        <option className='contact__container__content__pad__form__data__box__select__option contact-form-select-option'
                                                            key={index} value={index === 0 ? '' : option} disabled={index === 0} selected={index === 0}>
                                                            {option}
                                                        </option>
                                                    )
                                                }
                                            </select>
                                    }
                                </div>
                            </div>
                        )
                    }
                    <div className='contact__container__content__pad__form__box contact-pad-form-box not-selectable'>
                        <span className={`contact__container__content__pad__form__box__progress${checkFormProgress() === 0 ? ' contact-form-progress-hidden' : ''} contact-pad-form-box-text`}>
                            ¡Estás a <span className='contact__conainer__content__pad__form__box__progress__steps contact-form-progress-steps'>{checkFormProgress()} {checkFormProgress() > 1 ? 'pasos' : 'paso'}</span> de Vitearte!
                        </span>
                        <button className={`contact__container__content__pad__form__box__submit${checkFormProgress() > 0 ? ' contact-form-submit-hidden' : ''} contact-pad-form-box-submit`} type="submit">
                            <img className='contact__container__content__pad__form__box__submit__icon contact-pad-form-box-submit-icon'
                                src="/images/logo/logo-simple-icon.webp" alt="Logo Simple de VIT" />
                            <span className='contact__container__content__pad__form__box__submit__text contact-pad-form-box-submit-text'>
                                VITearme
                            </span>
                        </button>
                    </div>
                </form>
                <div className={`${selected}-data contact__container__content__pad__box contact-pad-box`}>
                    {
                        buttons.map((btn, index) =>
                            <button onClick={() => handleClick(btn.name)} key={index} className='contact__container__content__pad__box__btn contact-pad-box-btn'>
                                <Icon className='contact__container__content__pad__box__btn__icon contact-pad-box-btn-icon'>
                                    {btn.icon}
                                </Icon>
                            </button>
                        )
                    }
                </div>
            </div>
        </Section>
    )
}