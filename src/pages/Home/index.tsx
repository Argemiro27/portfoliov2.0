import { useEffect, useState } from "react";
import { NavBarComponent, SectionComponent } from "../../components";
import Loading from "../../components/Loading";
import { Title, Text, MyPhoto, CardContainer } from "./style";

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
            <Title>Apresentação</Title>
            <MyPhoto />
            <div className="container">
              <br />
              <Text> Olá, seja bem vindo ao meu portfólio! ❤</Text>
              <Text>➵ Meu nome é Argemiro Junior</Text>
              <Text>
                ➵ Sou Web Developer Junior (Fullstack) e Técnico em TI.
              </Text>
              <br />
            </div>
            <Title>Skills:</Title>
            <div className="container">
              <CardContainer>
                <div className="card card1" />
                <div className="card card2" />
                <div className="card card3" />
                <div className="card card4" />
                <div className="card card5" />
                <div className="card card6" />
              </CardContainer>
              <CardContainer>
                <div className="card card7" />
                <div className="card card8" />
                <div className="card card9" />
                <div className="card card10" />
                <div className="card card11" />
                <div className="card card12" />
              </CardContainer>
            </div>
          </SectionComponent>
        </div>
      )}
    </>
  );
};

export default Home;


