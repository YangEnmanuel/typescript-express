import {
  getTasks,
  getTasksWithoutDesc,
  getTaskById,
  addTask,
} from './../services/tasksServices'
import { Router } from 'express'
import toNewTask from '../utils'

export const router = Router()

// The _ is for ignoring the parameter
router.get('/', (_req, res) => {
  res.json({ msg: 'Hello' })
})

router.get('/tasks', (_req, res) => {
  res.send(getTasks())
})

router.get('/noDescTasks', (_req, res) => {
  res.json(getTasksWithoutDesc())
})

router.get('/tasks/:id', (req, res) => {
  res.json(getTaskById(Number(req.params.id)))
})

router.post('/tasks', (req, res) => {
  // const { title, description, done, priority } = req.body

  // res.json(addTask({ title, description, done, priority }))

  try {
    const newTaskEntry = toNewTask(req.body)

    const addedTask = addTask(newTaskEntry)
    res.json(addedTask)
  } catch (e: any) {
    res.status(400).json(e.message)
  }
})
