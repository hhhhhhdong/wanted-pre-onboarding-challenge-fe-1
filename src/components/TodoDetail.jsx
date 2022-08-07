import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function TodoDetail({ selectedTodo }) {
  const navigate = useNavigate();
  const [todo, setTodo] = useState({});
  useEffect(() => {
    if (!selectedTodo) return;
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }

    axios
      .get(`http://localhost:8080/todos/${selectedTodo}`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setTodo(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedTodo]);
  return (
    <Wrapper>
      <div>{todo.title}</div>
      <div>{todo.content}</div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 50%;
  margin: 5px;
  border: 1px solid grey;
`;

export default TodoDetail;
