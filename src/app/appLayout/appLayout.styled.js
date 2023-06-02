import { Link } from "react-router-dom";
import styled from "styled-components";

export const AppLayoutStyled = {
  Container: styled.div`
    min-height: 100vh;
    max-width: 1280px;
    min-width: 375px;

    padding: 0 16px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: black;
  `,
  Header: styled.header`
    width: 100%;
    padding: 15px 0;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid rgba(179, 179, 179, 0.558);
    margin-bottom: 30px;
  `,
  Footer: styled.footer`
    margin-top: 20px;
    border-top: 2px solid rgba(179, 179, 179, 0.558);
    padding: 15px 0;
    display: flex;
    width: 100%;
    justify-content: center;
  `,
  Logo: styled.img`
    width: 250px;
    height: 250px;
  `,
  Nav: styled.nav`
    display: flex;
    justify-content: space-evenly;
    width: 40%;
  `,
  Link: styled(Link)`
    text-decoration: none;
    font-size: ${({ small }) => (small === "true" ? 20 : 30)}px;
    text-transform: uppercase;
    color: white;
    transition: color 0.5s;

    :hover {
      color: grey;
      cursor: pointer;
    }
  `,
};
