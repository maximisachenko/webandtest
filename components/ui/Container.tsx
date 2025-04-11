import React from 'react'

interface Props {
    children: React.ReactNode;
    type: 'default' | 'center';
    colorContainer: 'white' | 'gray';
    className?: string;
    ref?: React.Ref<HTMLDivElement>;
}

const Container = ({ children, type, className, colorContainer }: Props) => {
    const containerClasses = type === 'default' ? 'p-16' : 'py-16 px-54';
    const containerColor = colorContainer === 'white' ? 'bg-white' : 'bg-second'
    const finalClassName = `${containerClasses} ${containerColor} ${className ? className : ''}`;

    return (
        <div className={finalClassName}>{children}</div>

    )
}

export default Container