import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;
