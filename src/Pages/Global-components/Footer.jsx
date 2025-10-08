


// import React from 'react';
import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, TwitterLogoIcon, YoutubeLogoIcon } from '@phosphor-icons/react';
import Logo from './Logo';
import { AppStoreLogos } from '../home/section/Hero';
// import { FacebookIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
// import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, TwitterLogoIcon, YoutubeLogoIcon } from '@phosphor-icons/react';

// const Footer = () => {
//     return (
//         <footer className='bg-slate-900 text-white py-6'>
//             <div className='flex items-center justify-between container-center py-10'>
//                 <div>
//                     <Logo />
//                 </div>
//                 <div>
//                     <p> Social Links</p>
//                     <div className='flex items-center gap-3 text-xs'>
//                         <FacebookIcon />
//                         <YoutubeIcon />
//                         <TwitterIcon />
//                     </div>
//                 </div>
//             </div>
//             <div className='text-center py-5'>
//                 <p>Copyright © 2025 - All right reserved</p>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

// A reusable component for footer links to keep the main component clean
const FooterLink = ({ href, children }) => (
    <li>
        <a href={href} className='text-gray-400 hover:text-white transition-colors duration-300'>
            {children}
        </a>
    </li>
);

// A reusable component for the section titles
const FooterTitle = ({ children }) => (
    <h3 className='text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4'>
        {children}
    </h3>
);


const Footer = () => {
    return (
        <footer className='bg-slate-900 text-white pb-16 md:pb-0'>
            <div className='container mx-auto px-6 py-16'>

                <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                    <div className='lg:col-span-2'>
                        <Logo />
                        <p className='text-gray-400 mt-4 max-w-xs'>
                            The ultimate destination for discovering and downloading your favorite apps.
                        </p>
                        <div className='py-4 flex items-start md:hidden lg:flex'>
                            <AppStoreLogos />
                        </div>
                    </div>

                    <div>
                        <FooterTitle>Explore</FooterTitle>
                        <ul className='space-y-3'>
                            <FooterLink href="#">Browse Apps</FooterLink>
                            <FooterLink href="#">Categories</FooterLink>
                            <FooterLink href="#">Top Charts</FooterLink>
                            <FooterLink href="#">New Releases</FooterLink>
                        </ul>
                    </div>


                    <div>
                        <FooterTitle>Company</FooterTitle>
                        <ul className='space-y-3'>
                            <FooterLink href="#">About Us</FooterLink>
                            <FooterLink href="#">Blog</FooterLink>
                            <FooterLink href="#">Careers</FooterLink>
                            <FooterLink href="#">Press</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <FooterTitle>For Developers</FooterTitle>
                        <ul className='space-y-3'>
                            <FooterLink href="#">Developer Console</FooterLink>
                            <FooterLink href="#">Submit App</FooterLink>
                            <FooterLink href="#">Guidelines</FooterLink>
                            <FooterLink href="#">API Docs</FooterLink>
                        </ul>
                    </div>

                </div>

                <div className='mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center'>

                    <p className='text-gray-500 text-sm'>
                        Copyright © {new Date().getFullYear()} AppStore - All right reserved
                    </p>

                    <div className='flex items-center gap-4 mt-6 sm:mt-0'>
                        <a href="#" aria-label="Facebook" className='text-gray-400 hover:text-white transition-colors duration-300'>
                            <FacebookLogoIcon className='h-5 w-5' />
                        </a>
                        <a href="#" aria-label="YouTube" className='text-gray-400 hover:text-white transition-colors duration-300'>
                            <YoutubeLogoIcon className='h-5 w-5' />
                        </a>
                        <a href="#" aria-label="Twitter" className='text-gray-400 hover:text-white transition-colors duration-300'>
                            <TwitterLogoIcon className='h-5 w-5' />
                        </a>
                        <a href="#" aria-label="Instagram" className='text-gray-400 hover:text-white transition-colors duration-300'>
                            <InstagramLogoIcon className='h-5 w-5' />
                        </a>
                        <a href="#" aria-label="LinkedIn" className='text-gray-400 hover:text-white transition-colors duration-300'>
                            <LinkedinLogoIcon className='h-5 w-5' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;