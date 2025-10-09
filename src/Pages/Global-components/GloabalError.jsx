


import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { Link, useRouteError } from 'react-router';

const GloabalError = () => {
    let error = useRouteError()
     
    return (
        <div className='flex items-center justify-center flex-col p-12 m-auto h-screen w-screen space-y-3'>
            <div className='space-y-2 flex items-center justify-center flex-col'>
                <img src="https://cdn4.iconfinder.com/data/icons/system-maintenance/3000/Maintenance-04-320.png" alt="" />
                <h1 className='text-2xl font-semibold text-center'>Ow no! Our system has crushed!</h1>
                <p className='text-center text-gray-500 sm:max-w-3/4 md:max-w-96  '>{'But don\'t worry! We\'ve informed our developer about the issue. It will be fixed soon'}</p>
            </div>
            <div className='bg-red-50 text-red-700 px-10 py-4 border border-red-900 text-center font-mono sm:max-w-3/4 md:max-w-96 my-4 rounded-md'>
                {error.message}
            </div>
            <Link to={'https://google.com'}>
                <Button>
                    Exit Application
                </Button>
            </Link>
        </div>
    );
};

export default GloabalError;