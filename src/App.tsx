import SideBar from "./components/SideBar";
import Home from "./components/Home";

import { GlobalStyle } from "./styles/global";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Home />
      <SideBar />
    </>
  );
}

export default App;
