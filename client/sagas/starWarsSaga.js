import { takeLatest, channel } from 'redux-saga'
import { take, fork, call, put } from 'redux-saga/effects'
import { apiGetCharacter } from '../api'
import { getActionName } from '../redux/common.redux'
import { pick } from 'lodash'
import {
  Actions as starWarsActions,
  Types as starWarsTypes
} from '../redux/StarWars.redux'
import {
  Actions as messageActions,
  Types as messageTypes
} from '../redux/Message.redux'

const retrieveData = function* ({ payload }, infoChannel) {
  const { data } = yield call(apiGetCharacter, payload)
  yield put(starWarsActions.setCharacter(pick(data, 'name')))
  yield put(infoChannel, data.name)

}

const setTheMessage = function* (infoChannel) {
  const name = yield take(infoChannel)
  yield put(messageActions.setMessage(name))
}

export default function* starWarsSaga (action) {
  const start = getActionName({ type: 'Start', task: starWarsTypes.GetCharacter })
  const finish = getActionName({ type: 'Finish', task: starWarsTypes.GetCharacter })

  const infoChannel = yield call(channel)

  yield put({ type: start })

  yield call(retrieveData, action, infoChannel)

  yield call(setTheMessage, infoChannel)

  yield put({ type: finish })

  infoChannel.close()
}
