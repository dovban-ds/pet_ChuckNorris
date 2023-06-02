import styled from "styled-components";

export const QuotedStyled = {
  Container: styled.div`
    cursor: ${({ isEditable }) => (isEditable ? "pointer" : "auto")};
    padding: 30px;
    border-radius: 16px;
  `,
  Text: styled.p`
    text-decoration: none;
    font-size: 20 px;
    text-transform: uppercase;
    color: white;
    text-align: center;
    margin-top: 30px;
  `,
};
