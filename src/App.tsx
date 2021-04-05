import SideBar from "./components/SideBar";
import Home from "./components/Home";

import { GlobalStyle } from "./styles/global";

import { Container } from "./styles/styles";

import { ViewportProvider } from "./hooks/useViewport";

function App(): JSX.Element {
  return (
    <ViewportProvider>
      <GlobalStyle />

      <Container>
        <Home />
        <SideBar />
      </Container>
    </ViewportProvider>
  );
}

export default App;
