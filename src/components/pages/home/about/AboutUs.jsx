import '../../../../../public/styles/components/about.css'

import { Section } from '../../../Section'
import { Stack } from './Stack'
import { Clients } from './Clients'
import { Philosophy } from './Philosophy'
import { Team } from './Team'

export const AboutUs = () => {
    return (
        <Section title={'Sobre Nosotros'} className={'about'} id={'about'}>
            <Stack />
            <Clients />
            <Philosophy />
            <Team />
        </Section>
    )
}
