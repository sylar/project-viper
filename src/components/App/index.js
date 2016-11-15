import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import RandomNumber from '../RandomNumber'
import RoundImage from '../RoundImage'
import WelcomeNote from '../WelcomeNote'
import style from './style.css'
import classnames from 'classnames'
import { Actions as GenerateNumberActions } from '../../redux/RandomNumber.redux'

const classes = classnames.bind(style)

const renderMessage = value => {
  if (!value) {
    return (<h2 className='black-60'>Press the button!</h2>)
  }

  return (<h2 className='black-60'>Awesome! Now check Reactotron and press again 😜</h2>)
}

const App = props => {
  const { value, handleClick} = props

  const cx = classes(`vh-100 dt w-100 ${style.image}`)
  return (
    <div className={cx}>
      <div className='dtc v-mid tc white ph3 ph4-l'>
        <RoundImage />
        <WelcomeNote />
        <RandomNumber number={value || 0}/>
        <button className='f6 link dim br2 ba ph3 pv2 mb2 dib dark-gray bg-transparent ma3 pointer' onClick={ handleClick }>Press Me!</button>
        { renderMessage(value) }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({...state.randomNumber})

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(GenerateNumberActions.generate())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
