import styled from 'styled-components/macro'
export default function TaskEntry({ nameOfCrop, tasks }) {
  return (
    <Wrapper>
      <input type="checkbox" />
      <Flex>
        <h2>{nameOfCrop}:</h2>
        <span>{tasks}</span>
      </Flex>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  margin: 10px;
  padding: 5px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

  h2 {
    margin: 0;
  }
  input {
    margin-left: 15px;
  }
`

const Flex = styled.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
`
