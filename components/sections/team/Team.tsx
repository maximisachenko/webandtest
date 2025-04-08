import { Container, Heading, SectionTitle } from '@/components/ui'
import React from 'react'

const Team = () => {
    return (
        <Container type='default' colorContainer={'white'} >
            <div className='flex flex-col justify-center items-center'>
                <SectionTitle />
                <Heading primaryTitle={'Our'} foregroundTitle={'brilliant team of Weband'} />
            </div>
        </Container>
    )
}

export default Team