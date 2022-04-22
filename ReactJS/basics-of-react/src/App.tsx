// import { Routes, Route } from 'react-router-dom'
// tiramos as importações dos componentes das páginas daqui e enviamos para o componente de rotas e o importamos aqui.
import { MainRoutes } from "./routes/MainRoutes"

const App = () => {

  return (
    <div>
      <header>
        <h1>Título do site</h1>
      </header>
      <hr />
      <div>
        {/* Tiramos a rota daqui e enviamos para um componente somente de rotas*/}
        <MainRoutes></MainRoutes>
      </div>
      <hr />
      <footer>
        Todos os direitos reservados
      </footer>
    </div>
  )
}

export default App