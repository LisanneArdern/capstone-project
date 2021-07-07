import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

TaskEntry.propTypes = {
  nameOfCrop: PropTypes.string,
  date: PropTypes.string,
  tasks: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default function TaskEntry({ onClick, date, nameOfCrop, tasks }) {
  return (
    <Wrapper>
      <input type="checkbox" onClick={onClick} />
      <Grid>
        <h2>{formatDate(date)}</h2>
        <Flex>
          <span>{nameOfCrop}:</span>
          <span>{tasks}</span>
        </Flex>
      </Grid>
    </Wrapper>
  )
  function formatDate(date) {
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    }

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
const Flex = styled.div`
  display: flex;
  gap: 5px;
`
