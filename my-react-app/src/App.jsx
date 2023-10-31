import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getRandomUsers();
  }, []);

  const getRandomUsers = () => {
    setLoading(true)
    fetch('https://randomuser.me/api/?results=10') 
      .then((response) => response.json())
      .then((data) => {
        const randomUsers = data.results;
        setUsers(randomUsers);
        setLoading(false)
      })
      .catch((error) => console.error('Error fetching random users: ', error));
  };

  return (
    <div className="App">
      <h1>Users</h1>
        {!loading 
        ? users.map((user, index) => (
          <div key={index}>
            <h3>{user.name.first} {user.name.last}</h3>
            <p>{user.email}</p>
            <hr />
          </div>
        ))
      : "loading"}
    </div>
  );
}

export default App;
