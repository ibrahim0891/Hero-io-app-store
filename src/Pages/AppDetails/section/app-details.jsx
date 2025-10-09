/* eslint-disable react-hooks/rules-of-hooks */


import { DownloadIcon, StarIcon } from '@phosphor-icons/react';
import aveta from 'aveta';
import React, { use, useEffect, useState } from 'react';
import AppNotFound from '../../app-not-found';
import { storageMethods } from '../../../utils/localStorageManagement';
import { Cell, ResponsiveContainer, Tooltip, XAxis, YAxis , BarChart, Bar } from 'recharts';
import InLineLoader from '../../Global-components/InlineLoader';
import toast from 'react-hot-toast';
 

const AppDetails = ({ appPromise }) => {
    let appData = use(appPromise)
    let [isInstalled, setIsInstalled] = useState(false)
    let [isInstalling, setIsInstalling] = useState(false)
    if (!appData) {
        return <AppNotFound />
    }

    let { image, downloads, ratingAvg, title, id, companyName, description, reviews, ratings, size } = appData

    useEffect(() => {
        if (storageMethods.isInLocalStorage(id)) { 
            setIsInstalled(true)
        }
    }, [])
    let handleInstall = (id) => {
        storageMethods.saveToLocalStorage(id)
        setIsInstalling(true)
        setTimeout(() => {
            toast.success(title + ' installed!')
            setIsInstalling(false)
            setIsInstalled(true)
        }, 3000);
    }

    return (
        <section className='container-center py-16 space-y-8'>
            <div className='flex  gap-10 flex-col md:flex-row '>
                <div>
                    <div className='w-40 md:w-3xs rounded-4xl m-auto overflow-hidden border border-gray-300 border-t border-t-white'>
                        <img src={image} alt="" className='w-full' />
                    </div>
                </div>
                <div className='flex-1 space-y-5 '>
                    <div className='space-y-1 text-center md:text-left'>
                        <h1 className='text-4xl'> {title}</h1>
                        <p className='text-lg'> Developed By- <span className='text-purple-700'>{companyName}</span></p>
                    </div>
                    <div className='flex items-center gap-8 justify-center md:justify-start'>
                        <div className='space-y-2 *:mx-auto md:*:mx-0'>
                            <img className='w-7 aspect-square' src="/assets/icon-downloads.png" alt="" />
                            <p className='text-xs'>Downloads</p>
                            <p className='font-bold text-center md:text-left text-2xl'>{aveta(downloads)}</p>
                        </div>
                        <div className='space-y-2 *:mx-auto md:*:mx-0'>
                            <img className='w-7 aspect-square' src="/assets/icon-ratings.png" alt="" />
                            <p className='text-xs'>Avarage Rating</p>
                            <p className='font-bold text-center md:text-left text-2xl'>{ratingAvg}</p>
                        </div>
                        <div className='space-y-2 *:mx-auto md:*:mx-0'>
                            <img className='w-7 aspect-square' src="/assets/icon-review.png" alt="" />
                            <p className='text-xs'>Total Reviews</p>
                            <p className='font-bold text-center md:text-left text-2xl'>{aveta(reviews)}</p>
                        </div>
                    </div>
                    <div>
                        <button disabled={isInstalled} className={`${isInstalled ? 'bg-gray-400 text-gray-200 cursor-not-allowed' : 'bg-indigo-400 text-white active:scale-90'} px-8 py-4  rounded-md w-full md:w-auto`} onClick={() => handleInstall(id)}>
                            {isInstalling ? <span className='flex items-center justify-center gap-3 cursor-progress'> <InLineLoader color={'white'}/> Installing... </span> :  isInstalled ? 'Installed' : ` Install now (${size}MB)`}
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-semibold my-4'> Reviews </h1>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        data={[...ratings].reverse()}
                        layout="vertical"
                        margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
                    >
                        <XAxis type="number"  dataKey='count' />
                        <YAxis type="category" dataKey="name" />
                        <Tooltip />
                        <Bar dataKey="count" radius={[5, 5, 5, 5]}>
                            {ratings.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill='#6e5dff'
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className='space-y-5'>
                <h1 className='text-2xl font-semibold'> Description</h1>
                <p className='text-gray-500 leading-relaxed whitespace-pre-wrap max-w-4xl '>
                    {description}
                </p>
            </div>
        </section>
    );
};

export default AppDetails 