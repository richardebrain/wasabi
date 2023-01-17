import { headerNav } from '@/helpers/routes'
import Link from 'next/link'
import React from 'react'
import { Headerstyle, LinkStyle, NavStyle, SearchContainer, TitleStyle, UserAvatar } from './header.styled'
import MenuIcon from '../../../public/menu.svg'
import CustomInput from '../customInput/input'
import SearchIcon from '../../../public/search.svg'



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
          <CustomInput icon={<SearchIcon />} />
          <div className='avatar-container'>

            <UserAvatar />
            <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.28 0.966675L7.93333 5.31334C7.42 5.82668 6.58 5.82668 6.06667 5.31334L1.72 0.966675" stroke="#062A54" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </div>

        </SearchContainer>
      </div>


    </Headerstyle>
  )
}

export default Header

