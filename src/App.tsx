import SideBar from "./components/SideBar";
import Home from "./components/Home";
import MyHeader from "./components/Header";

import { GlobalStyle } from "./styles/global";

import { Container } from "./styles/styles";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />

      <Container>
        {/* <MyHeader /> */}
        <Home />
        <SideBar />
      </Container>
    </>
  );
}

export default App;
