import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components/macro'
import Button from '../components/Button'
import CropItem from '../components/CropItem'
import Header from '../components/Header'

SearchPage.propTypes = {
  crops: PropTypes.array.isRequired,
  onClickDetails: PropTypes.func.isRequired,
  onClickFavorites: PropTypes.func.isRequired,
}

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
        placeholder="Search your favorite crops  🔍"
        name="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <Output>
        {searchTerm.length === 0 ? (
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
        ) : searchResults.length === 0 ? (
          <p>No Crops found</p>
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
    const input = event.target.value
    const results = crops.filter(
      crop =>
        crop.attributes.name.toLowerCase().includes(input) ||
        crop.attributes.name.includes(input)
    )
    setSearchTerm(input)
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
