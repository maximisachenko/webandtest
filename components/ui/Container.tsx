import React from 'react'

interface Props {
    children: React.ReactNode;
    type: 'default' | 'center';
    colorContainer: 'white' | 'gray';
    className?: string;
}

const Container = ({ children, type, className, colorContainer }: Props) => {
    const containerClasses = type === 'default' ? 'p-16' : 'py-16 px-54';
    const containerColor = colorContainer === 'white' ? 'bg-white' : 'bg-second'
    return (
        <div className={`${containerClasses} ${className} ${containerColor}`}>{children}</div>

    )
}

export default Container