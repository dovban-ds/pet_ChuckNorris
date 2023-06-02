import React from "react";
import { AppLayoutStyled as Style } from "./appLayout.styled";
import { ROUTES } from "../../const/routes";

export const AppLayout = ({ children }) => {
  return (
    <Style.Container>
      <Style.Header>
        <Style.Logo
          src="https://image-cdn.neatoshop.com/styleimg/36217/none/black/default/301347-20.jpg"
          alt="logo"
        />
        <Style.Nav>
          <Style.Link to={ROUTES.main}>Main</Style.Link>
          <Style.Link to={ROUTES.favorite}>Favorite</Style.Link>
        </Style.Nav>
      </Style.Header>
      <main>{children}</main>
      <Style.Footer>
        <Style.Link to="https://github.com/dovban-ds" small="true">
          GitHub
        </Style.Link>
      </Style.Footer>
    </Style.Container>
  );
};
