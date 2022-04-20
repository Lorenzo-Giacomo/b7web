import { useEffect, useState } from 'react'
import {Movie} from './types/Movie'


export function Movies() {


const [movies, setMovies] = useState<Movie[]>([])
const [loading, setLoading] = useState(false)

useEffect(() => {
  loadMovies()
}, [])

// const loadMovies = () => {
//   fetch('https://api.b7web.com.br/cinema/')
//   .then(response => {
//     return response.json()
//   })
//   .then(json => {
//     setMovies(json)
//   })
// }

const loadMovies = async () => {
  try {
    setLoading(true)
    let response = await fetch('https://api.b7web.com.br/cinema/')
    let json = await response.json()
    setLoading(false)
    setMovies(json)
  } catch(e) {
    setLoading(false)
    setMovies([])
    console.error(e)
  }
}

return (
  <div>
    {/* <button onClick={loadMovies}>Carregar Filmes</button> */}
    {loading &&
      <div>Carregando...</div>
    }
    { !loading && movies.length > 0 &&
      <>
      Total de Filmes: {movies.length}
    
      <div className="grid grid-cols-6 gap-3">
        {movies.map((item, index) => (
          <div key={index}>
            <img src={item.avatar} className="w-32 block" alt="" />
            {item.titulo}
          </div>
        ))}
      </div>
      </>
    }
    {!loading && movies.length === 0 &&
      <div>Tente mais tarde</div>
    }
    
  </div>
)}