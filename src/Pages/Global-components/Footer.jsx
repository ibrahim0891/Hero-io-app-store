


import React from 'react';
import Logo from './Logo';
import { FacebookIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='bg-slate-900 text-white py-6'>
            <div className='flex items-center justify-between container-center py-10'>
                <div>
                    <Logo />
                </div>
                <div>
                    <p> Social Links</p>
                    <div className='flex items-center gap-3 text-xs'>
                        <FacebookIcon/>
                        <YoutubeIcon/>
                        <TwitterIcon/>
                    </div>
                </div>
            </div>
            <div className='text-center py-5'>
                <p>Copyright © 2025 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;