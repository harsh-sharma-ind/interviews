import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from 'main-stores/store'

import { InvitedUsers, InvitedUserFormInput } from '../type'

export interface UpdateUserInterFace {
  fullName: string | undefined
  id: string | undefined
}

export interface ProfileState {
  user: UpdateUserInterFace | null

  inviteUsers: InvitedUsers[] | null
}
export interface GetUser {
  id: string
  fullName: string
  role: string
}

const initialState: ProfileState = {
  user: {
    fullName: undefined,
    id: undefined,
  },

  inviteUsers: [],
}

// Slice
export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setInviteUsers(state, action: PayloadAction<InvitedUsers[]>) {
      state.inviteUsers = action.payload
    },
  },
})

// Action
export const ProfileAction = {
  setInviteUsers: ProfileSlice.actions.setInviteUsers,
  inviteUsers: createAction(`${ProfileSlice.name}/inviteUsers`, (data: InvitedUserFormInput) => ({
    payload: data,
  })),
  fetchInviteUsersList: createAction(
    `${ProfileSlice.name}/fetchInviteUsersList`,
    (user_id: string) => ({
      payload: user_id,
    }),
  ),
}

export const getInviteUsers = (state: RootState) => state.profile.inviteUsers

// Reducer
export default ProfileSlice.reducer
