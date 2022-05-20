import { GitBranch } from "phosphor-react"
import React from "react"


type NavbarProps = {
    title: string
} & typeof defaultProps;

const defaultProps = {
    title: "Github Finder"
}

export function Navbar( {title}: NavbarProps ){
    return (
        <nav className="bg-red-600 h-10 flex items-center p-4 text-zinc-100 text-lg font-bold gap-2">
            <h1 className="flex items-center gap-2">
                <GitBranch className="w-4 h-4"/>
                {title}
            </h1>

        </nav>
    )   
}

Navbar.defaultProps = defaultProps

