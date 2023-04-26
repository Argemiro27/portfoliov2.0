import React, { useEffect, useState } from "react";
import { Content, Ul, Li, TitleProject, Url, Created_at, Title } from "./style";
import { NavBarComponent, SectionComponent } from "../../components";
import Loading from "../../components/Loading";

interface Item {
  id: number;
  name: string;
  url: string;
  created_at: string;
}

const ProjetosGit = () => {
  const [itemsApi, setItemsApi] = useState<Item[]>([]);

  useEffect(() => {
    let abortController = new AbortController();

    function getGitHubAPI() {
      fetch("https://api.github.com/users/Argemiro27/repos")
        .then((res) => {
          if (res.status !== 200) {
            throw new Error(`Falha na requisição: ${res.status}`);
          }
          return res.json();
        })
        .then((data: Item[]) => setItemsApi(data))
        .catch((e) => console.log(e));
    }

    getGitHubAPI();

    return () => abortController.abort();
  }, []);
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
            <Title>Meus projetos no GitHub ❤</Title>
            <Content>
              <Ul>
                {itemsApi.map((item) => (
                  <Li key={item.id}>
                    <TitleProject>
                      Nome do Projeto: {item.name.toUpperCase()}
                    </TitleProject>
                    <Url>URL do Projeto: {item.url}</Url>
                    <Created_at>
                      Data:{" "}
                      {Intl.DateTimeFormat("pt-BR").format(
                        new Date(item.created_at)
                      )}
                    </Created_at>
                  </Li>
                ))}
              </Ul>
            </Content>
          </SectionComponent>
        </div>
      )}
    </>
  );
};

export default ProjetosGit;
