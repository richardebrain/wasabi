import styled from "styled-components";

export const MainStyle = styled.main`
width:90%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
margin: 0 auto;
& .main-header{
    margin-top: 20px;

    & .heading{
        font-size: 24px;
        font-weight: 700;
        color: #000;
        text-align: center;
    
    }
    & .description{
        font-size: 14px;
        font-weight: 400;
        color: #0B2F59;
        text-align: center;

    }
}
  `