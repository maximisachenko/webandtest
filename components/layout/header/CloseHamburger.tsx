import React from 'react'

interface Props {
    onClick: React.MouseEventHandler;
}

const CloseHamburger = ({ onClick }: Props) => {
    return (
        <div className='filter relative w-[39px] h-[37px]' onClick={onClick}>
            <div className='absolute top-1/2 left-1/2 w-[24px] h-[3px] bg-[#596780] transform -translate-x-1/2 -translate-y-1/2 rotate-45'></div>
            <div className='absolute top-1/2 left-1/2 w-[24px] h-[3px] bg-[#596780] transform -translate-x-1/2 -translate-y-1/2 -rotate-45'></div>
        </div>

    )
}

export default CloseHamburger