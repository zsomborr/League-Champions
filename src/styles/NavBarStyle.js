import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  display: block;
  color: ${(props) => props.theme.color};
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
`;

export const NavBar = styled.div`
  background-color: #9e890e;
`;
