import React from "react";

const Statistics = () => {
    return (
        <div className='bg-gradient-to-br from-indigo-500  to-purple-600 text-white'>
            <div className='container-center p-10 md:p-20 space-y-10'>
                <div className='text-center text-4xl md:text-5xl font-semibold'>
                    Trusted by Millions, Built for You
                </div>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                    <div className='text-center space-y-2 md:space-y-4'>
                        <p> Total Downloads </p>
                        <p className='text-4xl md:text-5xl font-bold'>29.6M</p>
                        <p>21% more than last month</p>
                    </div>
                    <div className='text-center space-y-2 md:space-y-4'>
                        <p> Total Reviews </p>
                        <p className='text-4xl md:text-5xl font-bold'>906K</p>
                        <p> 46% more than last month</p>
                    </div>
                    <div className='text-center space-y-2 md:space-y-4'>
                        <p> Active Apps </p>
                        <p className='text-4xl md:text-5xl font-bold'>5000+</p>
                        <p>1k More will launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
