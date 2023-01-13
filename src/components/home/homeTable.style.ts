import styled from "styled-components";
import Image from "next/image";
export const TableWrapperStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  `
export const TabStyle = styled.div`
  display: flex;
  align-items: center;
    gap: 20px;
    width: 100%;
    justify-content: center;
  `
export const TabButtonStyle = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
  font-weight: 400;
  color: #0B2F59;
;
  `
export const ImageTabStyle = styled.div`
  display: flex;
    align-items: center;
 
    
  `
export const ImageContainerStyle = styled.div`
  display: flex;
  align-items: center;
flex-direction: column;
  width: 230.75px;
  height: 220px;
  gap: 10px;
  border-radius: 5px;
background-color: #fff;
padding: 20px;
background-color: #F0F4F8;
border: 1px solid #E5E5E5;

  `
export const ImageStyle = styled(Image)`
${props => props.width && 'width: ' + props.width + 'px'};
 ${props => props.height && 'height: ' + props.height + 'px'};
border-radius: 5px;


  
  `