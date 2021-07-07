import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../components/Button'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import TaskEntry from '../components/TaskEntry'
import Background from '../images/vegetables.png'

TasksPage.propTypes = {
  toDos: PropTypes.array,
  onClick: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
}

export default function TasksPage({ toDos, onClick, onDeleteTask }) {
  return (
    <Wrapper>
      <PageHeader>Tasks</PageHeader>
      <Tasks>
        <TaskButton onClick={onClick}>Set Reminder</TaskButton>
        <div>
          {toDos.map(({ id, nameOfCrop, tasks, date }) => (
            <TaskEntry
              onClick={() => onDeleteTask(id)}
              key={id}
              nameOfCrop={nameOfCrop}
              tasks={tasks}
              date={date}
            />
          ))}
        </div>
      </Tasks>
      <Navigation />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: 100vh;
`
const PageHeader = styled(Header)`
  background-color: var(--color-primary-alpha);
  border-bottom: 1px solid var(--color-secondary);
`
const Tasks = styled.div`
  background-color: var(--color-primary-alpha);
  padding: 20px;
`

const TaskButton = styled(Button)`
  width: 100%;
  margin: 20px 0;
  padding: 10px 20px;
  background: var(--color-secondary);
  color: var(--color-basis);
`
