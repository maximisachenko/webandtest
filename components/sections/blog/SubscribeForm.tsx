import React from 'react'
import Image from 'next/image'
import Input from '../contact-form/Input'
import { Button } from '@/components/ui'
const SubscribeForm = () => {
    return (
        <div className='w-full bg-white rounded-[24px] form-shadow'>
            <div className='flex items-center gap-16 pt-16 justify-center max-[460px]:px-4 max-[460px]:pt-8 max-[460px]:mb-8'>
                <Image src='/assets/images/form.png' alt='Subscribe form' width={276} height={273} className='max-md:hidden' />
                <form className='flex flex-col items-center justify-center'>
                    <h1 className='text-primary text-2xl font-semibold mb-2 text-center'>Subscribe</h1>
                    <p className='text-[16px] font-light text-black/40 text-center mb-8 w-75 max-[460px]:w-auto'>
                        Subscribe to our weekly newsletter to get updates and special promotions</p>
                    <div className='flex flex-col gap-8 mb-8'>
                        <Input type='email' />
                        <Input type='text' />
                    </div>
                    <Button title='Subscribe' section='header' className='w-[106px]' />
                </form>
            </div>
            <Image src='/assets/images/wave.png' alt='Wave' width={1000} height={1000} className='w-full rounded-b-[24px]' />
        </div>
    )
}

export default SubscribeForm