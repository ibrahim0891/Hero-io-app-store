import React from "react";
import SectionHeading from "../../Global-components/SectionHeading";
import Button from "../../Global-components/Button";

const TrendingApps = () => {
    return (
        <div className='container-center my-10'>
            <SectionHeading
                heading={"Trending Apps"}
                subHeading={
                    "Explore All Trending Apps on the Market developed by us"
                }
            />
            <div>
                <div>{/* card will be displayed here  */}</div>
                <div className=''>
                    <Button className={"m-auto block my-5"}>Show All</Button>
                </div>
            </div>
        </div>
    );
};

export default TrendingApps;
