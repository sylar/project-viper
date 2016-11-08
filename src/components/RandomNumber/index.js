import React, { Component } from 'react'
import styles from './style.css'

export default class RandomNumber extends Component {
  state = {
    number: Math.random()
  }

  render () {
    console.log(styles);
    return (<div>
      <h1 className = {styles.title}>{this.state.number}</h1>
      </div>
    )
  }
}
