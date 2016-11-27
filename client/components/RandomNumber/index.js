import React, { Component } from 'react'
import classes from 'classnames/bind'
import styles from 'style'

const cx = classes.bind(styles)
const style = cx(`${styles.title} mw5 mw7-ns center bg-light-gray pa3 ph5-ns black-70 flex w-100 items-center content-center flex-wrap`)

const RandomNumber = props => (
    <div className={style}>
      <h1 className='black-60 flex-auto tc'>Random number</h1>
      <h1 className='flex-auto tc'>
        {props.number}
      </h1>
  </div>
)

export default RandomNumber
