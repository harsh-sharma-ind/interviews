import { SagaIterator } from '@redux-saga/core'
import { call, put, takeEvery } from 'redux-saga/effects'

import { SharedAction } from 'features/shared/store'

import { sbFetchInviteUsersList } from '../api'

import { ProfileAction } from './interview.redux'

function* fetchInviteUserList({
  payload,
}: {
  type: typeof ProfileAction.inviteUsers
  payload: string
}): SagaIterator {
  yield put(SharedAction.setLoader(true))
  const response = yield call(sbFetchInviteUsersList, payload)
  if (response) {
    yield put(ProfileAction.setInviteUsers(response.data))
    yield put(SharedAction.setLoader(false))
  }
}

export function* profileWatcherSega(): SagaIterator {
  yield takeEvery(ProfileAction.fetchInviteUsersList.type, fetchInviteUserList)
}
export default profileWatcherSega
