import React, { useContext, useState } from 'react'
import ToDocontext from '../../Context/ToDocontext'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const count = useContext(ToDocontext);
    const no = count.allD.length

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <nav className="navbar">
                <div className="logo">Logo</div>
                <ul className={ `nav-links ${menuOpen ? 'show-nav' : ''}` }>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/contact"><big>No of Data { no }</big></a></li>
                </ul>
                <div className="menu-icon" onClick={ toggleMenu }>
                    <i className={ menuOpen ? 'fas fa-times' : 'fas fa-bars' }></i>
                </div>
            </nav>
        </>
    )
}

export default Navbar