import React from 'react'
import Image from 'next/image'
import Input from '../sections/contact-form/input'
import { Button } from '@/components/ui'
import { useGsapFadeUp } from '@/hooks/useGsapFadeUp';

const BlogForm = () => {
    const formRef = useGsapFadeUp({ trigger: ".subscribe-form", y: 0, x: 0, opacity: 0, duration: 1.5 });
    const headingRef = useGsapFadeUp({ trigger: ".subscribe-form-heading", y: 0, x: -150, opacity: 0, duration: 1.5 });
    const imageRef = useGsapFadeUp({ trigger: ".subscribe-form-image", y: 50, x: -30, opacity: 0, duration: 1.5 });
    const inputsRef = useGsapFadeUp({ trigger: ".subscribe-form-inputs", y: 100, x: 0, opacity: 0, duration: 1.5 });
    const buttonRef = useGsapFadeUp({ trigger: ".subscribe-form-button", y: 0, x: -150, opacity: 0, duration: 1.5 });

    return (
        <div ref={formRef} className='w-full subscribe-form bg-white rounded-[24px] form-shadow'>
            <div className='flex items-center gap-16 pt-16 justify-center max-md:gap-0 max-[460px]:px-4 max-[460px]:pt-8 max-[460px]:mb-8'>
                <div ref={imageRef} className='subscribe-form-image'>
                    <Image src='/assets/images/form.png' alt='Subscribe form' width={276} height={273} className='max-md:hidden' />
                </div>
                <form className='flex flex-col items-center justify-center'>
                    <div ref={headingRef} className='subscribe-form-heading'>
                        <h1 className='text-primary text-2xl font-semibold mb-2 text-center'>Subscribe</h1>
                        <p className='text-[16px] font-light text-black/40 text-center mb-8 w-75 max-[460px]:w-auto'>
                            Subscribe to our weekly newsletter to get updates and special promotions</p>
                    </div>
                    <div ref={inputsRef} className='flex flex-col gap-8 mb-8 subscribe-form-inputs'>
                        <Input type='email' />
                        <Input type='text' />
                    </div>
                    <div ref={buttonRef} className='subscribe-form-button'>
                        <Button title='Subscribe' section='header' className='w-[106px]' />
                    </div>
                </form>
            </div>
            <Image src='/assets/images/wave.png' alt='Wave' width={1000} height={1000} className='w-full rounded-b-[24px]' />
        </div>
    )
}

export default BlogForm