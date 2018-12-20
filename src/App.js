import React, { Component } from 'react'
import ContactPage from './Client/Components/ContactPage'
import CoursesParticulierPage from './Client/Components/CoursesParticulierPage'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <CoursesParticulierPage />
      </div>
    )
  }
}

export default App
