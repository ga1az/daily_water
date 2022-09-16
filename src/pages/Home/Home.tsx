import React from "react";
import { MainInfo, Navbar } from "../../components";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <div>
      <Navbar />
      <MainInfo />
    </div>
  );
};

export default Home;
