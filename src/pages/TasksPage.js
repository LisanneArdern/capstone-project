import styled from 'styled-components/macro'
import Button from '../components/Button'
import Header from '../components/Header'
import TaskEntry from '../components/TaskEntry'
import Navigation from '../components/Navigation'

export default function TasksPage({ toDos, onClick }) {
  return (
    <Wrapper>
      <Header>Tasks</Header>
      <Main>
        <Button onClick={onClick}>Add new Task</Button>
        <div>
          {toDos.map((toDo, index) => (
            <TaskEntry
              key={index}
              nameOfCrop={toDo.nameOfCrop}
              tasks={toDo.tasks}
            />
          ))}
        </div>
      </Main>
      <Navigation />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: 100vh;
`
const Main = styled.main`
  height: 100%;
`
