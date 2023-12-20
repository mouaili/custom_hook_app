import React from 'react';

function TableUsers({ users }) {
  console.log(users);

  return (
    <table id="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map(({ id, name, username, email, address }) => {
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{address.city}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default TableUsers;
