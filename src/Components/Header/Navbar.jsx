import { Github } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

    const links = <div className='flex gap-3 font-medium text-lg'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/apps'}>Apps</NavLink>
        <NavLink to={'/installation'}>Installation</NavLink>
    </div>

    return (
        <div className="navbar max-w-[1440px] mx-auto my-7">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                {/* logo */}
                <div className='w-10 flex items-center gap-2'>
                    <img src="/src/assets/logo.png" alt="" />
                    <h1 className='font-bold text-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a href="https://github.com/khabbab800118" target='_blank'><button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-medium px-5 py-2 rounded-lg flex gap-2'>
                    <span><Github></Github></span>
                    <span>Contribute</span></button></a>
                
            </div>
        </div>
    );
};

export default Navbar;