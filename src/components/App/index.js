import React, { Component } from 'react'
import RandomNumber from '../RandomNumber'
import RoundImage from '../RoundImage'
import WelcomeNote from '../WelcomeNote'
import style from './style.css'
import classnames from 'classnames'

const classes = classnames.bind(style)

export default class App extends Component {
  state = {
    number: Math.random().toFixed(3)
  }

  render () {
    const cx = classes(`vh-100 dt w-100 ${style.image}`)
    return (
      <div className={cx}>
        <div className='dtc v-mid tc white ph3 ph4-l'>
          <RoundImage />
          <WelcomeNote />
          <RandomNumber number={this.state.number}/>
        </div>
      </div>
    )
  }
}
