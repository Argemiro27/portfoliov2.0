import styled from "styled-components";
import { colors } from "../../styles/global";


export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 200px);
  border: 2px solid #191721;
  border-top: 50px solid #191721;
  background-color: #343140;
  border-radius: 10px;
  width: 600px;
  margin: auto;
  box-shadow: 10px 10px 26px 1px rgba(22,21,26,1);
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #706280;
  width: 100%;
  height: 50px;
  position: absolute;
  top: -50px;
  background-color: #191721;
  border-radius: 10px 10px 0 0;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 5px;
  }
`;

export const Ul = styled.ul`
  overflow-x: auto;
  height: inherit;
  &::-webkit-scrollbar {
    width: 12px;
    border-radius: 10px;
    background-color: ${colors.darkblue}; ;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${colors.blue}; 
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  word-break: break-word;
  margin: 10px;
  box-shadow: 1px 1px 1px 2px ${colors.darkblue};
  gap: 3px;
  border-radius: 10px;
  padding: 10px;
  color: #0f0d14;
  background-color: ${colors.blue};
  @media (max-width: 760px) {
    font-size: 13px;
  }
`;

export const TitleProject = styled.strong`
  color: #0f0d14;
`;

export const Url = styled.span`
  font-weight: bold;
`;

export const Created_at = styled.span`
  font-weight: bold;
`;