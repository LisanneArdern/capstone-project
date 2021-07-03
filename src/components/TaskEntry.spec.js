import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TaskEntry from './TaskEntry'

describe('TaskEntry', () => {
  it('renders a checkbox as input, date, name and task', () => {
    render(
      <TaskEntry
        nameOfCrop="Pineapple"
        date="2021-07-12"
        tasks="trim"
        onClick={jest.fn}
      />
    )

    expect(screen.getByText('Pineapple:')).toBeInTheDocument()
    expect(screen.getByText('trim')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Monday, July 12'
    )
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('calls correct action when clicking on checkbox', () => {
    const deleteTask = jest.fn()
    render(
      <TaskEntry
        nameOfCrop="Pineapple"
        date="2021-07-12"
        tasks="trim"
        onClick={deleteTask}
      />
    )
    const checkbox = screen.getByRole('checkbox')
    userEvent.click(checkbox)
    expect(deleteTask).toHaveBeenCalled()
  })
})
