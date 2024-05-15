import React, { useState, useEffect } from "react";
import "./App.css";
import "./Opening.css";
import "./Header.css";
import "./Body.css";
import "./Background.css";
import "./Footer.css";
import Opening from "./components/Opening";
import Header from "./components/Header";
import Body from "./components/Body";
import Background from "./components/Background";
import Footer from "./components/Footer";
import Works from "./components/Works";
import {
  BrowserRouter as Router,
  HashRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const isLocalhost =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

const RouterComponent = isLocalhost ? HashRouter : Router;

const PageLink = {
  Top: "/",
};

function App() {
  const [showMainPage, setShowMainPage] = useState(false);

  const handleAnimationComplete = () => {
    setShowMainPage(true);
  };

  return (
    <RouterComponent>
      <div className="App">
        {!showMainPage && (
          <div className="opening-container">
            <Opening onAnimationComplete={handleAnimationComplete} />
          </div>
        )}
        {showMainPage && (
          <>
            <Background />
            <Header></Header>
            <Routes>
              <Route path={PageLink.Top} element={<Body />} />
              <Route path="/works" element={<Works />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </RouterComponent>
  );
}

export default App;
