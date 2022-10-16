import { Task, TasksWithoutDesc, NewTask } from './../types.d'
import tasksData from './tasksData.json'

const tasks: Task[] = tasksData as Task[]

export const getTasks = (): Task[] => tasks

export const getTasksWithoutDesc = (): TasksWithoutDesc[] => {
  return tasks.map(({ id, title, done, priority }) => {
    return { id, done, title, priority }
  })
}

export const getTaskById = (id: number): Task | undefined => {
  return tasks.find((task) => task.id === id)
}

export const addTask = (NewTask: NewTask): Task => {
  const newTask = {
    id: Math.max(...tasks.map((task) => task.id)) + 1,
    ...NewTask,
  }

  tasks.push(newTask)
  return newTask
}
