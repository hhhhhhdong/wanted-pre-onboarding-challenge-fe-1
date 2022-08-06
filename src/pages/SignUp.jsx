import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios'
import Page from "../components/common/Page";
import Input from "../components/common/Input";

function SignUp() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState(true)

  useEffect(() => {
    if(email.length < 0 || password.length < 8) return
    if(!email.includes('@') || !email.includes('.')) return
    setValidation(false)
  }, [email, password])

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickSignUp = () => {
    axios.post('http://localhost:8080/users/create', {email, password}).then(res => {
      if(res.status === 200) {
        alert('회원가입에 성공했습니다.')
        navigate('/login')
      }
    })
  }

  return (
    <Page title="SignUp">
      <Wrapper>
        <Input name="이메일" value={email} onChange={onChangeEmail} />
        <Input
          type="password"
          name="비밀번호"
          value={password}
          onChange={onChangePassword}
        />
        <button onClick={onClickSignUp} disabled={validation}>SignUp</button>
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

export default SignUp;
