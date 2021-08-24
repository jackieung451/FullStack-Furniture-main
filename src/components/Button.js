import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#121212" : "#CD853F")};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  color: ${({ primary }) => (primary ? "#fff" : "#000d1a")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};
  border-radius: ${({ round }) => (round ? "50px" : "0px")}

  &:hover {
    transform: translateY(-2px);
  }
`;
