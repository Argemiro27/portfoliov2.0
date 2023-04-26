import { NavBarComponent, SectionComponent } from "../../components";
import { CardContainer, Title } from "./style";
import animationData from "../../lotties/programmer.json";
import Lottie from "react-lottie";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

const MyLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={300} width={500} />;
};

const AboutMe = () => {
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
        <div className="AboutMe">
          <NavBarComponent />
          <SectionComponent>
            <MyLottie />
            <Title>Sobre mim:</Title>
            <CardContainer>
              <div className="card card1">
                <h3 className="text-card">
                  ➵ Me considero um desenvolvedor com um perfil comportamental
                  criativo;
                </h3>
              </div>
              <div className="card card2">
                <h3 className="text-card">
                  ➵ isso é o que me atrai e me move tanto a focar mais em
                  trabalhar e aprimorar meu conhecimento em desenvolvimento de
                  ambiente front-end;
                </h3>
              </div>
              <div className="card card3">
                <h3 className="text-card">
                  ➵ Possuo experiência com Figma, tenho vários projetos com a
                  prototipação desenvolvida graças à plataforma;
                </h3>
              </div>
              <div className="card card4">
                <h3 className="text-card">
                  ➵ Embora hoje eu seja um júnior, estou motivado a trabalhar
                  com tecnologia, em busca de aprender, evoluir e apresentar
                  resultados.
                </h3>
              </div>
            </CardContainer>
          </SectionComponent>
        </div>
      )}
    </>
  );
};

export default AboutMe;
