import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Page from "../components/common/Page";
import TodoDetail from "../components/TodoDetail";
import TodoList from "../components/TodoList";

function Todos() {
  const navigate = useNavigate();

  const [selectedTodo, setSelectedTodo] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  const handleClickTodoItem = (id) => {
    setSelectedTodo(id);
  };
  return (
    <Page title="TODO">
      <Wrapper>
        <TodoList handleClickTodoItem={handleClickTodoItem} />
        <TodoDetail selectedTodo={selectedTodo} />
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.section`
  height: 100%;
  display: flex;
`;

export default Todos;
