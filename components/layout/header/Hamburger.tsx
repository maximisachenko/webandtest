import React from 'react'

interface Props {
    onClick: React.MouseEventHandler;
    children: React.ReactNode;
}

const Hamburger = ({ onClick, children }: Props) => {
    return (
        <div onClick={onClick} className='md:hidden'>
            {children}
        </div>
    );
};

export default Hamburger