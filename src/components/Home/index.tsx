import {
  Container,
  Background,
  GridItems,
  ImageBox,
  Thumbnail,
  PosterHeader,
  Header,
} from "./styles";

import PosterDesk from "../../assets/poster-desk.webp";

import JeepLogo from "../../assets/jeep_logo.svg";

import { AiOutlinePlus } from "react-icons/ai";

interface ImageProps {
  name: string;
  img: string;
}

function Home(): JSX.Element {
  const images: ImageProps[] = [
    {
      img: "1-farois@2x.webp",
      name: "FAROIS FULL LED",
    },
    {
      img: "2-central-multimidia@2x.webp",
      name: "CENTRAL MULTIMIDIA",
    },
    {
      img: "3-air-bags@2x.webp",
      name: "7 AIRBAGS",
    },
    {
      img: "4-suspensao-independente@2x.webp",
      name: "SUSPENSÃO INDEPENDENTE",
    },
    {
      img: "5-seletor-terrenos@2x.webp",
      name: "SELETOR DE TERRENOS",
    },
  ];

  return (
    <Container>
      <Background>
        <img src={PosterDesk} alt="poster desk" />
      </Background>
      <PosterHeader>
        <Header>
          <div className="logo">
            <img src={JeepLogo} alt="Header Logo" />
          </div>
          <div>
            <span>RENEGADE</span>
            <span>2021</span>
          </div>
          <div>
            <span>JEEP RENEGADE.</span>
            <span>A AVENTURA ESTÁ</span>
            <span>NO SANGUE.</span>
          </div>
        </Header>

        <GridItems>
          {images.map((image) => (
            <ImageBox>
              <img src={`../../assets/${image.img}`} alt={image.name} />
              <Thumbnail>
                <p>{image.name}</p>
                <span>
                  <AiOutlinePlus className="plus-icon" />
                </span>
              </Thumbnail>
            </ImageBox>
          ))}
        </GridItems>
      </PosterHeader>
    </Container>
  );
}

export default Home;
