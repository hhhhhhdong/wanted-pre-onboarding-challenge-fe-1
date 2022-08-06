import styled from "styled-components";

function Header({ title }) {
  return <Wrapper>{title}</Wrapper>;
}

const Wrapper = styled.h2`
  text-align: center;
`;

export default Header;
