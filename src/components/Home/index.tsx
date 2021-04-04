// styling components
import {
  Container,
  Background,
  GridItems,
  ImageBox,
  Thumbnail,
  PosterHeader,
  FeatureThumb,
  FeatureList,
  Poster,
} from "./styles";

// logos
import PosterDesk from "../../assets/poster-desk.webp";
import PosterTitle from "../../assets/title.svg";
import Slogan from "../../assets/slogan.svg";
import Logo from "../../assets/logo.svg";

// icons
import { AiOutlinePlus } from "react-icons/ai";

// thumbnail images
import farois from "../../assets/1-farois@2x.webp";
import centralMultimedia from "../../assets/2-central-multimidia@2x.webp";
import airBags from "../../assets/3-air-bags@2x.webp";
import suspensaoIndependente from "../../assets/4-suspensao-independente@2x.webp";
import seletorTerreno from "../../assets/5-seletor-terrenos@2x.webp";

interface ImageProps {
  name: string;
  img: string;
}

function Home(): JSX.Element {
  const images: Array<ImageProps> = [
    {
      img: farois,
      name: "FAROIS FULL LED",
    },
    {
      img: centralMultimedia,
      name: "CENTRAL MULTIMIDIA",
    },
    {
      img: airBags,
      name: "7 AIRBAGS",
    },
    {
      img: suspensaoIndependente,
      name: "SUSPENSÃO INDEPENDENTE",
    },
    {
      img: seletorTerreno,
      name: "SELETOR DE TERRENOS",
    },
  ];

  return (
    <Container>
      <Background>
        <img src={PosterDesk} alt="poster desk" />
      </Background>
      <PosterHeader>
        <Poster>
          <div className="logo">
            <img src={Logo} alt="Header Logo" />
          </div>
          <div className="header-title">
            <img src={PosterTitle} alt="Poster Title" />
          </div>
          <div className="header-slogan">
            <img src={Slogan} alt="Slogan" />
          </div>
        </Poster>

        <FeatureThumb>
          <FeatureList>
            <GridItems>
              {images.map((image) => (
                <ImageBox>
                  <img src={image.img} alt={image.name} />
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
