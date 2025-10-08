


import React from 'react';
import { useCountContext } from '../../../context/appSearchResultCount';

const AppCount = () => {
    const { count } = useCountContext()
    return (
        <p className='text-xl font-semibold'>
            {count + " Apps Found"}
        </p>
    );
};

export default AppCount;