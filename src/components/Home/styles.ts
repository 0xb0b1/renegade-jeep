import styled from "styled-components";

export const Container = styled.div`
  grid-column: 2;
  background: #ccc;

  @media (max-width: 1080px) {
    grid-column: 1;
  }
`;

export const PosterHeader = styled.div``;

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

export const GridItems = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 12rem;
  margin-bottom: 6rem;

  box-sizing: content-box;

  @media (max-width: 1080px) {
    justify-content: center;
    margin: 4rem auto;
  }
`;

export const ImageBox = styled.div`
  width: 8.5rem;
  height: 7.5rem;

  font-size: 0.7rem;

  border-radius: 0.25rem;

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
  flex-shrink: 0;

  /* border: 1px solid #f4bc41; */

  height: 2rem;

  color: #fff;
  background-color: #333;

  p {
    font-size: 0.6rem;
    font-weight: 600;

    height: auto;
    text-align: left;
  }

  span {
    font-size: 1.25rem;
    border: 0;
    width: 25%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #f4bc41;
    color: #000;
  }
`;
