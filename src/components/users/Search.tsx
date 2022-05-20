import { stringify } from "querystring"
import React, { useState } from "react"

export interface searchProps {
    searchUsers: (userName: string) => void,
    clearSearchUsers: () => void,
}

export function Search({searchUsers, clearSearchUsers}: searchProps){
    const [text, setText] = useState('')

    function onFormSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        searchUsers(text)
        setText('')
    }

    return (
        <>
            <form className="flex items-center w-full flex-col" onSubmit={onFormSubmit}>
                <textarea name="text" placeholder="Username" className="m-2 overflow-hidden w-full flex text-center h-8 items-center rounded-md border-zinc-700 border-2 text-zinc-800 resize-none" value={text} onChange={e => setText(e.target.value)}></textarea>

                <div className="flex gap-3 flex-row w-full">
                    <button type="submit" className="bg-[#333] text-[#fff] py-1 px-2 text-sm cursor-pointer my-2 w-full rounded-md h-8 hover:bg-zinc-500 border-2 border-zinc-300 hover:border-zinc-800 hover:text-zinc-800 transition-colors font-bold hover:font-bold">Search</button>
                    <button onClick={clearSearchUsers} className="bg-[#333] text-[#fff] py-1 px-2 text-sm cursor-pointer my-2 w-full rounded-md h-8 hover:bg-zinc-500 border-2 border-zinc-300 hover:border-zinc-800 hover:text-zinc-800 transition-colors font-bold hover:font-bold">Clear</button>
                </div>
            </form>
            
        </>
    )
}