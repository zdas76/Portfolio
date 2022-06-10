import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {

    const navItem = <>
        <li><Link to="home" spy={true} smooth={true} offset={-50} duration={500}>Home</Link></li>
        <li><Link to="about" spy={true} smooth={true} offset={-50} duration={500}>About</Link></li>
        <li><Link to="project" spy={true} smooth={true} offset={-50} duration={500} >Project</Link></li>
        <li><Link to="contact" spy={true} smooth={true} offset={-50} duration={500} >Contact</Link></li>
        </>
    return (
        <div className="navbar bg-blue-100 fixed top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    < ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" >
                        {navItem}    
                    </ul >
                    
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    );
};

export default Navbar;