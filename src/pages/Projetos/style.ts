import styled from "styled-components";
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
    transition: width 2s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

export const Text = styled.div`
  font-weight: 600;
  font-size: 14px;
  background-color: black;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  .card {
    width: 310px;
    height: 180px;
    margin: 10px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    border: 2px solid ${(props) => props.theme.colors.bgBorder};
    box-shadow: 3px 3px 10px ${(props) => props.theme.colors.background};
    filter: contrast(100%);
    :hover {
      transition: 0.8s;
      filter: contrast(70%);
    }
    .text-card {
      background-color: ${(props) => props.theme.colors.background};
      min-height: 23vh;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      padding: 15px;
      color: ${(props) => props.theme.colors.text};
      position: relative;
      top: 200px;
    }
  }
  .card.card1 {
    background-image: url("assets/calculadora.gif");
    background-size: cover;
    
  }
  .card2 {
    background-image: url("assets/nocelular.gif");
    background-color: black;
    background-size: 100px;
    background-repeat: no-repeat;
  }
  .card3 {
    background-image: url("assets/sistemavendas.gif");
    background-size: cover;
  }

  .card4 {
    background-image: url("assets/rusheats.gif");
    background-size: cover;
  }
`;
