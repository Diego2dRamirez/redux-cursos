import React from 'react'
import { Button, Input } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTaks, updateTask } from '../../features/todos/todosSlice';
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const { TextArea } = Input;

function Form() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const params = useParams();
  const todos = useSelector(state => state.todos.tasks)

  const [task, setTask] = useState({
    title: '',
    description: '',
  })

  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.table(task)

    if (params.id) {
      dispatch(updateTask(task))
    } else {
      // const newTask = task;
      // setArraytasks([...arrayTasks, newTask])
      dispatch(addTaks({
        ...task,
        id: uuid(),
        completed: false
      }))
    }

    navigate('/')
  }

  useEffect(() => {
    if (params.id) {
      setTask(todos.find(todo => todo.id === params.id)
      )
    }
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Input placeholder='Add new task' name='title' onChange={handleChange}
        value={task.title}
      />
      <TextArea placeholder='Add description' name='description' onChange={handleChange}
        value={task.description}
      />

      <button type='submit'>Save</button>
    </form>
  )
}

export { Form };
