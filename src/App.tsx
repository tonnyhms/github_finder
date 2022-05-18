import './App.css'
import { Navbar } from './components/layout/Navbar'
import { Users } from './components/users/Users'
import axios from 'axios'
import React, { Component, useState } from 'react'
import { Spinner } from './components/layout/Spinner'
import api from './services/api'


class App extends Component {

  state = {
    users: [],
    loading: false
  }

  async componentDidMount( ) {
    this.setState({ loading: true })

    const res = await api.get(`/users?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&client_secret=${import.meta.env.VITE_GITHUB_CLIENT_SECRET}`)

    this.setState({ users: res.data, loading: false })
  } 

  render(){

    return (
      <div className="App">
        <Navbar />
        <div className="max-w-[1100px] m-auto overflow-hidden px-2">
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
        
      </div>
    )
  }
}

export default App
