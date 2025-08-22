import React from "react";
import Hero from "../component/Hero.jsx";
import Footer from "../component/layout/footer";
import AvailableProperties from "../component/AvailableProperties";
import DiscoverProperties from "../component/DiscoverProperties";

const Homepage = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>

      <div>
        <AvailableProperties />
        <DiscoverProperties />
      </div>

      <div className="mt-60">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
