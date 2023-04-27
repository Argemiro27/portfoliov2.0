import { useEffect, useState } from "react";
import { NavBarComponent, SectionComponent } from "../../components";
import Loading from "../../components/Loading";
import { Title, Text, MyPhoto, CardContainer, Content } from "./style";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <>
      {" "}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="Home">
          <NavBarComponent />
          <SectionComponent>
            <Content>
              <Title>Apresentação</Title>
              <div className="myphoto">
                <MyPhoto />
              </div>
              <div className="container">
                <br />
                <Text> Olá, seja bem vindo ao meu portfólio! ❤</Text>
                <Text>➵ Meu nome é Argemiro Junior</Text>
                <Text>
                  ➵ Sou Web Developer Junior (Fullstack) e Técnico em TI.
                </Text>
                <br />
              </div>
            </Content>
            <Content>
              <Title>Skills:</Title>
              <div className="container">
                <CardContainer className="column1">
                  <div className="card-wrapper">
                    <Text>HTML</Text>
                    <progress className="progress" value="80" max="100" />
                    <span> 80%</span>
                    <div className="card card1" />
                  </div>
                  <div className="card-wrapper">
                    <Text>CSS</Text>
                    <progress className="progress" value="80" max="100" />
                    <span> 80%</span>
                    <div className="card card2" />
                  </div>
                  <div className="card-wrapper">
                    <Text>Javascript</Text>
                    <progress className="progress" value="60" max="100" />
                    <span> 60%</span>
                    <div className="card card3" />
                  </div>
                  <div className="card-wrapper">
                    <Text>Typescript</Text>
                    <progress className="progress" value="75" max="100" />
                    <span> 75%</span>
                    <div className="card card4" />
                  </div>
                  <div className="card-wrapper">
                    <Text>React</Text>
                    <progress className="progress" value="80" max="100" />
                    <span> 80%</span>
                    <div className="card card5" />
                  </div>
                  <div className="card-wrapper">
                    <Text>Docker</Text>
                    <progress className="progress" value="60" max="100" />
                    <span> 60%</span>
                    <div className="card card6" />
                  </div>
                </CardContainer>
                
                
                <CardContainer className="column2">
                  <div className="card-wrapper">
                    <Text>Laravel</Text>
                    <progress className="progress" value="65" max="100" />
                    <span> 65%</span>
                    <div className="card card7" />
                  </div>
                  <div className="card-wrapper">
                    <Text>Bootstrap</Text>
                    <progress className="progress" value="70" max="100" />
                    <span> 70%</span>
                    <div className="card card8" />
                  </div>
                  <div className="card-wrapper">
                    <Text>MySQL</Text>
                    <progress className="progress" value="80" max="100" />
                    <span> 80%</span>
                    <div className="card card9" />
                  </div>
                  <div className="card-wrapper">
                    <Text>AdonisJS</Text>
                    <progress className="progress" value="70" max="100" />
                    <span> 70%</span>
                    <div className="card card10" />
                  </div>
                  <div className="card-wrapper">
                    <Text>Github</Text>
                    <progress className="progress" value="70" max="100" />
                    <span> 70%</span>
                    <div className="card card11" />
                  </div>
                  <div className="card-wrapper">
                    <Text>NodeJS</Text>
                    <progress className="progress" value="60" max="100" />
                    <span> 60%</span>
                    <div className="card card12" />
                  </div>
                </CardContainer>
              </div>
            </Content>
          </SectionComponent>
        </div>
      )}
    </>
  );
};

export default Home;
