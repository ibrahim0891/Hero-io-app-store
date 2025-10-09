import React, { Suspense } from "react";
import HeroSection from "./section/Hero";
import Statistics from "./section/Statistics";
import TrendingApps from "./section/TrendingApps";
import Loading from "../Global-components/LoadingSection";

const Hompage = () => {
    return (
        <div className=' '>
            <HeroSection />  
            <Statistics />
            <Suspense fallback={<Loading.LoadingRing />}>
                <TrendingApps />
            </Suspense>
        </div>
    );
};

export default Hompage;
