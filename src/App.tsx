import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Header from "./components/Header";
import Loved from "./pages/loved/Loved";
import "./style/normalize.css";
import "./style/style.sass";

function App() {
  const pages = [
    { path: "/", component: <Main />, linkText: "Все котики" },
    { path: "/loved", component: <Loved />, linkText: "Любимые котики" },
  ];
  const links = pages.map((page) => ({
    path: page.path,
    linkText: page.linkText,
  }));

  return (
    // basename="teact-cats-test"
    <BrowserRouter >
      <Header links={links} />
      <Routes>
        {pages.map((page) => (
          <Route path={page.path} element={page.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
