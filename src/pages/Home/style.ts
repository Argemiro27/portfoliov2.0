import styled from "styled-components";
import { colors } from "../../styles/global";

export const Content = styled.div`
  display: block;
  
  background-color: ${(props) => props.theme.colors.background};
  padding: 10px;
  border-radius: 10px;
  .myphoto{
    display: flex;
    justify-content: center;
  }
  .column2{
    margin-top: 30px;
  }
`

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

export const Text = styled.div`
  font-weight: 600;
  font-size: 14px;
`;

export const MyPhoto = styled.div`
  height: 30vh;
  width: 30vh;
  background-image: url("/assets/myphoto.png");
  background-size: cover;
  margin-right: 50px;
  border-radius: 100px;
  filter: grayscale(20%);
`;

export const AboutLottie = styled.div`
  background-size: cover;
  height: 50vh;
  width: 50vh;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;

  .card {
    width: 80px;
    height: 80px;
    margin: 25px;
    background-size: cover;
    background-position: center;
    transition: 1s;
    transform: rotate(0deg);
    filter: grayscale(80%);
    :hover {
      transition: 1s;
      transform: rotate(360deg);
    }
    .text-card {
      min-height: 10vh;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .card-wrapper{
    display: block;
    text-align: center;
    .progress{
      width: 50px;
    }
  }
  .card.card1 {
    background-image: url("/assets/icons/html.png");
  }
  .card.card2 {
    background-image: url("/assets/icons/css.png");
  }
  .card.card3 {
    background-image: url("/assets/icons/js.png");
  }
  .card.card4 {
    background-image: url("/assets/icons/typescript.png");
  }
  .card.card5 {
    background-image: url("/assets/icons/react.png");
  }
  .card.card6 {
    background-image: url("/assets/icons/docker.png");
  }
  .card.card7 {
    background-image: url("/assets/icons/laravel.png");
  }
  .card.card8 {
    background-image: url("/assets/icons/bootstrap.png");
  }
  .card.card9 {
    background-image: url("/assets/icons/mysql.png");
  }
  .card.card10 {
    background-image: url("/assets/icons/adonisjs.png");
  }
  .card.card11 {
    background-image: url("/assets/icons/github.png");
  }
  .card.card12 {
    background-image: url("/assets/icons/nodejs.png");
  }
`;