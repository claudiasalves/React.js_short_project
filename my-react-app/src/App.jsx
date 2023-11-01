import { useState, useEffect } from 'react';
import Loading from './Loading';

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
      {!loading ? 
      (users.map((user, index) => (
        <div key={index}>
          <h3>{user.name.first} {user.name.last}</h3>
          <p>{user.email}</p>
          <hr />
        </div>
      ))
      ) : (
      <Loading message="Loading" />
      )}
    </div>
  );
}

export default App;
