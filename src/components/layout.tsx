import React, { ReactComponentElement, ReactElement } from 'react'
import styled from 'styled-components'
import Header from './header/header'

const LayoutDiv = styled.div`
  background-color: #F8F9FB;
  height:1800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  justify-content: space-between;
  position: relative;

  & .ads{
    background-color: #FAFEFF;

    width:970px;
    height: 90px;
    margin: 0 auto;
    font-size: 20px;
    text-align: center;
    line-height: 90px;
    border-radius: 10px;

  }
  
  `
type LayoutProps = {
    children: React.ReactNode
}



const Layout = ({ children }: LayoutProps) => {
    return (
        <LayoutDiv>
            <Header />

            {children}
            <div className='ads '>
                Adds
            </div>

        </LayoutDiv>
    )
}

export default Layout