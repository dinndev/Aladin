import React from "react";
import About from "./Components/ About";
import Portfolio from "./Components/Portfolio";
const App = () => {
  return (
    <>
      <div className="App flex justify-center items-center w-screen h-screen p-8">
        <header className="fixed top-10 left-0 right-0 flex justify-center items-center ">
          <p className="logo text-md">dinndev</p>
        </header>
        <About />
      </div>
      <div className=" w-screen h-screen">
        <Portfolio />
      </div>
    </>
  );
};

export default App;
