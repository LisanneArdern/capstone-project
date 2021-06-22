import { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import CropItem from '../components/CropItem'
import Header from '../components/Header'

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
      <Input
        placeholder="Search your favorite crops"
        value={searchTerm}
        onChange={handleChange}
      />
      <Output>
        {searchResults.length === 0 ? (
          <>
            {crops.map(({ id, attributes }) => (
              <CropItem
                key={id}
                name={attributes.name}
                image={attributes.main_image_path}
                onClick={() => onClickDetails(id)}
              />
            ))}
          </>
        ) : (
          <>
            {searchResults.map(({ id, attributes }) => (
              <CropItem
                key={id}
                name={attributes.name}
                image={attributes.main_image_path}
                onClick={() => onClickDetails(id)}
              />
            ))}
          </>
        )}
      </Output>

      <Button onClick={onClickFavorites}>My Garden</Button>
    </Wrapper>
  )

  function handleChange(event) {
    setSearchTerm(event.target.value)
    const results = crops.filter(
      crop =>
        crop.attributes.name.toLowerCase().includes(searchTerm) ||
        crop.attributes.name.includes(searchTerm)
    )
    setSearchResults(results)
  }
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 48px 40px auto 48px;
  height: 100vh;
`
const Input = styled.input`
  justify-self: center;
  border: 0.1em solid #d3d3d3;
  border-radius: 1em;
  padding: 0.35em 1.2em;
`
const Output = styled.div`
  overflow-y: auto;
`
