import React from 'react'
import { InputContainer, InputStyle } from './input.style'
type inputProps = {
    height?: string,
    width?: string,
    placeholder?: string
    type?: string
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    icon?: React.ReactNode

}

const CustomInput = ({ height, width, handleChange, icon }: inputProps) => {
    return (
        <InputContainer>
            <InputStyle type={'text'} placeholder='search ' height={height} width={width} onChange={handleChange} />
            {
                icon && (
                    <div className='icon'>
                        {icon}

                    </div>

                )
            }

        </InputContainer>
    )
}

export default CustomInput