import { PropTypes } from "mobx-react"
import { GameController } from "phosphor-react"
import { Component } from "react"
import { render } from "react-dom"
import  api from "../../services/api"

type UserProps = {
    user: {
        name: string,
        login: string,
        avatar_url: string,
        location: string,
        bio: string,
        blog: string,
        html_url: string,
        followers: number,
        following: number,
        public_repos: number,
        public_gists: number,
        hireable: boolean
    },
    
}

export class User extends Component <any, UserProps>{

    componentDidMount(){
        console.log(this.props.user)
    }

    render(){
        return(
            <div>
                {this.props.user.login}
            </div>
        )
    }
}

