import React from "react";
import About from "./Components/ About";
import Portfolio from "./Components/Portfolio";
import { Link } from "react-scroll";
const App = () => {
  return (
    <>
      <div className="App flex justify-center items-center w-screen h-screen ">
        <header className="fixed border-b backdrop-blur-sm top-0 left-0 h-12 right-0 flex justify-center items-center ">
          <p className="logo text-md">
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-400}
              duration={500}
              className="cursor-pointer"
            >
              dinndev
            </Link>
          </p>
        </header>

        <About />
      </div>
      <div className=" w-screen flex justify-center items-center flex-col h-screen">
        <Portfolio />
      </div>
    </>
  );
};

export default App;
