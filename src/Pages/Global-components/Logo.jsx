import React from 'react';

const Logo = () => {
    return (
        <div className='flex items-center gap-3'>
            <img className='w-8 aspect-square' src='/assets/logo.png' alt='' />
            <h1 className='text-lg' title='Go to home'> Hero.io </h1>
        </div>
    );
};

export default Logo;