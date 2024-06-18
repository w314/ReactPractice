import React from "react";
import { NavLink } from 'react-router-dom'
import './Nabvar.css'

type linkType = {
    id: number,
    path: string,
    name: string
}

const NavItem: React.FC<{
    link: linkType
}> = ({ link }) => {

    return(
     <button className="button">
        <NavLink 
            className="link"
            to={`./${link.path}`}
        >{link.name}</NavLink>
     </button>
    )
}


const Navbar: React.FC<{}> = () => {

    const navItems = [
        { id: 1, path: "counter", name: "Counter" }, 
        { id: 2, path: "todoList", name: "Todo List" }, 
        { id: 3, path: "formValidation", name: "Form Validation" },
        { id: 4, path: "search", name: "Product Search" }, 
        { id: 5, path: "uploader", name: "Picture Uploader" },
        { id: 6, path: "users", name: "Fetch Users" },
        { id: 7, path: "profile", name: "Profile" }
    ]

    return (
        <>  
        <nav className="flex"> 
            {navItems.map(link => (
                <NavItem 
                    key={link.id}
                    link={link}
                />
            ))}
        </nav>    
        </>
    )
}

export default Navbar