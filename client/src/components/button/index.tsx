import * as React from 'react';

const Button: React.FC<React.InputHTMLAttributes<HTMLButtonElement>> = (otherProps) => {
    const props: any = {
        ...otherProps
    }

    return (
    <button className={'p-2 border-black border rounded-sm text-center w-full'} {...props} />
    );
}

export default Button;