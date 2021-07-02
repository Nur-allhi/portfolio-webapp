import React, { useState } from "react";
import Navbar from "../Components/Navbar/index";
import Sidebar from "../Components/Sidebar/index";
import AboutSection from "../Components/AboutSection/Index";
import Projects from "../Components/Projects/index";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <AboutSection />
      <Projects />
    </>
  );
};

export default Home;
