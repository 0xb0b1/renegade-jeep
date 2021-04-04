import styled from "styled-components";

export const Container = styled.div`
  grid-column: 2/3;
  background: #ccc;

  /* position: relative; */

  @media (max-width: 820px) {
    grid-column: 1;
  }

  @media (max-width: 1023px) {
    background-image: url("../../assets/poster-mobile.webp");
  }
`;

export const PosterHeader = styled.div`
  grid-column: 1/3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  width: 100%;
  height: 20%;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;

  .logo {
    width: 4rem;
    height: 4rem;

    position: fixed;
    top: 4%;

    margin: 0 auto;

    @media (max-width: 820px) {
      top: 2%;
    }
  }

  .header-title {
    font-weight: bold;
    text-align: left;

    position: absolute;
    top: 15%;
    right: 4%;

    display: flex;
    flex-direction: column;

    span {
      font-size: 4.5rem;
      letter-spacing: 1rem;

      @media (max-width: 679px) {
        font-size: 3rem;
      }
    }

    @media (max-width: 820px) {
      left: 5%;
      top: 8%;
    }
  }

  .header-slogan {
    text-align: left;
    display: flex;
    flex-direction: column;

    position: absolute;
    bottom: 0;
    top: 40%;
    right: 10%;
    margin-top: 10rem auto;

    span {
      font-size: 1.2rem;
      font-weight: bold;
      font-style: normal;
    }

    @media (max-width: 820px) {
      top: 40%;
      right: 25%;
    }

    @media (max-width: 679px) {
      top: 25%;
      font-size: 0.8rem;
    }
  }

  span {
    font-size: 2rem;
    color: #fff;

    text-align: left;

    padding-top: 0.24rem;
  }
`;

export const Background = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  @media (max-width: 679px) {
    object-fit: cover;
    height: 100vh;
    width: 100vw;

    img {
      object-fit: cover;
    }
  }
`;

export const FeatureThumb = styled.section`
  width: 100%;
  height: 100%;
  text-align: inherit;
`;

export const FeatureList = styled.div`
  /* width: 65%; */

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
`;

export const GridItems = styled.div`
  display: flex;

  position: absolute;
  bottom: 2%;

  height: 40vh;
  max-height: 200px;

  text-align: center;

  margin: 0 auto;

  @media (max-width: 820px) {
    justify-content: center;
    margin: auto;
  }

  @media (max-width: 679px) {
    overflow: visible;
    position: fixed;
    top: 50%;
  }
`;

export const ImageBox = styled.div`
  width: 8.5rem;
  height: 7.5rem;

  font-size: 0.7rem;

  border-radius: 0.05rem;

  margin: 0.25rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 1px solid #f4cb41;
  background: #f1f5f0;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Thumbnail = styled.div`
  display: flex;
  justify-content: space-between;

  /* border: 1px solid #f4bc41; */

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 2rem;

  color: #fff;
  background-color: #333;

  p {
    font-size: 0.6rem;
    font-weight: 600;

    height: auto;
    text-align: left;
    padding: 0 0.45rem;
  }

  span {
    font-size: 1.25rem;
    border: 0;
    width: 25%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-wrap: wrap;

    background-color: #f4bc41;
    color: #000;

    .plus-icon:hover {
      transform: scale(0.7);
    }
  }
`;
