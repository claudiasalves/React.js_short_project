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
    fetch('https://randomuser.me/api/?results=5') 
      .then((response) => response.json())
      .then((data) => {
        const randomUsers = data.results;
        setUsers((prevUsers) => [...prevUsers, ...randomUsers]);
        setLoading(false)
      })
      .catch((error) => console.error('Error fetching random users: ', error));
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      getRandomUsers();
      console.log("More users were loaded")
  }

  return (
    <div className="App">
      {!loading ? 
      (users.map((user, index) => (
        <div key={index}>
          <h3>{user.name.first} {user.name.last}</h3>
          <p>{user.email}</p>
          <hr />
          <form onSubmit={handleSubmit}>
            <input type="submit" value="load users"></input>
          </form>
        </div>
      ))
      ) : (
      <Loading message="Loading" />
      )}
    </div>
  );
}

export default App;
