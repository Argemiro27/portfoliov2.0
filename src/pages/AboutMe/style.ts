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
    width: 300px;
    height: 260px;
    margin: 20px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    border: 2px solid ${(props) => props.theme.colors.bgBorder};
    
    filter: grayscale(100%);
    :hover {
      transition: 0.5s;
      filter: grayscale(70%);
    }
    .text-card {
      background-color: ${(props) => props.theme.colors.background};
      min-height: 20vh;
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
    background-image: url("assets/cardsabout/creativity.png");
    background-size: cover;
  }
  .card2 {
    background-image: url("assets/cardsabout/frontend.png");
    background-size: cover;
  }
  .card3 {
    background-image: url("assets/cardsabout/figma.png");
    background-size: cover;
  }
  .card4 {
    background-image: url("assets/cardsabout/seniority.png");
    background-size: cover;
  }
`;
