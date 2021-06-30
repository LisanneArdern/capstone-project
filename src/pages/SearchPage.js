import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from '../components/Button'
import Header from '../components/Header'
import BackgroundDesktop from '../images/vegetable-frame-desktop.png'
import BackgroundMobile from '../images/vegetable-frame-mobile.png'

SearchPage.propTypes = {
  onFavorites: PropTypes.func.isRequired,
}

export default function SearchPage({ onFavorites }) {
  const { push } = useHistory()
  return (
    <Wrapper>
      <Background>
        <Content>
          <SearchHeader>Harvestly</SearchHeader>
          <Form onSubmit={handleSubmit}>
            {/* Using div instead of label tag for easier styling */}
            <div>What do you want to grow?</div>
            <Input
              type="text"
              placeholder="Search for your favorite crops"
              name="search"
              aria-label="Search for crops"
              autoComplete="off"
            />
          </Form>
        </Content>
      </Background>

      <MyGardenButton onClick={onFavorites}>My Garden</MyGardenButton>
    </Wrapper>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const searchTerm = form.elements.search.value
    push(`/results/${searchTerm}`)
  }
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: auto 48px;
  height: 100vh;
  width: 100vw;
`
const SearchHeader = styled(Header)`
  text-align: center;
  padding-bottom: 35px;
`

const Background = styled.div`
  background-image: url(${BackgroundMobile});
  background-size: cover;
  background-position: center;
  @media (min-width: 700px) {
    background-image: url(${BackgroundDesktop});
  }
  display: flex;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  padding-bottom: 150px;
`

const Form = styled.form`
  /* align-self: center;
  justify-self: center;
  padding-bottom: 150px; */
`

const Input = styled.input`
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 10px 0;
`

const MyGardenButton = styled(Button)`
  margin: 0 10px;
`
