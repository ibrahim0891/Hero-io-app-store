


import React from 'react';
import config from '../../config/config.jsx';
import { NavLink } from 'react-router';

const MobileNav = () => {
    const { navLinks } = config
    return (
        <nav className='w-full sm:w-2/3  fixed bottom-0 sm:left-1/2 sm:-translate-x-1/2 px-3 py-2'>
            <div className='space-x-4 md:hidden w-full bg-white/70 backdrop-blur-md px-3 py-2 rounded-full flex items-center justify-around border border-gray-300'>
                {navLinks.map((nav, index) => {
                    return (
                        <NavLink
                            key={index}
                            to={nav.path}
                            className={({ isActive }) =>
                                `text-center flex flex-col items-center gap-1 w-1/3 transition-all active:scale-90 
                               hover:bg-white/50 hover:rounded-full hover:py-3 hover:px-4
                                ${isActive ? "bg-white rounded-full w-full py-3 px-4" : "w-full"} `
                            }
                        >
                            <span>
                                {nav.icon}
                            </span>
                            <span className='text-xs   sm:inline'>
                                {nav.label}
                            </span>
                        </NavLink>
                    );
                })}
            </div>
        </nav>

    );
};

export default MobileNav;