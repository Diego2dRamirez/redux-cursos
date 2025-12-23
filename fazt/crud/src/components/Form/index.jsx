import React from 'react'
import { Button, Input } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTaks } from '../../features/todos/todosSlice';
import { v4 as uuid } from 'uuid'
import { useNavigate } from 'react-router-dom';

const { TextArea } = Input;

function Form() {
  const dispatch = useDispatch()
  const navigate = useNavigate();

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

    // const newTask = task;
    // setArraytasks([...arrayTasks, newTask])
    dispatch(addTaks({
      ...task,
      id: uuid(),
      completed: false
    }))
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input placeholder='Add new task' name='title' onChange={handleChange} />
      <TextArea placeholder='Add description' name='description' onChange={handleChange} />

      <button type='submit'>Save</button>
    </form>
  )
}

export { Form };
