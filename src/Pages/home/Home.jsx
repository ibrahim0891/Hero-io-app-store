import React from "react";
import HeroSection from "./section/Hero";
import Statistics from "./section/Statistics";
import TrendingApps from "./section/TrendingApps";

const Hompage = () => {
    return (
        <div className=' '>
            <HeroSection />
            <Statistics />
            <TrendingApps />
        </div>
    );
};

export default Hompage;
