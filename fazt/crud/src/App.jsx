
import { Typography } from "antd";
import { Form } from "./components/Form";
import { TasksList } from "./components/TaksList";
import { HashRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

const { Title } = Typography;
function App() {

  return (
    <HashRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      
      <Title type="success" style={{ textDecoration: "underline", fontStyle: "italic", textAlign: 'center' }}>
        CRUD REACT JS + REDUX-TOOLKIT
      </Title>

      <Routes>
        <Route path="/" element={<TasksList />} />
        <Route path="/create-task" element={<Form />} />
      </Routes>

    </HashRouter>
  )
};

export default App;