import SideBar from "./components/SideBar";
import Home from "./components/Home";

import { GlobalStyle } from "./styles/global";

import { Container } from "./styles/styles";

import { ViewportProvider } from "./hooks/useViewport";
import { OpenMenuProvider } from "./hooks/useOpenMenu";

function App(): JSX.Element {
  return (
    <ViewportProvider>
      <OpenMenuProvider>
        <GlobalStyle />

        <Container>
          <Home />
          <SideBar />
        </Container>
      </OpenMenuProvider>
    </ViewportProvider>
  );
}

export default App;
