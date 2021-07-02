import styled from 'styled-components/macro'

export default function TaskEntry({ onClick, date, nameOfCrop, tasks }) {
  return (
    <Wrapper>
      <input type="checkbox" onClick={onClick} />
      <Grid>
        <h2>{formatDate(date)}</h2>
        {nameOfCrop}: {tasks}
      </Grid>
    </Wrapper>
  )
  function formatDate(date) {
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    }
    console.log(date)
    const newDate = new Date(date)
    const formatedDate = newDate.toLocaleDateString('en-US', options)

    return formatedDate
  }
}
const Wrapper = styled.section`
  background: var(--color-basis);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  margin: 10px;
  padding: 5px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  box-shadow: 0px 8px 15px var(--color-shadow);

  h2 {
    margin: 0;
  }
  input {
    margin-left: 15px;
  }
`

const Grid = styled.div`
  display: grid;
  gap: 10px;
`
