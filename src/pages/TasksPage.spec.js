import { render, screen } from '@testing-library/react'
import TasksPage from './TasksPage'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe('TasksPage', () => {
  it('renders tasks', () => {
    render(
      <MemoryRouter>
        <TasksPage
          toDos={[
            {
              id: 1,
              nameOfCrop: 'Apple',
              tasks: 'water',
              date: '2021-07-12',
            },
            {
              id: 2,
              nameOfCrop: 'Potato',
              tasks: 'trim',
              date: '2021-07-20',
            },
          ]}
          onClick={jest.fn}
          onDeleteTask={jest.fn}
        />
      </MemoryRouter>
    )

    const apple = screen.getByText(/(wa)\w+/gi)
    const potato = screen.getByText(/(tri)\w+/g)
    expect(apple).toBeInTheDocument()
    expect(potato).toBeInTheDocument()
  })
  it('calls correct functions', () => {
    const handleClick = jest.fn()
    const handleDelete = jest.fn()
    render(
      <MemoryRouter>
        <TasksPage
          toDos={[
            {
              id: 1,
              nameOfCrop: 'Apple',
              tasks: 'water',
              date: '2021-07-12',
            },
          ]}
          onClick={handleClick}
          onDeleteTask={handleDelete}
        />
      </MemoryRouter>
    )

    const checkbox = screen.getByRole('checkbox')
    userEvent.click(checkbox)
    expect(handleDelete).toHaveBeenCalled()

    const taskButton = screen.getByRole('button')
    userEvent.click(taskButton)
    expect(handleClick).toHaveBeenCalled()
  })
})
