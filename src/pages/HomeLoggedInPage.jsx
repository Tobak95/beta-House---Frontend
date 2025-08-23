import React from "react";
import Hero from "../component/HeroLoggedIn";
import AvailableProperties from "../component/AvailableProperties";
import DiscoverProperties from "../component/DiscoverProperties";
import Footer from "../component/layout/Footer";
import NavHome from "../component/layout/NavHomeLoggedIn";

const HomeLoggedInPage = () => {
  return (
    <div>
      <Hero />
      <AvailableProperties />
      <DiscoverProperties />
      <Footer />
    </div>
  );
};

export default HomeLoggedInPage;
