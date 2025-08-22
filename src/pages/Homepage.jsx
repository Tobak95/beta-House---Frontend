import React from "react";
import Footer from "../component/layout/footer";
import AvailableProperties from "../component/AvailableProperties";
import DiscoverProperties from "../component/DiscoverProperties";
import Hero from "../component/Hero";

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
