/* eslint-disable react-hooks/rules-of-hooks */
import { use, useEffect } from "react";
import AppCard from "../../Global-components/App-card";
import { useCountContext } from "../../../context/appSearchResultCount";
import toast from "react-hot-toast";

const AppDisplaySection = ({ searchPromise }) => {
    let result = use(searchPromise);
    const { setCount } = useCountContext()
    
    if (result.length == 0) {
        setCount(0)
        return <div className="text-center mb-14 space-y-3">
            <img className="max-w-1/2 m-auto -mb-6" src="https://professionalwritingservices.in/wp-content/uploads/2023/01/sop-for-mba-in-canada-img4.png" alt="" srcset="" />
            <p className="text-3xl font-semibold"> No app found</p>
            <p>Try something else!</p>
        </div>
    }

    useEffect(() => {
        setCount(result.length) 
    }, [result])



    return <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 md:gap-10 gap-6 sm:gap-8 mb-14 mt-6">
        {result.map((app, index) => {
            return <AppCard key={index} app={app}></AppCard>
        })}
    </div>;
};

export default AppDisplaySection;
