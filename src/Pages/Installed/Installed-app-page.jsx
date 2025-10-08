

import React from 'react';
import SectionHeading from '../Global-components/SectionHeading';

const InstalledAppPage = () => {
    return (
        <div className='flex-12'>
            <SectionHeading
                heading={"Your Installed Apps"}
                subHeading={
                    "Explore All Trending Apps on the Market developed by us"
                }
            />
        </div>
    );
};

export default InstalledAppPage;