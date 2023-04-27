import { NavBarComponent, SectionComponent } from "../../components";
import { IconTd, Table, Td, Title, Tr } from "./style";
import animationData from "../../lotties/contact.json";
import Lottie from "react-lottie";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
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

  return <Lottie options={defaultOptions} height={310} width={400} />;
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
        <div className="Contato">
          <NavBarComponent />
          <SectionComponent>
          <Content>
          <Title>Contato</Title>
            <MyLottie />
            
            </Content>
            <Table>
              <tbody>
                <Tr>
                  <IconTd>
                    <FaWhatsapp className="icon" size="lg" />

                    <Td>(35) 9 8709-3215</Td>
                  </IconTd>
                </Tr>
                <Tr>
                  <IconTd>
                    <FaEnvelope className="icon" size="lg" />

                    <Td>argemirojunior123@gmail.com</Td>
                  </IconTd>
                </Tr>
                <Tr>
                  <IconTd>
                    <FaGithub className="icon" size="lg" />

                    <Td>https://github.com/Argemiro27</Td>
                  </IconTd>
                </Tr>
                <Tr>
                  <IconTd>
                    <FaLinkedin className="icon" size="lg" />
                    <Td>
                      https://www.linkedin.com/in/argemiro-junior-28319b250/
                    </Td>
                  </IconTd>
                </Tr>
                <Tr>
                  <IconTd>
                    <FaInstagram className="icon" size="lg" />
                    <Td>https://www.instagram.com/mirojr__/</Td>
                  </IconTd>
                </Tr>
              </tbody>
            </Table>
          </SectionComponent>
        </div>
      )}
    </>
  );
};

export default AboutMe;
