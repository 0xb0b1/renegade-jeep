import { useViewport } from "../../hooks/useViewport";

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
  // ButtonsContainer,
  FeatureButtons,
} from "./styles";

// icons
import { AiOutlinePlus } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";

// logos
import PosterDesk from "../../assets/poster-desk.webp";
import MobilePoster from "../../assets/poster-mobile.webp";
import PosterTitle from "../../assets/title.svg";
import Slogan from "../../assets/slogan.svg";
import Logo from "../../assets/logo.svg";

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
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  const { width } = useViewport();

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
        <img src={width > 603 ? PosterDesk : MobilePoster} alt="poster desk" />
      </Background>
      <PosterHeader>
        <Poster>
          <div className="logo">
            <span className="hamburger">
              <HiMenuAlt1 />
            </span>
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
            {/* make this component draggable when in mobile screen */}
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

      {/* <ButtonsContainer> */}
      <FeatureButtons>
        <div>
          <span>MONTE O SEU</span>
        </div>
        <div>
          <span>COMPRE O SEU</span>
        </div>
      </FeatureButtons>
      {/* </ButtonsContainer> */}
    </Container>
  );
}

export default Home;
