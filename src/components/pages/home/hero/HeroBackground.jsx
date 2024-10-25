import '../../../../../public/styles/components/herobg.css'

import { useEffect, useState } from "react"

import { Icon } from "../../../Icon"
import { getIcons } from '../../../Icons'

const bgIcons = getIcons('hero', 'bg').map(item => item.icon)

export const HeroBackground = () => {
    const [hideLines, setHideLines] = useState(false)
    useEffect(() => setHideLines(true), [])
    return (
        <div className="hero__container__bg hero-bg">
            {
                bgIcons.map((icon, index) =>
                    <div key={index} className={`hero__container__bg__box hero-bg-box${!hideLines ? ' bg-hidden-lines' : ''}`}>
                        <Icon className={'hero__container__bg__box__icon hero-bg-icon'}>
                            {icon}
                        </Icon>
                    </div>
                )
            }
        </div>
    )
}