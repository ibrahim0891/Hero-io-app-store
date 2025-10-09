


import { DownloadSimpleIcon, ImageBrokenIcon, StarIcon } from '@phosphor-icons/react';
import aveta from 'aveta';
import { Link } from 'react-router';


const AppCard = ({ app }) => {
    let { image, downloads, ratingAvg, title  ,  id } = app;
    return (
        <Link to={"/app-details/"+id} className='hover:scale-105 transition-all'>
            <div className='bg-white/70 border-gray-300 border aspect-square rounded-4xl overflow-hidden'>
                <img src={image} alt='' className='w-full' />
            </div>
            <div className='p-2'>
                <h1 className='text-base truncate'> {title} </h1>
                <div className='flex items-center justify-between font-sans text-sm'>
                    <div className='flex items-center  justify-center rounded-md p-1 px-2 gap-2'>
                        <span>{ratingAvg}</span>
                        <StarIcon />
                    </div>
                    <div className='flex items-center  justify-center rounded-md p-1 px-2 gap-2'>
                        <span>{aveta(downloads)} </span>
                        <DownloadSimpleIcon />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;