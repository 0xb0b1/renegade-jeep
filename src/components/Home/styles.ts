import styled from "styled-components";

export const Container = styled.div`
  grid-column: 2/3;
  background: #ccc;

  position: relative;

  /* @media (max-width: 820px) {
    grid-column: 1;
  }
 */
`;

export const Background = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;

  display: flex;
  justify-content: center;
  /* align-items: center; */

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  @media (max-width: 679px) {
    height: 100%;
    width: 100%;

    img {
      overflow: visible;
      max-width: unset;
      object-fit: cover;
    }
  }
`;

export const PosterHeader = styled.div`
  grid-column: 1/3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Poster = styled.header`
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

    z-index: 999;

    margin: 0 auto;

    @media (max-width: 820px) {
      background-color: #202020;
      width: 100%;
      height: 2.5rem;
      top: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 4rem;
      }
    }

    .hamburger {
      position: fixed;
      border: 0;
      background: none;
      color: #fff;
      font-size: 2rem;

      left: 0;

      padding-top: 0.45rem;
      padding-left: 0.45rem;
    }
  }

  .header-title {
    position: absolute;
    top: 14%;
    right: 10.5%;

    img {
      width: 20rem;
    }

    @media (max-width: 603px) {
      top: 10%;
      left: 2%;

      img {
        width: 50vw;
      }
    }
  }

  .header-slogan {
    position: absolute;
    bottom: 0;
    top: 35%;
    right: 12%;

    img {
      width: 8rem;
    }

    @media (max-width: 603px) {
      top: 15%;

      img {
        width: 30vw;
      }
    }
  }

  span {
    font-size: 2rem;
    color: #fff;

    text-align: left;

    padding-top: 0.24rem;
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

    /* display: grid; */
    /* grid-template-columns: repeat(3, 1fr); */
  }
`;

export const ImageBox = styled.div`
  width: 8.5rem;
  height: 7.5rem;

  font-size: 0.7rem;

  border-radius: 0.05rem;

  position: relative;

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
  background-color: #202020;

  p {
    font-size: 0.61rem;
    letter-spacing: 0.03rem;
    font-family: "ProximaNova SBold", sans-serif;

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

    .plus-icon {
      width: 2rem;
      margin: 0 auto;

      transition: transform 0.2s;

      &:hover {
        transform: scale(0.7);
      }
    }
  }
`;

export const ButtonsContainer = styled.div``;
//   display: none;

//   @media (max-width: 603px) {
//     background-color: #202020;
//     height: 2rem;
//     display: flex;
//   }
// `;

export const FeatureButtons = styled.div`
  @media (max-width: 820px) {
    background-color: #202020;
    position: fixed;
    bottom: 0;

    width: 100%;

    /* margin-left: 1rem; */
    padding-bottom: 0.8rem;

    display: flex;

    div {
      width: 100%;
      height: 2rem;

      background-color: #f4bc41;

      text-align: center;

      border-radius: 0.3rem;

      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;

      margin: 0.45rem;
      padding: 1.22rem 1.25rem;

      font-size: 0.85rem;
      font-weight: 600;

      cursor: pointer;

      transition: background-color 0.2s;

      &:hover {
        background-color: #fcc859;
      }
    }
  }
`;
