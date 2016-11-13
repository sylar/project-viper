import React, { Component } from 'react'
import classes from 'classnames/bind'
import styles from './style.css'

const cx = classes.bind(styles)

export default class RandomNumber extends Component {
  render () {
    const style = cx(`${styles.title} mw5 mw7-ns center bg-light-gray pa3 ph5-ns black-70 flex w-100 items-center content-center flex-wrap`)
    return (<div className={style}>
          <h1 className='black-60 flex-auto tc'>A random number</h1>
          <h1 className='flex-auto tc'>
            {this.props.number}
          </h1>
      </div>
    )
  }
}
