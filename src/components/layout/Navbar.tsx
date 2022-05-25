import { GitBranch } from "phosphor-react"
import React from "react"
import { Link } from 'react-router-dom'


type NavbarProps = {
    title: string
} & typeof defaultProps;

const defaultProps = {
    title: "Github Finder"
}

export function Navbar( {title}: NavbarProps ){
    return (
        <nav className="bg-primary h-10 flex items-center p-4 text-light text-lg font-bold gap-2">
            <h1 className="flex items-center gap-2">
                <GitBranch className="w-4 h-4"/>
                {title}
            </h1>
            <ul className="flex absolute gap-3 justify-end items-center right-2 mr-4 text-light">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )   
}

Navbar.defaultProps = defaultProps

