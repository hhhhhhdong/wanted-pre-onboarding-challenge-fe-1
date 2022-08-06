import styled from "styled-components";

function Input({ type = "text", name, value, onChange }) {
  return (
    <Wrapper htmlFor={name}>
      <Name>{name}: </Name>
      <input type={type} name={name} value={value} onChange={onChange} />
    </Wrapper>
  );
}

const Wrapper = styled.label`
  padding: 5px 0;
  display: flex;
`;
const Name = styled.div`
  min-width: 80px;
`;

export default Input;
