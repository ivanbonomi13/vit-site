import '../../../../../public/styles/components/contact.css'
import { Icon } from '../../../Icon'
import { useState, useRef, useEffect } from 'react'
import { ContactFill } from './ContactFill'

const content = [
    {
        'type': 'text',
        'name': 'name',
        'text': 'Nombre Completo',
        'icon':
            <>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </>,
        'placeHolder': 'Juan Pérez'
    },
    {
        'type': 'email',
        'name': 'email',
        'text': 'Email de Contacto',
        'icon':
            <>
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
            </>,
        'placeHolder': 'usuario@vit.com'
    },
    {
        'type': 'tel',
        'name': 'phone',
        'text': 'Número de Teléfono',
        'icon':
            <>
                <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" />
                <path d="M11 4h2" />
                <path d="M12 17v.01" />
            </>,
        'placeHolder': '+54 9 11 0000-0000'
    },
    {
        'type': 'select',
        'name': 'services',
        'text': 'Servicios de VIT',
        'icon':
            <>
                <path d="M6 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M14.5 7.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" />
            </>,
        'options': [
            'Elije Uno', 'Outsourcing IT', 'Desarrollo', 'DevOps'
        ]
    },
    {
        'type': 'textarea',
        'name': 'message',
        'text': 'Déjanos un Mensaje',
        'icon':
            <>
                <path d="M8 9h8" />
                <path d="M8 13h6" />
                <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
            </>,
        'placeHolder': 'Me interesa...'
    }
]

const buttons = [
    {
        'name': 'Anterior',
        'icon':
            <>
                <path d="M15 6l-6 6l6 6" />
            </>
    },
    {
        'name': 'Siguiente',
        'icon':
            <>
                <path d="M9 6l6 6l-6 6" />
            </>
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
        <section id="contact" className={`contact${checkFormProgress() === 0 ? ' completed-form' : ''} section`}>
            <div className='contact__container contact-container section-container'>
                <h2 className='contact__container__title contact-title section-title'>
                    Contáctanos
                </h2>
                <div className='contact__container__content contact-content section-content'>
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
                                        src="../../public/images/logo/logo-simple-icon.webp" alt="Logo Simple de VIT" />
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
                </div>
            </div>
        </section>
    )
}