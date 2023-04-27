import styled, { css } from "styled-components";
import { colors } from "../../styles/global";

export const Title = styled.div`
  position: relative;
  font-size: 25px;
  font-weight: 700;
  font-style: italic;
  display: inline-block;
  margin-bottom: 15px;
  padding: 7px;
  background: ${(props) => props.theme.colors.bgBorder};
  display: block;
  text-align: center;
  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    margin-top: 5px;
    margin-bottom: -6px;
    background: #4750a1;
    transition: width 0.5s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

export const Table = styled.table`
  margin: auto;
  border-collapse: separate;
  border-spacing: 0 20px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${colors.blue};
`;

export const Tr = styled.tr`
  display: flex;
  flex-direction: row;
`;

export const Td = styled.td`
  display: block;
  font-size: 15px;
`;

export const IconTd = styled.td`
  display: flex;
  color: ${(props) => props.theme.colors.text};
  font-size: 30px;
  width: 100%;
  margin: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 2px 2px 2px 2px ${(props) => props.theme.colors.shadow};
  border-radius: 10px;
  .icon{
    width: 20px;
    margin-right: 15px;
  }
`;