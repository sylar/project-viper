import React, { Component } from 'react'
import RandomNumber from '../RandomNumber'
import RandomNumber2 from '../RandomNumber2'

export default class App extends Component {
  render () {
    return (
      <div>
        <h1>Hello There!</h1>
        <RandomNumber />
        <RandomNumber2 />
      </div>
    )
  }
}
