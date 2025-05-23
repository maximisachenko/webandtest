import React from 'react'
import Input from '../sections/contact-form/input'
import CustomPhoneInput from '../sections/contact-form/phoneInput'
import Textarea from '../sections/contact-form/textArea'
import { Button } from '@/components/ui'

const Form = () => {
    return (
        <div className='flex flex-col gap-8 mb-16 max-[915px]:px-4'>
            <div className='mt-12 grid grid-cols-2 gap-x-16 gap-y-8 max-xl:flex max-xl:flex-col max-[915px]:mt-0'>
                <Input type={'text'} />
                <Input type={'email'} />
                <CustomPhoneInput />
            </div>
            <Textarea />
            <Button title={'Send message'} section='form' className='w-37' />
        </div>
    )
}

export default Form