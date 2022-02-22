import React, { useState } from 'react';

import './App.css';

const USERS = [
  { id: 1, name: 'Abhishek', age: 32 },
  { id: 2, name: 'Akshay', age: 30 },
  { id: 3, name: 'Tanuj', age: 40 },
  { id: 4, name: 'Tanya', age: 50 },
  { id: 5, name: 'Aman', age: 30 },
  { id: 6, name: 'Anuj', age: 68 },
  { id: 7, name: 'Dharya', age: 34 },
  { id: 8, name: 'Harry', age: 28 },
  { id: 9, name: 'Naman', age: 23 },
];

function App() {
  
  const [name, setName] = useState('');

  
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
     
    }

    setName(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-id">{user.id}</span>
              <span className="user-name">{user.name}</span>
              <span className="user-age">{user.age} year old</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default App;