 
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

    useEffect(() => {
        setSavedApp(storageMethods.getAllSavedApps())
         
    }, [])
    
    
    return (
        <div className='flex-12'>
            <SectionHeading
                heading={"Your Installed Apps"}
                subHeading={
                    "Explore All Trending Apps on the Market developed by us"
                }
            />

          
            <Suspense fallback={<Loading/>}>
                <InstalledAppList setSavedApp={setSavedApp} appListPromise={getAppByIds(savedApps)}/>
            </Suspense>
        </div>
    );
};

export default InstalledAppPage;