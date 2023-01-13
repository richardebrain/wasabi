import styled from "styled-components";


export const InputStyle = styled.input`
  width: 200px;
  height: 56px;
  border: 1px solid #8796A7;
  outline: none;
  border-radius: 5px;
  background-color: transparent;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  padding: 0 10px;
  ::placeholder {
    color: #8796A7;
    font-Weight: 400;
    }
    ${props => props.width && 'width: ' + props.width + 'px'};
    ${props => props.height && 'height: ' + props.height + 'px'};

    :focus{
        border: 1px solid #0079D2;
    }
    `

export const InputContainer = styled.div` 
    
    display: flex;
    align-items: center;
    
    `