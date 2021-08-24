import React, { useEffect, useState, useLayoutEffect } from "react";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Footer from "./components/Footer";
import {
  Switch,
  Route,
  useLocation,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages";
// import { ExampleComponent } from "./ExampleComponent";
import "./styles.css";
import i18n from "./translations/i18n";
// import About from "./pages/About";
// import Rentals from "./pages/Blog";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import DjangoBlog from "./components/DjangoBlog";
import History from "./pages/History";
import Thanksgiving from "./pages/Thanksgiving";
import FengShui from "./pages/FengShui";
import Celebration from "./data/Celebration";
import InteriorDesign from "./data/InteriorDesign";
import IndustrialDesign from "./data/IndustrialDesign";
import HistoryBackground from "./components/HistoryBackground";
import BlogDetail from "./components/BlogDetail";
import Category from "./components/Category";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  console.log(location.pathname);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      {/* <div className="App">
        <button value="en" onClick={handleOnclick}>
          English
        </button>
        <button value="es" onClick={handleOnclick}>
          Spanish
        </button>
        <HistoryBackground lang={language} />
      </div> */}
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={Home} />
        <Route path="/catalog" exact component={Catalog} />
        <Route path="/blog" exact component={DjangoBlog} />
        <Route path="/history" exact component={History} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/thanksgiving" exact component={Thanksgiving} />
        <Route path="/fengshui" exact component={FengShui} />
        <Route path="/interior" exact component={InteriorDesign} />
        <Route path="/industrial" exact component={IndustrialDesign} />
        <Route path="/blog/:id" exact component={BlogDetail} />
        <Route path="/category/:id" exact component={Category} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
