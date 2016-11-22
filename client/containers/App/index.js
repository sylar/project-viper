import React from 'react'
import { connect } from 'react-redux'
import RandomNumber from '../../components/RandomNumber'
import RoundImage from '../../components/RoundImage'
import WelcomeNote from '../../components/WelcomeNote'
import { Actions as GenerateNumberActions } from '../../redux/RandomNumber.redux'
import { Actions as SetMessageActions } from '../../redux/Message.redux'
import { foo } from '../../api'

const App = props => {
  const { message, randomNumber, handleClick, getFoo} = props
  return (
    <div className='dt w-100'>
      <div className='dtc v-mid tc white ph3 ph4-l'>
        <RoundImage />
        <WelcomeNote />
        <RandomNumber number={randomNumber.value || 0}/>
        <button
          className='f6 link dim br2 ba ph3 pv2 mb2 dib dark-gray bg-transparent ma3 pointer'
          onClick={ handleClick } >
        Press Me!
        </button>
        <button
          className='f6 link dim br2 ba ph3 pv2 mb2 dib dark-gray bg-transparent ma3 pointer'
          onClick={ () => getFoo('TEST_PARAM') } >
        Test API Call
        </button>
        <h2 className='black-60'>
          { message.value }
        </h2>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({...state })

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(GenerateNumberActions.generate())
    dispatch(SetMessageActions.setMessage(
      process.env.NODE_ENV !== 'production'
      ? 'Awesome! Now check Reactotron and press again 😜'
      : 'Aweomse! Generate another number!'
    ))
  },
  async getFoo (param) { dispatch(SetMessageActions.setMessage((await foo(param)).data)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
