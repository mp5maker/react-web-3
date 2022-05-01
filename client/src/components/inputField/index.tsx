import * as React from 'react'

interface IInputField extends React.InputHTMLAttributes<HTMLInputElement> {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField: React.FC<IInputField> = (otherProps) => {
    const props: any = {
        ...otherProps
    }

    return (
        <input {...props} />
    )
}

export default InputField;