import SideBar from "./components/SideBar";
import Home from "./components/Home";

import { Container } from "./styles/styles";

import { GlobalStyle } from "./styles/global";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <SideBar />
      <Home />
    </>
  );
}

export default App;
