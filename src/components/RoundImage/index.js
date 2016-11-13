import React, { Component } from 'react'
import src from '../../assets/images/congruent_outline.png'

export default class RoundImage extends Component {
  render () {
    return (<div className='pa4 tc'>
        <img src={src} className='br-100 ba h5 w5 dib'/>
      </div>
    )
  }
}
