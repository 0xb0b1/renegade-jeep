import styled from "styled-components";

export const Container = styled.div`
  background: #ccc;
`;

export const PosterHeader = styled.div``;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GridItems = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageBox = styled.div`
  width: 8.5rem;
  height: 7.5rem;

  font-size: 0.7rem;

  border-radius: 0.25rem;

  margin: 0.45rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 1px solid #f4cb41;
  background: #f1f5f0;
`;

export const Thumbnail = styled.div`
  display: flex;
  justify-content: space-between;

  border: 1px solid #f4bc41;

  color: #fff;
  background-color: #333;

  p {
    font-size: 0.6rem;
    font-weight: 600;

    height: auto;
    text-align: left;
  }

  button {
    font-size: 1.25rem;
    border: 0;
    width: 25%;

    background-color: #f4bc41;
  }
`;
