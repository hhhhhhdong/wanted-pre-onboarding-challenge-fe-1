import styled from "styled-components";
import Page from "../components/common/Page";
import Input from "../components/common/Input";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

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
