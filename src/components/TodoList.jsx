import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Input from "./common/Input";

function TodoList({ handleClickTodoItem }) {
  const navigate = useNavigate();

  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }

    axios
      .get("http://localhost:8080/todos", { headers: { Authorization: token } })
      .then((res) => {
        if (res.status === 200) {
          setTodos(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClickTodoCreate = () => {
    if (!title || !content) {
      return;
    }
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    axios
      .post(
        "http://localhost:8080/todos",
        { title, content },
        { headers: { Authorization: token } }
      )
      .then((res) => {
        if (res.status === 200) {
          setTodos((prev) => [...prev, res.data.data]);
          setTitle("");
          setContent("");
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Wrapper>
      <div>
        <Input name="title" value={title} onChange={onChangeTitle} />
        <Input name="content" value={content} onChange={onChangeContent} />
        <button onClick={onClickTodoCreate}>추가</button>
      </div>
      <ul>
        {todos.length > 0 &&
          todos.map((todo) => (
            <li onClick={() => handleClickTodoItem(todo.id)} key={todo.id}>
              {todo.title}
            </li>
          ))}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 50%;
  margin: 5px;
  border: 1px solid grey;
`;

export default TodoList;
