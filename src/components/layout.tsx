import React, { ReactComponentElement, ReactElement } from 'react'
import styled from 'styled-components'
import Header from './header/header'

const LayoutDiv = styled.div`
  background-color: #F8F9FB;
  height: 2708px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  `
type LayoutProps ={
    children: React.ReactNode
}



const Layout = ({children} : LayoutProps) => {
    return (
        <LayoutDiv>
            <Header />
            
                {children}
            
        </LayoutDiv>
    )
}

export default Layout