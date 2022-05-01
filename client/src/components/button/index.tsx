import * as React from 'react'

const Button: React.FC<React.InputHTMLAttributes<HTMLButtonElement>> = (otherProps) => {
    const props: any = {
        ...otherProps
    }

    return (
        <input {...props} />
    )
}

export default Button;