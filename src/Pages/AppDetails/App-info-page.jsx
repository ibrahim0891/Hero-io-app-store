


import React, { Suspense } from 'react';
import { Outlet, useParams } from 'react-router';
import { getAppById } from '../../Data/getAppById';
import AppDetails from './section/app-details';
import Loading from '../Global-components/LoadingSection';

const AppDetailsPage = () => {
    const { appId } = useParams()
    
    let appPromise = getAppById(appId)
    return (
        <div className='max-w-4x m-auto'>
             <Suspense fallback={<Loading/>}>
                <AppDetails appPromise={appPromise}></AppDetails>
             </Suspense>
        </div>
    );
};

export default AppDetailsPage;