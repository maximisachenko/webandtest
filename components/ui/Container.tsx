import { ContainerProps } from '@/types';
import React from 'react'

const Container = ({ children, type, className, colorContainer }: ContainerProps) => {
    const containerClasses = type === 'default' ? 'p-16' : 'py-16 px-54';
    const containerColor = colorContainer === 'white' ? 'bg-white' : 'bg-second'
    const finalClassName = `${containerClasses} ${containerColor} ${className ? className : ''}`;

    return (
        <div className={finalClassName}>{children}</div>

    )
}

export default Container