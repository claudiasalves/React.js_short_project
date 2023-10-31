import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getRandomUsers();
  }, []);

  const getRandomUsers = () => {
    fetch('https://randomuser.me/api/?results=10') 
      .then((response) => response.json())
      .then((data) => {
        const randomUsers = data.results;
        setUsers(randomUsers);
      })
      .catch((error) => console.error('Error fetching random users: ', error));
  };

  return (
    <div className="App">
      <h1>Users</h1>
        {users.map((user, index) => (
          <div key={index}>
            <h3>{user.name.first} {user.name.last}</h3>
            <p>{user.email}</p>
            <hr />
          </div>
        ))}
    </div>
  );
}

export default App;
