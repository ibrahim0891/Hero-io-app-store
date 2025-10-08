

import { DownloadIcon, StarIcon } from '@phosphor-icons/react';
import aveta from 'aveta';
import React, { use } from 'react';
import AppNotFound from '../../app-not-found';

const AppDetails = ({ appPromise }) => {
    let appData = use(appPromise)
    if (!appData) {
        return <AppNotFound/>
    }
    
    let { image, downloads, ratingAvg, title, id, companyName, description, reviews, ratings } = appData

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
                    <div className='flex items-center gap-8'>
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
                        <button className='px-8 py-4 bg-indigo-400 text-white rounded-md w-full md:w-auto'> Install now</button>
                    </div>
                </div>
            </div>
            <div></div>
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