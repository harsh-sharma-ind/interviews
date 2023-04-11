import { useEffect } from 'react'

import { AuthenticationService } from 'features/authentication/hooks'
import { ProfileService } from 'features/interviews/hooks'

const InterviewContainer = () => {
  const { fetchInviteUserList, getInviteUsers } = ProfileService()
  const { fetchMasterRoles, getUser } = AuthenticationService()

  useEffect(() => {
    fetchInviteUserList(getUser?.id ? getUser?.id : '')
    fetchMasterRoles()
  }, [getUser])

  const columnsArray = [
    { headingName: 'Name', fieldName: 'full_name' },
    { headingName: 'Role', fieldName: 'master_roles?.name' },
    { headingName: 'Email', fieldName: 'email_id' },
    { headingName: 'Status', fieldName: 'invitation_status' },
    { headingName: 'Join Date', fieldName: 'created_at' },
    { headingName: 'Action', fieldName: '' },
  ]

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {columnsArray.map((col: any, i: any) => (
              <th key={i}>{col.headingName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {getInviteUsers &&
            getInviteUsers?.map((row: any, i: any) => (
              <tr key={i}>
                {columnsArray &&
                  columnsArray?.map((col: any, j: any) => (
                    <>
                      <td key={j}>
                        {row[col.fieldName]}

                        {col.fieldName === 'master_roles?.name' && row.master_roles?.name}

                        {col.fieldName === '' && (
                          <div className="drop-down">
                            <div className="btn-group dropstart">
                              <i
                                className="fa fa-ellipsis-v"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                aria-hidden="true"
                              ></i>
                            </div>
                          </div>
                        )}
                      </td>
                    </>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default InterviewContainer
