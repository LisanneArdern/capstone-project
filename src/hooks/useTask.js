import { useEffect, useState } from 'react'
import { loadFromLocal, saveToLocal } from '../utils/localStorage'

export default function useTasks() {
  const [taskList, setTaskList] = useState(loadFromLocal('taskList') ?? [])

  useEffect(() => {
    saveToLocal('taskList', taskList)
  }, [taskList])

  function addTask({ date, tasks, nameOfCrop, id }) {
    setTaskList([{ date, tasks, nameOfCrop, id }, ...taskList])
  }

  function deleteTask(id) {
    const isInTaskList = taskList.some(task => task.id === id)
    if (isInTaskList) {
      setTaskList(taskList.filter(task => task.id !== id))
    }
  }

  return {
    addTask,
    deleteTask,
    taskList,
  }
}
