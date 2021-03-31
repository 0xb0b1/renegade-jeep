import { useState } from "react";
import { Container, Brand, NavBar, MainMenu, SubMenu, Buttons } from "./styles";
import JeepLogo from "../../assets/jeep_logo.svg";

function SideBar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(true);

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

  return (
    <Container>
      <Brand>
        <img src={JeepLogo} alt="Jeep Logo" />
      </Brand>
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
        <button>
          <span>MONTE O SEU</span>
        </button>
        <button>
          <span> SIMULE O FINACIAMENTO</span>
        </button>
        <button>
          <span>COMPRE O SEU</span>
        </button>
        <button>
          <span>CONCESSIONÁRIA</span>
        </button>
        <button>
          <span>OFERTAS JEEP</span>
        </button>
      </Buttons>
    </Container>
  );
}

export default SideBar;
