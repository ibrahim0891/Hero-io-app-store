import React from "react";

const HeroSection = () => {
    return (
        <div className="mt-20">
            <div className="space-y-4 my-10">
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold text-center">
                        We Build <br /> <span className="text-indigo-500">Productive </span> Apps
                    </h1>
                    <p className="text-center text-gray-600 max-w-5/6 m-auto leading-relaxed">
                        At HERO.IO , we craft innovative apps designed to make
                        everyday life simpler, smarter, and more exciting.Our
                        goal is to turn your ideas into digital experiences that
                        truly make an impact.
                    </p>
                </div>
                <div className="flex items-center justify-center *:px-4 *:py-2">
                    <div className="flex items-center justify-center gap-3 border border-gray-200 rounded-md">
                        <img
                            src='https://cdn1.iconfinder.com/data/icons/social-links/26/playstore-24.png'
                            alt=''
                        />
                        <span> Play store</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 border border-gray-200 rounded-md">
                        <img
                            src='https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Store-24.png'
                            alt=''
                        />
                        <span> App store</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <img src='/assets/hero.png' alt='' className="max-w-[600px]" />
            </div>
        </div>
    );
};

export default HeroSection;
