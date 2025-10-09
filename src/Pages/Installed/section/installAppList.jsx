


import { DownloadSimpleIcon, StarIcon } from '@phosphor-icons/react';
import aveta from 'aveta';
import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { storageMethods } from '../../../utils/localStorageManagement';
import AppCard from '../components/AppCard';
import { useCountContext } from '../../../context/appSearchResultCount';
import AppCount from '../components/AppCount';
import SectionHeading from '../../Global-components/SectionHeading';
import toast, { Toaster } from 'react-hot-toast';
import { SortAscIcon } from 'lucide-react';




const InstalledAppList = ({ appListPromise }) => {
    let data = use(appListPromise)
    let [AppDataList, setAppData] = useState(data)
    let [removedAppId, setRemovedAppId] = useState()
    let { setCount } = useCountContext()

    useEffect(() => {
        let updatedList = AppDataList.filter((appdata) => {
            return appdata.id != removedAppId
        })
        setAppData(updatedList)
        setCount(updatedList.length)
    }, [removedAppId])

    if (AppDataList.length == 0) {
        return <div className='px-12 py-8'>
            <img src="https://cdn3.iconfinder.com/data/icons/business-people-40/327/Flat_Blue-09-02-512.png" alt="" className='m-auto max-w-2xs' />
            <h1 className='text-lg font-semibold text-center my-2'> You haven't installed any app yet </h1>
            <p className='text-gray-500 text-center'> Try installing an app</p>
        </div>
    }

    let handleChange = (e) => {
        let type = e.target.value;

        switch (type) {
            case 'dlAsc':
                setAppData([...AppDataList].sort((a, b) => a.downloads - b.downloads))
                break;
            case 'dlDsc':
                setAppData([...AppDataList].sort((a, b) => b.downloads - a.downloads))
                break;
            case 'asc':
                setAppData([...AppDataList].sort((a, b) => a.size - b.size))
                break;
            case 'dsc':
                setAppData([...AppDataList].sort((a, b) => b.size - a.size))
                break;
            case 'ascAlpha':
                setAppData([...AppDataList].sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())))
                break;
            case 'dscAlpha':
                setAppData([...AppDataList].sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase())))
                break;
            default:
                break;
        }
    }



    return (
        <div className='container-center mb-14'>
            <div className='flex flex-col-reverse md:flex-row gap-4 items-center justify-between my-10 container-center '>

                <AppCount />

                <form className=''>
                    <div className='flex items-center justify-center border border-gray-300 bg-white rounded-md px-5 py-3 '>
                        <span> Sort by:  </span>
                        <select onChange={(e) => handleChange(e)} className='focus:outline-none'>
                            <option value="" disabled> Sort</option>
                            <option value="dlAsc">  Low-high </option>
                            <option value="dlDsc">  High-Low</option>
                            <option value="asc">    Size(asc) </option>
                            <option value="dsc">  Size(dsc)</option>
                            <option value="ascAlpha">A - z</option>
                            <option value="dscAlpha">Z - a</option>
                        </select>
                    </div>
                </form>
            </div>

            {
                AppDataList.map((app, index) => {
                    return <AppCard app={app} key={index} setRemovedId={setRemovedAppId} />
                })
            }



        </div>
    );
};

export default InstalledAppList;