import {
  Container,
  Background,
  GridItems,
  ImageBox,
  Thumbnail,
} from "./styles";

import PosterDesk from "../../assets/poster-desk.webp";

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

        <GridItems>
          {images.map((image) => (
            <ImageBox>
              <img src={`../../assets/${image.img}`} alt={image.name} />
              <Thumbnail>
                <p>{image.name}</p>
                <span>
                  <AiOutlinePlus />
                </span>
              </Thumbnail>
            </ImageBox>
          ))}
        </GridItems>
      </Background>
    </Container>
  );
}

export default Home;
