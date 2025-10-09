

import React from 'react';

const SectionHeading = ({heading , subHeading}) => {
    return ( 
            <div className='space-y-5 text-center my-10   mx-auto'>
                <h1 className='text-4xl md:text-5xl font-semibold'> {heading} </h1>
                <p className='text-gray-700'>
                    {subHeading}
                </p>
            </div> 
    );
};

export default SectionHeading;