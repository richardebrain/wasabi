import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'


const ErrorStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 100px;
  position: absolute;
  flex-direction: column;
  `


const ErrorPAGE = () => {
  return (
    <ErrorStyle className=''>
        This page does not exist
        <Link href={'/'}>
        Go Back</Link>
    </ErrorStyle>
  )
}

export default ErrorPAGE