import React, { Suspense } from "react";
import HeroSection from "./section/Hero";
import Statistics from "./section/Statistics";
import TrendingApps from "./section/TrendingApps";
import Loading from "../Global-components/LoadingSection";

const Hompage = () => {
    return (
        <div className=' '>
            <Suspense fallback={<Loading.LoadingRing />}>
            <HeroSection />
            <Statistics />
                <TrendingApps />
            </Suspense>
        </div>
    );
};

export default Hompage;
