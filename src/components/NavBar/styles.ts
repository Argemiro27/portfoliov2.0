import styled from "styled-components";
import { colors } from "../../styles/global";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  height: 100%;
  color: ${colors.blue};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 1;
  margin: auto;
  background-color: ${colors.blue};
  border-right: 3px solid ${colors.darkblue};

`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  color: ${(props) => props.theme.colors.text};
  &:hover {
    background-color: ${colors.darkblue};
  }
`;

export const Switch = styled.div`
    text-align: center;
    align-self: center;
    background-color: ${(props) => props.theme.colors.background};
    border-radius: 10px;
    width: 60px;
    height: 60px;
    margin-top: 10px;
    margin-bottom: 50px;
`