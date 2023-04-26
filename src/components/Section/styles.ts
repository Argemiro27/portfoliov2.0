import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  background-color: ${(props) => props.theme.colors.background};
  background-size: cover;
  height: 100vh;
  width: 90%;
  align-items: center;
  left: 10%;
  color: ${(props) => props.theme.colors.text};
  flex-direction: column;
  padding: 20px;
`;
