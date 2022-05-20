import './App.css'
import { Navbar } from './components/layout/Navbar'
import { Users } from './components/users/Users'
import axios from 'axios'
import React, { Component, MouseEventHandler, useState } from 'react'
import { Spinner } from './components/layout/Spinner'
import api from './services/api'
import { Search, searchProps } from './components/users/Search'


class App extends Component {

  state = {
    users: [],
    loading: false,
    searched: false,
  }

  async componentDidMount( ) {
    this.setState({ loading: true })

    const res = await api.get(`/users?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&client_secret=${import.meta.env.VITE_GITHUB_CLIENT_SECRET}`)

    this.setState({ users: res.data, loading: false })
  }

  async showClear (click: boolean) {
    if(click){
      this.setState({ searched: true });
    }else{
      this.setState({ searched: false });
    }
  }

  async searchUsers(text: string){
    this.setState({ loading: true })

    const res = await api.get(`/search/users?q=${text}&client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&client_secret=${import.meta.env.VITE_GITHUB_CLIENT_SECRET}`)
    
    this.setState({ users: res.data.items, loading: false })
  }

  //this method is to clear my users search, but as i'm using the componentDidMount as the "clear", i'm leaving this method just for my knowledge
  clearUsers = () => this.setState({ users:[], loading: false })

  render(){

    return (
      <div className="App">
        <Navbar />
        <div className="max-w-[1100px] m-auto overflow-hidden px-2">
          <Search searchUsers={this.searchUsers.bind(this)} clearSearchUsers={this.componentDidMount.bind(this)} showClear={ this.state.searched }/>
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
        
      </div>
    )
  }
}

export default App
