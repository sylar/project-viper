import { takeEvery } from 'redux-saga/effects'
import starWarsSaga from 'starWarsSaga'
import { starWars } from 'actions'
import { Types as starWarsTypes  } from 'redux/StarWars.redux'

export default function* rootSaga () {
  yield takeEvery(starWars, starWarsSaga)
}
