import { DownloadSimpleIcon, StarIcon, TrashIcon } from "@phosphor-icons/react";
import aveta from "aveta";
import { useState } from "react";
import { Link } from "react-router";
import { storageMethods } from "../../../utils/localStorageManagement";
import InLineLoader from "../../Global-components/InlineLoader";
import toast from "react-hot-toast";



let AppCard = ({ app ,setRemovedId }) => {
    let [isUninstalling, setIsUninstalling] = useState(false)
    let { image, downloads, ratingAvg, title, id, companyName, description, reviews, ratings, size } = app;
    
    let handleUninstall = (id) => {
        setIsUninstalling(true)
        setTimeout(() => {
            toast.success(`${title} uninstalled`)
            setIsUninstalling(false)
            storageMethods.removeFromLocalStorage(id)
            setRemovedId(id)

        }, 2000);
    }
    
    return <div className='bg-white p-4 md:p-6 flex items-center mb-6 space-x-3 md:space-x-6'>
       
        <div className='w-12 md:w-24 rounded-xl md:rounded-2xl border border-gray-200 overflow-hidden'>

            <img src={image} alt="" className='w-full' />
        </div>
        <div className='flex-1 flex items-center justify-between '>
            <Link to={'/app-details/' + id}>
                <div className=' space-y-1 md:space-y-3'>
                    <h1 className=' text-sm sm:text-2xl hover:underline truncate'> {title} </h1>
                    <div>
                        <div className='flex items-center font-sans text-sm '>
                            <div className='hidden md:flex items-center justify-center  p-1 px-2 gap-2 border border-amber-200 bg-amber-50 text-amber-700 rounded-full mr-4'>
                                <span>{ratingAvg}</span>
                                <StarIcon />
                            </div>
                            <div className='hidden md:flex items-center  justify-center  p-1 px-2 gap-2 border rounded-full border-gray-200 mr-4'>
                                <span>{aveta(downloads)} </span>
                                <DownloadSimpleIcon />
                            </div>
                            <div className='text-gray-400'>
                                <p>{size} MB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <div>
                <button className='bg-red-50 text-red-800 px-3 md:px-6 py-3 rounded-md cursor-pointer' onClick={() => handleUninstall(id)}>
                    {isUninstalling ? <span className='flex items-center justify-center gap-3'> <InLineLoader color={'red'} /> <span className="hidden md:inline"> Removing</span> </span> : <span> <TrashIcon className="md:hidden"/> <p className="hidden md:block"> Uninstall </p>  </span>}
                </button>
            </div>
        </div>


    </div>
}

export default AppCard