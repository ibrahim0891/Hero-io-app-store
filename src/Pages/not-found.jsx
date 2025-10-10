

import React from 'react';
import SectionHeading from './Global-components/SectionHeading';
import Button from './Global-components/Button';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className='py-16 flex-1'>
            <img src="/assets/error-404.png" alt="" className='m-auto' />
            <SectionHeading heading={'Oops, Page not found!'} subHeading={'The page you are looking for is not available.'} />
            <Link to={'/'}>
                <Button className={'m-auto block'}> Go Back! </Button>
            </Link>
        </div>
    );
};

export default NotFound;