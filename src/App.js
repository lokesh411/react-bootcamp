import React, { useState, useEffect } from 'react'
import * as requests from './requests'
import DisplayUsers from './Users';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    requests.fetchAllUsers().then(response => {
      if (response.students) {
        setUsers(response.students)
      }
    })
  }, [])
  console.log("users in app component :: ", users)
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hello world</h1>
      <br />
      <DisplayUsers users={users}/>
    </div>
  );
}

export default App;
