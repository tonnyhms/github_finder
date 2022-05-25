import { stringify } from "querystring"
import React, { DetailedHTMLProps, MouseEventHandler, useState } from "react"

export interface searchProps {
    searchUsers: (userName: string) => void,
    clearSearchUsers: () => void,
    showClear: boolean,
    setAlert: (msg: string, type: string) => void,
}

export function Search({ setAlert, searchUsers, clearSearchUsers, showClear}: searchProps){
    const [text, setText] = useState('')

    function onFormSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(text.trim() === ""){
            setAlert("You need to write something", "#8d8c8c")
        }else{
            searchUsers(text)
            setText('')
        }
        
        
    }



    return (
        <>
            <form className="flex items-center w-full flex-col" onSubmit={onFormSubmit}>
                <textarea name="text" placeholder="Username" className="m-2 overflow-hidden w-full flex text-center h-8 items-center rounded-md border-zinc-700 border-2 text-zinc-800 resize-none" value={text} onChange={e => setText(e.target.value)}></textarea>

                <div className="flex gap-3 flex-row w-full">
                    <button type="submit" className="bg-[#333] text-[#fff] py-1 px-2 text-sm cursor-pointer my-2 w-full rounded-md h-8 hover:bg-[#8d8c8c] border-2 border-[#535252] hover:border-[#333] hover:text-dark transition-colors font-bold hover:font-bold">Search</button>
                    {showClear ? <button type="button" onClick={ clearSearchUsers } className="bg-primary text-[#fff] py-1 px-2 text-sm cursor-pointer my-2 w-full rounded-md h-8 hover:bg-[#e4553c] border-2 border-[#e4553c] hover:border-primary hover:text-dark transition-colors font-bold hover:font-bold">Clear</button>:null}
                
                </div>
            </form>
            
        </>
    )
}