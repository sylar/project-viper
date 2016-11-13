import React, { Component } from 'react'
import { title } from './style.css'

export default class RandomNumber2 extends Component {
  state = {
    number: Math.random().toFixed(2)
  }

  render () {
    const classN = `${title}`
    return (<div>
<h1 className = {classN}>        <div className = 'tc-l'>
          {this.state.number}
        </div>
      </h1>
      </div>
    )
  }
}
