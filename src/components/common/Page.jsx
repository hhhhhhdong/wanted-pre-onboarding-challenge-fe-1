import Header from "./Header";
import styled from "styled-components";

function Page({ children, title, ...other }) {
  return (
    <Wrapper {...other}>
      <Header title={title} />
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100%;
`;

export default Page;
