import React, { Suspense, useState } from "react";
import SectionHeading from "../Global-components/SectionHeading";
import { Search } from "lucide-react";
import AppDisplaySection from "./sections/App-display-section";
import Loading from "../Global-components/LoadingSection";
import { searchAppByTitle } from "../../Data/searchAppByTitle";
import { getAllApps } from "../../Data/getAllApps";
import ResultCount from "./components/ResultCount";

const AllApps = () => {
    let [query, setQuery] = useState('');

    let handleQueryChange = (e) => {
        setQuery(e.target.value);
    };
    return (
        <div className='container-center flex-1'>
            <SectionHeading
                heading={"Our All Applications"}
                subHeading={
                    "Explore All Apps on the Market developed by us. We code for Millions"
                }
            />

            <div className='flex flex-col-reverse md:flex-row gap-4 items-center justify-between my-10'>
                <ResultCount />
                <form className=''>
                    <div className='flex items-center justify-center border border-gray-300 bg-white rounded-md px-5'>
                        <Search size={24} color='#999492' />
                        <input
                            type='search'
                            name=''
                            placeholder='Search Apps'
                            className='py-3 px-4 w-full focus:outline-none'
                            onChange={(e) => handleQueryChange(e)}
                        />
                    </div>
                </form>
            </div>
            <Suspense fallback={<Loading.LoadingRing label={'Loading apps...'} />}>
                <AppDisplaySection
                    searchPromise={
                        query.length > 0
                            ? searchAppByTitle(query, 500)
                            : getAllApps()
                    }
                ></AppDisplaySection>
            </Suspense>
        </div>
    );
};

export default AllApps;
