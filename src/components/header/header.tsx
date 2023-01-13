import { headerNav } from '@/helpers/routes'
import Link from 'next/link'
import React from 'react'
import { Headerstyle, LinkStyle, NavStyle, SearchContainer, TitleStyle, UserAvatar } from './header.styled'
import MenuIcon from '../../../public/menu.svg'
import CustomInput from '../customInput/input'


const Header = () => {
  return (
    <Headerstyle>
      <div className='inner-container'>
        <div className='nav-container'>
          <div >
            <MenuIcon />
            <TitleStyle>WASABI LTD</TitleStyle>
          </div>
          <div>

            <NavStyle>
              {
                headerNav.map((item) => (
                  <LinkStyle href={item.route} key={item.name}  >{item.name}</LinkStyle>
                ))
              }
            </NavStyle>
          </div>
        </div>
        <SearchContainer>
          <CustomInput />
          <div className='avatar-container'>

            <UserAvatar />
          </div>

        </SearchContainer>
      </div>


    </Headerstyle>
  )
}

export default Header

