import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Featured from "../../Components/Featured/Featured";
import "./Home.css";
import PropertyList from "../../Components/PropertyList/PropertyList";
import FeaturedProperty from "../../Components/FeaturedProperty/FeaturedProperty";
import SubscribeMail from "../../Components/SubscribeMail/SubscribeMail";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <PropertyList />
        <FeaturedProperty />
        <SubscribeMail />
        <Footer />
      </div>
    </>
  );
};

export default Home;
