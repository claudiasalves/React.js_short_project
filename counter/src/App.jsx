import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // const [news, setNews] = useState([])
  // const [searchQuery, setSearchQuery] = useState("react")
  // const [url, setUrl] = useState("http://hn.algolia.com/api/v1/search?query=react")
  // const [loading, setLoading] = useState(false)

  // const fetchNews = () => {
  //   setLoading(true);
  //   fetch(url)
  //     .then(result => result.json())
  //     .then(data => {
  //       setNews(data.hits);
  //       setLoading(false);
  //     })
  //     .catch(err => console.log(err))
  // }

  // useEffect(() => {
  //   fetchNews()
  // }, [url]);

  // const handleChange = (e) => {
  //   setSearchQuery(e.target.value)
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
  // }

  // return (
  //   <div>
  //     <h2>News</h2>
  //     {loading ? <h2>Loading...</h2> : "" }
  //     <form onSubmit={handleSubmit}>
  //       <input type="text" value={searchQuery} onChange={handleChange}/>
  //       <button>Search</button>
  //     </form>
  //     {news.map((n, index) =>
  //     <p key={index}>{n.title}</p>
  //     )}
  //   </div>
  // )

  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Clicked ${count} times`
  })

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div className="card">
        <button onClick={increment}>
          Count is {count}
        </button>
        </div>
    </>
  )
}

export default App
