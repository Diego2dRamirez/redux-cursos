import { Flex } from "antd";
import { Typography } from "antd";
import { useSelector } from "react-redux";
import { Form } from "./components/Form";

const { Title, Paragraph, Text, } = Typography;
function App() {
  const todos = useSelector(state => state.todos.tasks)

  console.table(todos);

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
              <Paragraph type="danger">{todo.description}</Paragraph>
            </article>
          )
        }
      </Flex>


    </>
  )
};

export default App;