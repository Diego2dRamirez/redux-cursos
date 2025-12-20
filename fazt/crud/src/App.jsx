import { Typography } from "antd";
import { useSelector } from "react-redux";

const { Title } = Typography;
function App() {
  const todos = useSelector(state => state.todos.tasks)

  console.log(todos);

  return (
    <>
      <Title type="success" style={{ textDecoration: "underline", fontStyle: "italic", }}>
        CRUD REACT JS + REDUX-TOOLKIT
      </Title>

    </>
  )
};

export default App;