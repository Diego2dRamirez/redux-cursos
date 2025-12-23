import React from 'react'
import { Button, Flex, Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from '../../features/todos/todosSlice';
import { Link } from 'react-router-dom';


const { Title, Paragraph, Text, } = Typography;

function TasksList() {
  const todos = useSelector(state => state.todos.tasks)
  const dispacth = useDispatch();

  const handleDelete = (id) => {
    dispacth(deleteTask(id))
  }
  return (
    <section>

      <div className='container-count'>
        <Title level={2} className='taskCount'>
          Task {todos.length}
        </Title>
        <Link className='create-task' to={'/create-task'}> add task</Link>
      </div>

      <Flex vertical align="center">
        {
          todos.map(todo =>
            <article key={todo.id}>
              <Title type="warning" level={3}>{todo.title}</Title>
              <Paragraph style={{ color: "#fff" }}>{todo.description}</Paragraph>
              <Button variant="solid" color="danger" onClick={() => handleDelete(todo.id)}>
                delete
              </Button>
            </article>
          )
        }
      </Flex>
    </section>
  )
}

export { TasksList };