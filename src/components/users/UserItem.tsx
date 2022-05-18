import { Users } from "./Users"

export type UserItemProps = {
    user: {
        id: number,
        login: string,
        avatar_url: string,
        html_url: string
    }
}

export function UserItem({user}: UserItemProps){

    return (
        <div className=" w-full border-zinc-400 border rounded-lg flex items-center gap-2 text-center p-2 my-3 justify-center flex-col shadow-sm shadow-black">
            <img src={user.avatar_url} alt="tonnyhms avatar" className="rounded-full w-14 flex" />
            <h3>{user.login}</h3>
            <div>
                <a href={user.html_url} className="bg-[#333] text-[#fff] py-1 px-2 text-sm cursor-pointer my-2  rounded-md">More</a>
            </div>
        </div>
    )
}