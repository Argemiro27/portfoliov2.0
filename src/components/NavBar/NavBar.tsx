import React, { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import * as S from "./styles";
import Switch from "@material-ui/core/Switch";
import {
  FaHome,
  FaPortrait,
  FaBuffer,
  FaGithub,
  FaMailBulk,
  FaSun,
  FaMoon,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <S.MenuContainer>
        <S.Switch>
          <Switch
            checked={theme === "dark"}
            onChange={toggleTheme}
            color="default"
            inputProps={{ "aria-label": "Toggle dark mode" }}
          />
          {theme === "dark" ? (
            <>
              <br />
              <FaMoon />
            </>
          ) : (
            <>
              <br />
              <FaSun />
            </>
          )}
        </S.Switch>
        <Link to={"/home"}>
          <S.Icon>
            <FaHome size={20} />
          </S.Icon>
        </Link>
        <Link to={"/about"}>
          <S.Icon>
            <FaPortrait size={20} />
          </S.Icon>
        </Link>
        <Link to={"/projetos"}>
          <S.Icon>
            <FaBuffer size={20} />
          </S.Icon>
        </Link>
        <Link to={"/projetosgit"}>
          <S.Icon>
            <FaGithub size={20} />
          </S.Icon>
        </Link>
        <Link to={"/carrinho"}>
          <S.Icon>
            <FaMailBulk size={20} />
          </S.Icon>
        </Link>
      </S.MenuContainer>
    </>
  );
};

export default NavBar;
