import { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Header from '../components/Header'
import CropItem from '../components/CropItem'

export default function SearchPage({
  crops,
  onClickFavorites,
  onClickDetails,
}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  return (
    <Wrapper>
      <Header>Search</Header>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <div>
          {searchResults.map(({ id, attributes }) => (
            <CropItem
              key={id}
              name={attributes.name}
              image={attributes.main_image_path}
              onClick={() => onClickDetails(id)}
            />
          ))}
        </div>
      </div>
      <Button onClick={onClickFavorites}>My Garden</Button>
    </Wrapper>
  )

  function handleChange(event) {
    setSearchTerm(event.target.value)
    const results = crops.filter(crop =>
      crop.attributes.name.toLowerCase().includes(searchTerm)
    )
    setSearchResults(results)
    console.log(searchResults)
  }
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 48px auto 48px;
  height: 100vh;
`
