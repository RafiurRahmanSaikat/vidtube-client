import styled from "styled-components";
import "./App.css";
import { Navbar, SideMenu } from "./components";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div``;
const Wrapper = styled.div``;

function App() {
  return (
    <Container>
      <SideMenu />
      <Main>
        <Navbar />
        <Wrapper>Video Cards</Wrapper>
      </Main>
    </Container>
  );
}

export default App;
