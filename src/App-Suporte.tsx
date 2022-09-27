import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/layout/Navbar'
import { Users } from './components/users/Users'
import axios from 'axios'
import { Spinner } from './components/layout/Spinner'
import api from './services/api'
import { Search, searchProps } from './components/users/Search'
import { ToastContainer, toast } from  'react-toastify'
import { Alert } from './components/layout/Alert'
import { About } from './components/pages/About'
import { User } from './components/users/User'

//the teacher created a "clearSearch" function that erased the users array, but I did a "searched" state that tells me if it has just rendered (componentDidMount) or if you've searched for something (state goes to true at the "searchUsers function")

class App extends Component {

  state = {
    users: [],
    user: { },
    loading: false,
    searched: false,
    notNullSearchText: false,
    alert: null,
  }

  async componentDidMount( ) {
    this.setState({ loading: true })

    const res = await api.get(`/users?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&client_secret=${import.meta.env.VITE_GITHUB_CLIENT_SECRET}`)

    this.setState({ users: res.data, loading: false, searched: false })
  }


  async searchUsers(text: string){
    this.setState({ loading: true }) 

    const res = await api.get(`/search/users?q=${text}&client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&client_secret=${import.meta.env.VITE_GITHUB_CLIENT_SECRET}`)
    
    this.setState({ users: res.data.items, loading: false, searched: true })
  }

  //Get single Github user
  getUser = async (username: string) => {
    this.setState({ loading: true }) 

    const res = await api.get(`/users/${username}?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&client_secret=${import.meta.env.VITE_GITHUB_CLIENT_SECRET}`)
    
    this.setState({ user: res.data, loading: false, searched: true })
    console.log(this.state.user)
  }

  //this method is to clear my users search, but as i'm using the componentDidMount as the "clear", i'm leaving this method just for my knowledge
  clearUsers = () => this.setState({ users:[], loading: false })

  setAlert(msg: string, type: string) {
    this.setState({ alert: {msg, type}})

    setTimeout(() => {this.setState({ alert: null })}, 3000)
  }

  render(){
    const { users, loading, searched, alert, user } = this.state

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="max-w-[1100px] m-auto overflow-hidden px-2">
            <Alert alert={alert}/>
            <Routes>
              <Route path='/' element={
                <>
                  <Search 
                    searchUsers={this.searchUsers.bind(this)} 
                    clearSearchUsers={this.componentDidMount.bind(this)} 
                    showClear={ searched } 
                    setAlert={this.setAlert.bind(this)}
                  />
                  <Users loading={loading} users={users}/>
                </>  
              }/>
              <Route path='/about' element={<About/>}/>
              <Route  path='/user/:login' element={ 
                  <User {...this.props} getUser={this.getUser} user={user} loading={loading}/>
                
              } />
            </Routes>
          </div>
        
        </div>
      </Router>
    )
  }
}

export default App
