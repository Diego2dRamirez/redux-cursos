import { Button, Flex } from "antd";
import { Typography } from "antd";
import { useSelector } from "react-redux";
import { Form } from "./components/Form";
import { useDispatch } from "react-redux";
import { deleteTask } from "./features/todos/todosSlice";

const { Title, Paragraph, Text, } = Typography;
function App() {
  const todos = useSelector(state => state.todos.tasks)
  const dispacth = useDispatch();

  const handleDelete = (id) => {
    dispacth(deleteTask(id))
  }

  return (
    <>
      <Title type="success" style={{ textDecoration: "underline", fontStyle: "italic", textAlign: 'center' }}>
        CRUD REACT JS + REDUX-TOOLKIT
      </Title>

      <Form />

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


    </>
  )
};

export default App;