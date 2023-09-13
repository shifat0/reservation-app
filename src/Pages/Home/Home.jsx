import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Featured from "../../Components/Featured/Featured";
import "./Home.css";
import PropertyList from "../../Components/PropertyList/PropertyList";
import FeaturedProperty from "../../Components/FeaturedProperty/FeaturedProperty";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <PropertyList />
        <FeaturedProperty />
      </div>
    </>
  );
};

export default Home;
