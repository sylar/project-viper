import React, { Component } from 'react'

export default class WelcomeNote extends Component {
  render () {
    return (
      <div>
        <h1 className='tc-l black-60'>Hello There!</h1>
        <h3 className='black-50 tc-l'>This demo is using webpack2, css module, tachyons and many more. Check it out!</h3>
      </div>
    )
  }
}
