import  { use, useEffect } from "react";
import AppCard from "../../Global-components/App-card";
import { useCountContext } from "../../../context/appSearchResultCount";

const AppDisplaySection = ({ searchPromise }) => {
    let result = use(searchPromise);
    const { setCount } = useCountContext()

    useEffect(() => {
        setCount(result.length)
    }, [result])

    return <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 md:gap-10 gap-6 sm:gap-8">
        {result.map((app, index) => {
            return <AppCard key={index} app={app}></AppCard>
        })}
    </div>;
};

export default AppDisplaySection;
