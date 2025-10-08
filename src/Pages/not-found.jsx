

import React from 'react';
import SectionHeading from './Global-components/SectionHeading';
import Button from './Global-components/Button';

const NotFound = () => {
    return (
        <div className='py-16 flex-1'>
            <img src="/assets/error-404.png" alt="" className='m-auto' />
            <SectionHeading heading={'Oops, Page not found!'} subHeading={'The page you are looking for is not available.'}/>
            <Button className={'m-auto block'}> Go Back! </Button>
        </div>
    );
};

export default NotFound;