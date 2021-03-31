import styled from "styled-components";

export const Container = styled.div`
  width: 32vh;

  height: 100%;

  position: fixed;
  top: 0;
  bottom: 0;
  overflow-y: scroll;

  z-index: 1;

  background: #fff;
`;

export const Brand = styled.header`
  background-color: #fff;

  img {
    width: 5.5rem;
    margin: 2rem 1.25rem;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  margin-left: 1.25rem;

  .menu-item {
    list-style: none;
    font-size: 0.85rem;

    li {
      margin-top: 2rem;
      margin-bottom: 1rem;
      letter-spacing: 0.1rem;

      font-weight: 600;
      line-height: 1.22;
    }

    span {
      margin-left: 1.25rem;
    }
  }
`;

export const MainMenu = styled.div``;

export const SubMenu = styled.ul`
  font-size: 0.75rem;
  font-weight: normal;

  li {
    margin: 0.45rem 1rem;
    line-height: 2.5em;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  button {
    width: 100%;
    height: 2rem;

    & + button {
      margin-top: 0.45rem;
    }
  }
`;
