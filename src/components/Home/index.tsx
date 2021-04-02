import {
  Container,
  Background,
  GridItems,
  ImageBox,
  Thumbnail,
  PosterHeader,
  FeatureThumb,
  FeatureList,
  Header,
} from "./styles";

import PosterDesk from "../../assets/poster-desk.webp";

import Logo from "../../assets/logo.svg";

import { AiOutlinePlus } from "react-icons/ai";

interface ImageProps {
  name: string;
  img: string;
}

function Home(): JSX.Element {
  const images: Array<ImageProps> = [
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
            <span>
              <img src={Logo} alt="Header Logo" />
            </span>
          </div>
          <div className="header-title">
            <span>RENEGADE</span>
            <span>2021</span>
          </div>
          <div className="header-slogan">
            <span>JEEP RENEGADE.</span>
            <span>A AVENTURA ESTÁ</span>
            <span>NO SANGUE.</span>
          </div>
        </Header>

        <FeatureThumb>
          <FeatureList>
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
          </FeatureList>
        </FeatureThumb>
      </PosterHeader>
    </Container>
  );
}

export default Home;
