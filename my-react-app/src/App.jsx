import { useState, useEffect } from 'react';
import Loading from './Loading';
import './App.css'

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
      {loading ? ( 
        <Loading message="Loading" />
      ) : (
        <div>
          <form className="button" onSubmit={handleSubmit}>
            <input type="submit" value="load users" />
          </form>
          {users.map((user, index) => (
            <div key={index}>
              <h3 className="h3"> {user.name.first} {user.name.last}</h3>
              <p className="email">{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
