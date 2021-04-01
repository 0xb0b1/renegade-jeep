import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;

  clear: none;

  width: 18%;
  height: 100%;

  z-index: 99;

  overflow-y: scroll;

  background: #fff;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: white;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f9d78e;
  }
`;

export const Brand = styled.div`
  background-color: #fff;

  position: fixed;
  width: 18vw;

  display: flex;
  align-items: flex-start;

  display: flex;
  align-items: flex-start;
  justify-content: left;

  img {
    width: 5.5rem;
    margin: 2rem 1.25rem;
  }
`;

export const ButtonToggle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  margin-left: 1.25rem;
  margin-top: 5rem;

  .menu-item {
    list-style: none;
    font-size: 0.8rem;

    li {
      margin-bottom: 1rem;
      letter-spacing: 0.1rem;

      font-weight: 600;

      & + li {
      }
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
    line-height: 2em;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 1rem;

  button {
    width: 14vw;
    height: 2rem;

    background-color: #f4bc41;

    border: 0;
    border-radius: 0.3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0.45rem 0.5rem;
    padding: 0.4rem 1rem;

    font-size: 0.65rem;

    .btn-icon {
      font-size: 1rem;
    }

    & + button {
      margin-top: 0.45rem;
    }
  }
`;
