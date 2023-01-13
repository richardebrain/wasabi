import React from 'react'
import { InputContainer, InputStyle } from './input.style'
type inputProps = {
    height?: string,
    width?: string,
    placeholder?: string
    type?: string
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void

}

const CustomInput = ({ height, width ,handleChange}: inputProps) => {
    return (
        <InputContainer>
            <InputStyle type={'text'} placeholder='search ' height={height} width={width} onChange={handleChange}/>

        </InputContainer>
    )
}

export default CustomInput