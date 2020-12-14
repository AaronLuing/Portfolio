import React, { Component } from 'react'
import Footer from './components/Footer'
import Skills from './components/Skills'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Aaron Luings Portfolio</h1>
        <Skills />
        <Footer />
      </div>
    )
  }
}
