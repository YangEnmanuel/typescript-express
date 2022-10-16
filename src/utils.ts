import { Priorities } from './types.d'
import { NewTask } from './types'

// Data types checkers

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isPriority = (priority: any): boolean => {
  return ['high', 'medium', 'low'].includes(priority)
}

const isDone = (done: any): boolean => {
  return typeof done === 'boolean'
}

// Parsing data

const parseEntryToString = (possibleString: any): string => {
  if (!isString(possibleString)) {
    throw new Error('Invalid or missing text')
  }
  return possibleString
}

const parsePriority = (priorityFromReq: any): Priorities => {
  if (!isPriority(priorityFromReq)) {
    throw new Error('Incorrect or missing priority')
  }
  return priorityFromReq
}

const parseDone = (doneFromReq: any): boolean => {
  if (!isDone(doneFromReq)) {
    throw new Error('Invalid or missing "done" attribute')
  }
  return doneFromReq
}

export default function toNewTask(object: any): NewTask {
  const newTask: NewTask = {
    title: parseEntryToString(object.title),
    description: parseEntryToString(object.description),
    priority: parsePriority(object.priority),
    done: parseDone(object.done),
  }
  return newTask
}
