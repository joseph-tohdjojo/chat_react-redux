import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// components
import Title from '../Title/Title'
import Login from '../Login/Login'
import ChatRoom from '../ChatRoom/ChatRoom'





export default function App() {
  return (
    <div className='rootApp'>
      <Title/>
      <Route exact path='/' component={ Login }/>
      <Route exact path='/chatroom' component={ ChatRoom }/>
    </div>
  )
}
