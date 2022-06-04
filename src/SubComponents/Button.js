import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Btn = styled.button`
background-color: black;
color: white;
font-size: 1rem;
padding: 0.8rem 2.5rem;
border-radius: 3rem;
cursor: pointer;
transition: all 0.2s ease;
position: relative;

&:hover{
    transform: scale(0.9);
}

&::after{
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 3rem;
    border: 2px solid black;
    /* background-color: lightblue; */
}

&:hover::after{
  transform: translate(-50%, -50%) scale(1);
  padding: 0.3rem;
}
`

// <Link to={link} target="_blank">
// </Link>
const Button = ({ text }) => {
  return (
    <Btn>
    {text}
    </Btn>
  )
}

export default Button