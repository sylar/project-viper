import React, { Component } from 'react'
import RandomNumber from '../RandomNumber'
import RandomNumber2 from '../RandomNumber2'

export default class App extends Component {
  render () {
    return (
      <div className='bg-white'>
        <h1 className='tc-l'>Hello There!</h1>
        <h3 className='black-50 tc-l'>This is demo of using webpack2, css module, tachyons and many more. Check it out!</h3>
        <RandomNumber number={Math.random().toFixed(3)}/>
        <RandomNumber2 />
      </div>
    )
  }
}
