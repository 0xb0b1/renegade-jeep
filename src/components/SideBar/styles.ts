import styled from "styled-components";

export const Container = styled.aside`
  grid-column: 1/3;

  width: 18%;

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

  @media (max-width: 820px) {
    transform: translateX(-100%);
    width: 100%;

    margin-top: 2rem;
  }
`;

export const Header = styled.header`
  background-color: #fff;

  position: fixed;
  width: 18%;

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
`;

export const MainMenu = styled.div`
  .menu-item {
    list-style: none;
    font-size: 0.8rem;

    li {
      margin-bottom: 1rem;
      letter-spacing: 0.099rem;

      font-family: "ProximaNova Bold", sans-serif;

      transition: color 0.3s;

      /* text-decoration: none; */

      &:after {
        content: "";
        display: block;
        width: 100px;
        padding-top: 0.45rem;
        border-bottom: 2px solid #ccc;
      }

      &:hover {
        color: var(--button-hover);
      }
    }
  }
`;

export const SubMenu = styled.ul`
  font-size: 0.75rem;
  font-weight: normal;

  li {
    margin: 0.45rem 1rem;
    line-height: 1.5rem;

    transition: color 0.3s;

    &:not(:last-child):after {
      content: "";
      display: block;
      width: 84px;
      padding-top: 0.45rem;
      border-bottom: 2px solid #ccc;
    }

    &:hover {
      color: var(--button-hover);
    }
  }
`;

export const FeatureButtons = styled.div`
  margin-left: 1rem;

  div {
    /* width: 10rem; */
    height: 2rem;

    background-color: #f4bc41;

    text-align: left;

    /* border: 0; */
    border-radius: 0.3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0.45rem;
    padding: 1.22rem 1.25rem;

    font-size: 0.65rem;

    cursor: pointer;

    transition: background-color 0.2s;

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
