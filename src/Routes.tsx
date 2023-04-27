import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import { About, Contato, Home, Projetos, ProjetosGit } from "./pages";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/projetosgit" element={<ProjetosGit />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
