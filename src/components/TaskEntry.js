import PropTypes from 'prop-types'
import styled from 'styled-components'

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
  background: var(--color-surface);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  margin: 12px;
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 14px;
  box-shadow: 0 10px 24px var(--color-shadow);

  h2 {
    margin: 0;
  }
  input {
    margin-left: 8px;
    accent-color: var(--color-secondary-soft);
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
