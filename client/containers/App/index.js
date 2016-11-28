import React from 'react'
import { connect } from 'react-redux'
import RandomNumber from 'components/RandomNumber'
import RoundImage from 'components/RoundImage'
import WelcomeNote from 'components/WelcomeNote'
import { Actions as GenerateNumberActions } from 'redux/RandomNumber.redux'
import { Actions as SetMessageActions } from 'redux/Message.redux'
import { Types as StarWarsTypes } from 'redux/StarWars.redux'
import { starWars } from 'sagas/actions'
import { random } from 'lodash'
import {
  getTest,
  GetCharacter
} from 'api'

const App = props => {
  const { message, randomNumber, handleClick, getFoo, handleSW } = props
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
        <button
          className='f6 link dim br2 ba ph3 pv2 mb2 dib dark-gray bg-transparent ma3 pointer'
          onClick={ () => handleSW() } >
        Star Wars Character
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
  async getFoo (param) { dispatch(SetMessageActions.setMessage((await getTest(param)).data)) },
  async handleSW (id = random(1, 87)) {
    dispatch({
      type: starWars,
      payload: id
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
