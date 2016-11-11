import React, { Component } from 'react'
import { title } from './style.css'

export default class RandomNumber extends Component {
  state = {
    number: Math.random().toFixed(2)
  }

  render () {
    return (<div>
      <h1 className = 'mw5 mw7-ns center bg-light-gray pa3 ph5-ns black-70'>
        <div className = 'tc-l'>
          {this.state.number}
        </div>
      </h1>
      </div>
    )
  }
}
