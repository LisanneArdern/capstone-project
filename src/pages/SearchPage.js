import PropTypes from 'prop-types'
//import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import Button from '../components/Button'
import CropItem from '../components/CropItem'
import Header from '../components/Header'

SearchPage.propTypes = {
  onDetails: PropTypes.func.isRequired,
  onFavorites: PropTypes.func.isRequired,
}

export default function SearchPage({
  handleSubmit,
  crops,
  onFavorites,
  onDetails,
}) {
  return (
    <Wrapper>
      <Header>Harvestly</Header>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search for your favorite crops"
          name="search"
          aria-label="Search for crops"
          autoComplete="off"
        />
        <button>submit</button>
      </form>

      <Output>
        <>
          {crops
            ?.filter(crop => crop.attributes.main_image_path.match(/(https)/gi))
            .map(({ id, attributes }) => (
              <CropItem
                key={id}
                name={attributes.name}
                image={attributes.main_image_path}
                onClick={() => onDetails(id)}
              />
            ))}
        </>
      </Output>

      <MyGardenButton onClick={onFavorites}>My Garden</MyGardenButton>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 48px 40px auto 48px;
  height: 100vh;
`

const Input = styled.input`
  justify-self: center;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 1px 10px;
`
const Output = styled.div`
  overflow-y: auto;
`
const MyGardenButton = styled(Button)`
  margin: 0 10px;
`
