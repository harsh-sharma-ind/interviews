import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from 'main-stores/hooks'

import { getInviteUsers, ProfileAction } from '../store/interview.redux'
import { InvitedUsers } from '../type'

export type ProfileServiceOperators = {
  fetchInviteUserList: (user_id: string) => void
  getInviteUsers: InvitedUsers[] | null
}

export const ProfileService = (): Readonly<ProfileServiceOperators> => {
  const dispatch = useAppDispatch()
  return {
    getInviteUsers: useAppSelector(getInviteUsers),

    fetchInviteUserList: useCallback(
      (user_id: string) => {
        dispatch(ProfileAction.fetchInviteUsersList(user_id))
      },
      [dispatch],
    ),
  }
}
export default ProfileService
