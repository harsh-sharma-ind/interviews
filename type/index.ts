export interface InvitedUser {
  id: string
  company_id: string
  invited_by: string
  email_id: string
  full_name: string
  role: string
  invitation_status: string
}
export type InvitedUsers = Array<InvitedUser>
export interface DeleteUserTopic {
  id: string
  user_id: string
}

export interface InvitedUserFormInput {
  id?: string
  company_id: string
  invited_by: string
  email_id: string
  full_name: string
  role: string
  invitation_status: string
}
