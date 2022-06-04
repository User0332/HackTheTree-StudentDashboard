import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../SubComponents/Button'

const Section = styled.div`
width: 100vw;
height: 100vh;
background-color: burlywood;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Search = styled.div`

`

const Notes = () => {
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
  return (
    <Section>
      <Search>
        <input type="text" value={search} onChange={handleSearch} />
      </Search>
      <Button text="Upload"/>
    </Section>
  )
}

export default Notes