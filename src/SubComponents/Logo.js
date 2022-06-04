import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'


const LogoText = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: 4em;
color: black;
cursor: pointer;
transition: all 0.2s ease;

&:hover{
    transform: scale(1.1);
}
`


const Logo = () => {
  return (
    <LogoText>
    StudUp.
    </LogoText>
  )
}

export default Logo