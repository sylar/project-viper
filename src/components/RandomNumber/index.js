import React, { Component } from 'react'
import { title } from './style.css'

export default class RandomNumber extends Component {
  state = {
    number: Math.random()
  }

  render () {
    console.log(title);
    return (<div>
      <h1 className = {title}>{this.state.number}</h1>
      </div>
    )
  }
}
