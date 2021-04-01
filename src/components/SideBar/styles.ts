import styled from "styled-components";

export const Container = styled.aside`
  grid-column: 1/3;
  width: 19.4%;
  height: 100%;

  position: fixed;

  overflow-y: scroll;

  background: #fff;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: white;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f9d78e;
  }

  @media (max-width: 1080px) {
    display: none;
  }
`;

export const Header = styled.header`
  background-color: #fff;

  position: fixed;
  width: 20vw;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 5.5rem;
    height: 1.5rem;
    margin: 2rem 1.25rem;
  }
`;

export const NavBar = styled.nav`
  margin-left: 1.25rem;
  margin-top: 6rem;

  .menu-item {
    list-style: none;
    font-size: 0.8rem;

    li {
      margin-bottom: 1rem;
      letter-spacing: 0.2rem;

      font-weight: 600;

      transition: color 0.3s;

      text-decoration: none;

      &:after {
        content: "";
        display: block;
        width: 80px;
        padding-top: 0.45rem;
        border-bottom: 2px solid #ccc;
      }

      &:hover {
        color: var(--button-hover);
      }
    }
  }
`;

export const MainMenu = styled.div``;

export const SubMenu = styled.ul`
  font-size: 0.75rem;
  font-weight: normal;

  li {
    margin: 0.45rem 1rem;
    line-height: 1rem;

    transition: color 0.3s;

    &:not(:last-child):after {
      content: "";
      display: block;
      width: 64px;
      padding-top: 0.45rem;
      border-bottom: 2px solid #ccc;
    }

    &:hover {
      color: var(--button-hover);
    }
  }
`;

export const Buttons = styled.div`
  margin-left: 1rem;

  div {
    width: 15vw;
    height: 2rem;

    background-color: #ffaf00;

    text-align: left;

    /* border: 0; */
    border-radius: 0.3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0.45rem;
    padding: 1.12rem 1.25rem;

    font-size: 0.65rem;

    &:hover {
      background-color: #fcc859;
    }

    .btn-icon {
      font-size: 1rem;
    }

    & + button {
      margin-top: 0.45rem;
    }
  }
`;
