import React, { use } from "react";
import SectionHeading from "../../Global-components/SectionHeading";
import Button from "../../Global-components/Button";
import { getTrendingApps } from "../../../Data/getTrendingApps";
import AppCard from "../../Global-components/App-card";
import { Link } from "react-router";

let trendingAppsPromise = getTrendingApps(8);

const TrendingApps = () => {
    const trendingAppList = use(trendingAppsPromise);

    return (
        <div className='container-center my-10'>
            <SectionHeading
                heading={"Trending Apps"}
                subHeading={
                    "Explore All Trending Apps on the Market developed by us"
                }
            />
            <div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 md:gap-10 gap-6 sm:gap-8'>
                    {trendingAppList.map((app, index) => {
                        return <AppCard key={index} app={app} />;
                    })}
                </div>
                <div className=''>
                    <Link to='/apps'>
                        <Button className={"m-auto block my-5"}>
                            Show All
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TrendingApps;
