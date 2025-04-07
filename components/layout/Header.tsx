import React from 'react'
import { Button, Logo } from '../ui'

const Header = () => {
    return (
        <div className='flex items-center justify-between ml-16 mr-8 py-8'>
            <Logo width={181} height={62} />
            <div className='flex gap-16'>
                <ul className='flex gap-8 items-center'>
                    <li>
                        <a href='/'>About us</a>
                    </li>
                    <li>
                        <a href='/'>Directions</a>
                    </li>
                    <li>
                        <a href='/'>Team</a>
                    </li>
                    <li>
                        <a href='/'>Cases</a>
                    </li>
                    <li>
                        <a href='/'>Reviews</a>
                    </li>
                </ul>
                <Button title={'Contact us'} section={'header'} />
            </div>
        </div>
    )
}

export default Header