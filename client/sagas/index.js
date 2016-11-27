import { takeEvery } from 'redux-saga'
import starWarsSaga from 'starWarsSaga'
import { starWars } from 'actions'
import { Types as starWarsTypes  } from 'redux/StarWars.redux'

export default function* rootSaga () {
  yield takeEvery(starWars, starWarsSaga)
}
