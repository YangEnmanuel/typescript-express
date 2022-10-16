export type Priorities = 'high' | 'medium' | 'low'

export interface Task {
  id: number
  done: boolean
  title: string
  description: string
  priority: Priorities
}

export type TasksWithoutDesc = Omit<Task, 'description'>

export type NewTask = Omit<Task, 'id'>
