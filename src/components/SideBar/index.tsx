// styling components
import {
  Container,
  Header,
  NavBar,
  MainMenu,
  SubMenu,
  FeatureButtons,
} from "./styles";

import JeepLogo from "../../assets/jeep_logo.svg";

import { FiChevronRight } from "react-icons/fi";
import { useOpenMenu } from "../../hooks/useOpenMenu";
import { useViewport } from "../../hooks/useViewport";

// import { HiMenuAlt1, HiX } from "react-icons/hi";

function SideBar(): JSX.Element {
  const { isOpenMenu } = useOpenMenu();
  const { width } = useViewport();

  // if we want to use Routes and whatever you want to,
  // we can create an object like: { "name": "MenuName", "link": "LinkTo", ... }

  const menuItem: Array<string> = [
    "RENEGADE 2021",
    "TODAS AS VERSÕES",
    "VERSÕES ESPECIAIS",
    "FOTOS",
    "TUDO DO RENEGADE:",
  ];

  const subMenuItems: Array<string> = [
    "Tecnologia",
    "Design",
    "Segurança",
    "Performance",
    "Opcionais",
    "Acessórios",
    "Pacotes de Serviçõs",
  ];

  const packageItems: Array<string> = [
    "MONTE O SEU",
    "SIMULE O FINANCIAMENTO",
    "COMPRE O SEU",
    "CONCESSIONÁRIA",
    "OFERTAS JEEP",
  ];

  return (
    <Container
      style={{
        transform:
          width < 820
            ? isOpenMenu
              ? "translateX(0)"
              : "translateX(-100%)"
            : "",
      }}
    >
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
      <FeatureButtons>
        {packageItems.map((item) => (
          <div>
            <span>{item}</span>
            <FiChevronRight className="btn-icon" />
          </div>
        ))}
      </FeatureButtons>
    </Container>
  );
}

export default SideBar;
