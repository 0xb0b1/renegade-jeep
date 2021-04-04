import SideBar from "./components/SideBar";
import Home from "./components/Home";

import { GlobalStyle } from "./styles/global";

import { Container } from "./styles/styles";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />

      <Container>
        <Home />
        <SideBar />
      </Container>
    </>
  );
}

export default App;
