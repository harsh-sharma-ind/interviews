import { supabase } from 'supabase'

export interface UserProfileResponse {
  id: string
  role: string
  full_name: string
}

export const supbaseFetchUser = (id: string) => supabase.from('profiles').select('*').eq('id', id)

export const sbFetchInviteUsersList = (user_id: string) =>
  supabase
    .from('invite_users')
    .select('id,created_at,email_id,full_name,invited_by,invitation_status,role,master_roles(name)')
    .eq('invited_by', user_id)
