import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [starships, setStarships] = useState([])
  const [planets, setPlanets] = useState([])
  const [films, setFilms] = useState([])

  useEffect(() => {
    async function fetchData() {
      const resultData = await Promise.allSettled([
        axios.get(`https://swapi.dev/api/starships4444/`),
        axios.get(`https://swapi.dev/api/planets/`),
        axios.get(`https://swapi.dev/api/films/`),
      ])

      setStarships(resultData[0]?.value)
      setPlanets(resultData[1]?.value)
      setFilms(resultData[2]?.value)
    }

    fetchData()
  }, [])

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        {starships?.data?.results.map((item) => (
          <div key={item.name}>{item.name}</div>
        ))}
      </div>
      <div>
        {planets?.data?.results.map((item) => (
          <div key={item.name}>{item.name}</div>
        ))}
      </div>
      <div>
        {films?.data?.results.map((item) => (
          <div key={item.title}>{item.title}</div>
        ))}
      </div>
    </div>
  )
}

export default App
