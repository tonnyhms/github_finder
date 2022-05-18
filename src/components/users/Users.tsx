import { Spinner } from "../layout/Spinner";
import { UserItem, UserItemProps } from "./UserItem"

export type UserProps = {
    loading: boolean;
    users: [
        user:{
            id: number,
            login: string,
            avatar_url: string,
            html_url: string
        }
        
    ]
}

export function Users( {loading, users}: UserProps) {
    
    if(loading){
        return <Spinner/>
    }else{

        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id}  user={user}/>
                )
                
                )}
            </div>
        )
    }
}

//the tutor teaches to use a userStyle to format the cards so they fit well. As i1m using tailwindcss, i've already imported some classes and its rendering fine
//after getting the 30 first users the app is not working well with the tailwind, that's why i'm putting back in the userStyle the tutor created

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',

}