import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "./Logo";
import Button from "./Button";
import { GithubIcon } from "lucide-react";

const Nav = () => {
    let navLinks = [
        {
            path: "/",
            label: "Home",
        },
        { path: "/apps", label: "Apps" },
        { path: "/installed", label: "Installations" },
    ];
    return (
        <div className="bg-white">
            <div className='flex items-center justify-between py-4 container-center '>
                <Link to={"/"}>
                    <Logo />
                </Link>
                <nav className='space-x-4'>
                    {navLinks.map((nav, index) => {
                        return (
                            <NavLink
                                key={index}
                                to={nav.path}
                                className={({ isActive }) =>
                                    isActive ? "underline text-purple-500" : ""
                                }
                            >
                                {nav.label}
                            </NavLink>
                        );
                    })}
                </nav>
                <Button className={'flex items-center justify-center gap-4'}>
                    <GithubIcon/>
                    <span> Contribute</span>
                </Button>
            </div>
        </div>
    );
};

export default Nav;
