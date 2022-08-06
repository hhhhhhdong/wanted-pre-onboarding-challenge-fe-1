import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Todos from "./pages/Todos";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 30px 10px;
  width: 700px;
  height: 700px;
  background-color: #f7f8f9;
`;

export default App;
