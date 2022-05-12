import * as React from 'react'

interface IInputField extends React.InputHTMLAttributes<HTMLInputElement> {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField: React.FC<IInputField> = (otherProps) => {
    const props: any = {
        ...otherProps
    }

    return (
        <input className={'p-2 border-black border rounded-sm'} {...props} />
    )
}

export default InputField;