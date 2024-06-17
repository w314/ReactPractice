import React from "react";
import { NavLink } from 'react-router-dom'
import './Nabvar.css'

const NavItem: React.FC<{
    link: string
}> = ({ link}) => {

    return(
     <button className="button">
        <NavLink 
            className="link"
            to={`./${link}`}
        >{link}</NavLink>
     </button>
    )
}


const Navbar: React.FC<{}> = () => {

    const navItems = ["counter", "todoList", "formValidation", "search"]

    return (
        <>  
        <nav className="flex"> 
            {navItems.map((link, index) => (
                <NavItem 
                    key={index}
                    link={link}
                />
            ))}
        </nav>    
        </>
    )
}

export default Navbar