import { Header } from "./styles";

import Logo from "../../assets/logo.svg";

function MyHeader() {
  return (
    <Header>
      <span>
        <img src={Logo} alt="Logo" />
      </span>
    </Header>
  );
}

export default Header;
