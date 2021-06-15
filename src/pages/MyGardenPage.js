import styled from 'styled-components/macro'
import Button from '../components/Button'

export default function MyGardenPage({ onNavigate }) {
  return (
    <Wrapper>
      <h1>My Garden</h1>
      <Button onClick={onNavigate}>Back to List</Button>
    </Wrapper>
  )
}
const Wrapper = styled.section``
