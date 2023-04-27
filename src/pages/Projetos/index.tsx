import { useEffect, useState } from "react";
import { NavBarComponent, SectionComponent } from "../../components";
import Loading from "../../components/Loading";
import { CardContainer, Title } from "./style";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../lotties/programmer.json";
import { Content } from "../Home/style";

const MyLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={240} width={280} />;
};

const Projetos = () => {
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
        <div className="Projetos">
          <NavBarComponent />
          <SectionComponent>
            <Content>
            <Title>Alguns projetos:</Title>
            <MyLottie />
            
            </Content>
            <CardContainer>
              <div className="card card1">
                <h3 className="text-card">
                  <div className="container">
                    Calculadora desenvolvida com React.JS <br /> <br /> Link
                    para o projeto:{" "}
                    <Link to={"https://github.com/Argemiro27/calculadora"}>
                      Clique aqui
                    </Link>{" "}
                    <br />
                    Link do Vercel:{" "}
                    <Link to={"https://calculadora-seven-phi.vercel.app"}>
                      Clique aqui
                    </Link>
                  </div>
                </h3>
              </div>
              <div className="card card2">
                <h3 className="text-card">
                  <div className="container">
                    Aplicativo de agenda, cadastro de tarefas, desenvolvido com
                    React Native TS, Expo e Async Storage <br /> <br />
                    Link para o projeto:{" "}
                    <Link to={"https://github.com/Argemiro27/schedzv2"}>
                      Clique aqui
                    </Link>{" "}
                    <br />
                    Link pra download:{" "}
                    <Link
                      to={
                        "https://expo.dev/artifacts/eas/9DAFYrbo6iibt2g76SwafV.apk"
                      }
                    >
                      Clique aqui
                    </Link>
                  </div>
                </h3>
              </div>
              <div className="card card3">
                <h3 className="text-card">
                  <div className="container">
                    Sistema de vendas com cadastro de usuários, produtos e
                    vendas. Desenvolvido com Laravel (PHP) e MySQL (utilizando
                    Docker) <br /> <br />
                    Link para o projeto:{" "}
                    <Link to={"https://github.com/Argemiro27/sistemadevendasv2"}>
                      Clique aqui
                    </Link>
                  </div>
                </h3>
              </div>
              <div className="card card4">
                <h3 className="text-card">
                  <div className="container">
                    Sistema de vendas com cadastro de usuários, produtos e
                    vendas. Desenvolvido com Laravel (PHP) e MySQL (utilizando
                    Docker) <br /> <br />
                    Link para o projeto:{" "}
                    <Link to={"https://github.com/Argemiro27/rusheats"}>
                      Clique aqui
                    </Link><br />
                    Link do Vercel:{" "}
                    <Link to={"https://rusheats.vercel.app/"}>
                      Clique aqui
                    </Link>
                  </div>
                </h3>
              </div>
            </CardContainer>
          </SectionComponent>
        </div>
      )}
    </>
  );
};

export default Projetos;
