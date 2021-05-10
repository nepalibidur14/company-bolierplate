import React from "react";
import General from "../General";
import ProductComponent from "../Products/product";
import About from "../About/about";
import Contact from "../Contact/contact";

const Home = () => {
  return (
    <div>
      <General />
      <About />
      <ProductComponent />
      <Contact />
    </div>
  );
};

export default Home;
