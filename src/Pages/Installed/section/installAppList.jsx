


import { DownloadSimpleIcon, StarIcon } from '@phosphor-icons/react';
import aveta from 'aveta';
import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { storageMethods } from '../../../utils/localStorageManagement';
import AppCard from '../components/AppCard';
import { useCountContext } from '../../../context/appSearchResultCount';




const InstalledAppList = ({ sortBy, appListPromise }) => {
    let data = use(appListPromise)
    let [AppDataList, setAppData] = useState(data)
    let [removedAppId, setRemovedAppId] = useState()
    let {setCount} = useCountContext()


    console.log(sortBy);

    useEffect(() => {
        let updatedList = AppDataList.filter((appdata) => {
            return appdata.id != removedAppId
        })
        setAppData(updatedList)
        setCount(updatedList.length)
    }, [removedAppId])
    
    return (
        <div className='container-center'>
            {
                AppDataList.map((app, index) => {
                    return <AppCard app={app} key={index} setRemovedId={setRemovedAppId} />
                })
            }
        </div>
    );
};

export default InstalledAppList;