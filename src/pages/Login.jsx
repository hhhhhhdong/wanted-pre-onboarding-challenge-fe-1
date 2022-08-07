import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Page from "../components/common/Page";
import Input from "../components/common/Input";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState(true);

  useEffect(() => {
    if (email.length < 0 || password.length < 8) return;
    if (!email.includes("@") || !email.includes(".")) return;
    setValidation(false);
  }, [email, password]);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickLogin = () => {
    axios
      .post("http://localhost:8080/users/login", { email, password })
      .then((res) => {
        if (res.status === 200) {
          const token = res.data.token;
          localStorage.setItem("token", token);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
        <button onClick={onClickLogin} disabled={validation}>
          Login
        </button>
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
