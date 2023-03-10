import styled from "styled-components";
import { Navbar, SideMenu } from "./components";

const Container = styled.div``;
const Main = styled.div``;
const Wrapper = styled.div``;

function App() {
  return (
    <Container>
      <SideMenu />
      <Main>
        <Navbar />
      </Main>
    </Container>
  );
}

export default App;
