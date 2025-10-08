import React from "react";
import SectionHeading from "../Global-components/SectionHeading";
import { Search } from "lucide-react";

const AllApps = () => {
    return (
        <div className='container-center flex-1'>
            <SectionHeading
                heading={"Our All Applications"}
                subHeading={
                    "Explore All Apps on the Market developed by us. We code for Millions"
                }
            />

            <div className='flex items-center justify-between my-10'>
                <p className="text-xl font-semibold">{"123 Apps Found"}</p>
                <form className=''>
                    <div className='flex items-center justify-center border border-gray-200 rounded-md px-5'>
                        <Search size={24} color='#999492' />
                        <input
                            type='search'
                            name=''
                            placeholder='Search Apps'
                            className='py-3 px-4 w-full'
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AllApps;
