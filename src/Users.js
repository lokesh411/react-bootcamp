import React from 'react'

const DisplayUsers = ({ users }) => {
    console.log('users from the api :: ', users)
    users = users.map(item => {
        delete item._id;
        return item;
    })
    return (
        <div style={{ textAlign: "center" }}>
            <table>
                <thead>
                    <tr style={{ margin: 10, padding: 5 }}>
                        <th style={{ margin: 10, padding: 10 }}>Username</th>
                        <th style={{ margin: 10, padding: 10 }}>Email Id</th>
                        <th style={{ margin: 10, padding: 10 }}>Age</th>
                        <th style={{ margin: 10, padding: 10 }}>First name</th>
                        <th style={{ margin: 10, padding: 10 }}>Last name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map(item => (
                            <tr style={{ margin: 10, padding: 5 }}>
                                {
                                    Object.values(item).map(value => (
                                        <td style={{ margin: 10, padding: 10 }}>{value}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DisplayUsers;