import styled from "styled-components";
import Page from "../components/common/Page";
import Input from "../components/common/Input";
import { useState } from "react";
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickLogin = () => {
    console.log(email, password)
    axios.post('http://localhost:8080/users/login', {email, password}).then(res => {
      console.log(res)
    })
  }

  return (
    <Page title="Login">
      <Wrapper>
        <Input name="이메일" value={email} onChange={onChangeEmail} />
        <Input
          type="password"
          name="비밀번호"
          value={password}
          onChange={onChangePassword}
        />
        <button onClick={onClickLogin}>login</button>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Login;
