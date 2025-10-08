 
import { Loader, Search } from 'lucide-react';
import SectionHeading from '../Global-components/SectionHeading'; 
import { Suspense, useEffect, useState } from 'react';
import { storageMethods } from '../../utils/localStorageManagement';
import InstalledAppList from './section/installAppList';
import Loading from '../Global-components/LoadingSection';
import { getAppByIds } from '../../Data/getAppsByIds';
import { useCountContext } from '../../context/appSearchResultCount';
import AppCount from './components/AppCount';

const InstalledAppPage = () => {
    let [savedApps , setSavedApp] = useState([]) 
    let [sortBy , setSortBy] = useState()

    useEffect(() => {
        setSavedApp(storageMethods.getAllSavedApps())
         
    }, [])
    
    let handleChange = (e) => {
        setSortBy(e.target.value)
    }

    return (
        <div className='flex-12'>
            <SectionHeading
                heading={"Your Installed Apps"}
                subHeading={
                    "Explore All Trending Apps on the Market developed by us"
                }
            />

            <div className='flex flex-col-reverse md:flex-row gap-4 items-center justify-between my-10 container-center'>

                <AppCount/>

                <form className=''>
                    <div className='flex items-center justify-center border border-gray-300 bg-white rounded-md px-5'>
                        <span> Sort by - </span>
                        <select onChange={(e)=>handleChange(e)}>
                            <option value="size">Size</option>
                            <option value="downloads">Download</option>
                        </select>
                    </div>
                </form>
            </div>

            <Suspense fallback={<Loading/>}>
                <InstalledAppList sortBy={sortBy} setSavedApp={setSavedApp} appListPromise={getAppByIds(savedApps, 1000)}/>
            </Suspense>
        </div>
    );
};

export default InstalledAppPage;