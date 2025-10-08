import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "./Logo";
import Button from "./Button";
import { GithubIcon } from "lucide-react";
import config from "../../config/config.jsx";

const Nav = () => {
    const {navLinks} = config
    return (
        <div className="bg-white/80 backdrop-blur-lg sticky top-0">
            <div className='flex items-center justify-between py-4 container-center '>
                <Link to={"/"}>
                    <Logo />
                </Link>
                <nav className='space-x-4 hidden md:block *:w-1/3'>
                    {navLinks.map((nav, index) => {
                        return (
                            <NavLink
                                key={index}
                                to={nav.path}
                                className={({ isActive }) =>
                                    `px-4 py-5 transition-all ${isActive && "text-purple-500  border-b-4 border-purple-500"}`
                                }
                            >
                                {nav.label}
                            </NavLink>
                        );
                    })}
                </nav>
              
                <Button className={'flex items-center justify-center gap-4'}>
                    <GithubIcon/>
                    <span className="hidden sm:inline"> Contribute</span>
                </Button>
            </div>
        </div>
    );
};

export default Nav;
