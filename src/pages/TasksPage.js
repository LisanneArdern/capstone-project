import styled from 'styled-components/macro'
import Button from '../components/Button'
import Header from '../components/Header'
import TaskEntry from '../components/TaskEntry'
import Navigation from '../components/Navigation'

export default function TasksPage({ toDos, onClick }) {
  return (
    <Wrapper>
      <PageHeader>Tasks</PageHeader>
      <Tasks>
        <TaskButton onClick={onClick}>Set Reminder</TaskButton>
        <div>
          {toDos.map((toDo, index) => (
            <TaskEntry
              key={index}
              nameOfCrop={toDo.nameOfCrop}
              tasks={toDo.tasks}
            />
          ))}
        </div>
      </Tasks>
      <Navigation />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: 100vh;
`
const PageHeader = styled(Header)`
  border-bottom: 1px solid var(--color-dark-green);
`
const Tasks = styled.div`
  padding: 20px;
`

const TaskButton = styled(Button)`
  width: 100%;
  margin: 20px 0;
  padding: 10px 20px;
  background: var(--color-dark-green);
  color: white;
`
