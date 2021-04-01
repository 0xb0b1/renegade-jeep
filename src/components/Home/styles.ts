import styled from "styled-components";

export const Container = styled.div`
  grid-column: 2;
  background: #ccc;

  position: relative;

  @media (max-width: 1080px) {
    grid-column: 1;
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
    position: absolute;
    top: 0;

    margin: 0 auto;
  }

  .header-title {
    font-weight: bold;
    text-align: left;
    font-size: 10px;

    position: absolute;
    top: 0;
  }

  .header-slogan {
    text-align: left;
    display: flex;
    flex-direction: column;

    position: absolute;
    top: 0;
    margin-top: 10rem auto;

    span {
      font-size: 1rem;
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

    /* @media (max-width: 1080px) {
      height: 80vh;
    } */
  }
`;

export const FeatureThumb = styled.section`
  width: 100%;
  text-align: inherit;
`;

export const FeatureList = styled.div`
  width: 65%;
  margin: 0 auto;

  @media (max-width: 1080px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const GridItems = styled.div`
  grid-column: 2;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  position: absolute;
  bottom: 5%;

  height: 40vh;
  max-height: 200px;

  text-align: center;

  margin: 0 auto;

  @media (max-width: 1080px) {
    justify-content: center;
    margin: auto;
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
