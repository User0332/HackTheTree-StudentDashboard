import React from 'react'
import styled from 'styled-components'
import img from '../assets/bighead-3.svg'

const Prof = styled.div`
border-radius: 50%;
width: 2.5rem;
height: 2.5rem;
background-color: white;
border: 2px solid black;
background-image: url(https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png);
`

const Profile = () => {
  return (
    <Prof onClick={() => alert("profile")}>
    </Prof>
  )
}

export default Profile