import { useState } from "react";

import {
  Container,
  Header,
  NavBar,
  MainMenu,
  SubMenu,
  Buttons,
} from "./styles";

import JeepLogo from "../../assets/jeep_logo.svg";

import { FiChevronRight } from "react-icons/fi";

function SideBar(): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  function handleActiveItem() {
    setIsActive(!isActive);
  }

  // if we want to use Routes and whatever you want to,
  // we can create an object like: { "name": "MenuName", "link": "LinkTo", ... }

  const menuItem: string[] = [
    "RENEGADE 2021",
    "TODAS AS VERSÕES",
    "VERSÕES ESPECIAIS",
    "FOTOS",
    "TUDO DO RENEGADE:",
  ];

  const subMenuItems: string[] = [
    "Tecnologia",
    "Design",
    "Segurança",
    "Performance",
    "Opcionais",
    "Acessórios",
    "Pacotes de Serviçõs",
  ];

  const packageItems: string[] = [
    "MONTE O SEU",
    "SIMULE O FINANCIAMENTO",
    "COMPRE O SEU",
    "CONCESSIONÁRIA",
    "OFERTAS JEEP",
  ];

  return (
    <Container>
      <Header>
        <img src={JeepLogo} alt="Jeep Logo" />
      </Header>
      <NavBar>
        <MainMenu>
          <ul className="menu-item">
            {menuItem.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <SubMenu>
            {subMenuItems.map((item) => (
              <li>{item}</li>
            ))}
          </SubMenu>
        </MainMenu>
      </NavBar>
      <Buttons>
        {packageItems.map((item) => (
          <div>
            <span>{item}</span>
            <FiChevronRight className="btn-icon" />
          </div>
        ))}
      </Buttons>
    </Container>
  );
}

export default SideBar;
