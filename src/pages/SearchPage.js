import { useHistory } from 'react-router-dom'
import styled, { keyframes } from 'styled-components/macro'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import BackgroundDesktop from '../images/vegetable-frame-desktop.png'
import BackgroundMobile from '../images/vegetable-frame-mobile.png'

export default function SearchPage() {
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
      <Navigation />
    </Wrapper>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const searchTerm = form.elements.search.value
    push(`/search/${searchTerm}`)
  }
}
const fadein = keyframes`
from {
 opacity: 0;
}
to {
  opacity: 1;
}
`

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: auto 48px;
  height: 100vh;
  width: 100vw;
  animation-duration: 1s;
  animation-name: ${fadein};
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

const SearchHeader = styled(Header)`
  font-family: 'Vollkorn', serif;
  font-weight: 700;
  text-align: center;
  padding-bottom: 30px;
  letter-spacing: 2px;
  font-size: 45px;
`

const Form = styled.form`
  text-align: center;
  font-weight: 300;
`

const Input = styled.input`
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 10px 0;
  width: 30ch;
`
