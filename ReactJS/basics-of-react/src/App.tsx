import { Routes, Route } from 'react-router-dom'
import { About } from './pages/About'
import { AboutLorenzo } from './pages/AboutLorenzo'
import { AboutMatheus } from './pages/AboutMatheus'

import { Home } from './pages/Home'

const App = () => {

  return (
    <div>
      <header>
        <h1>Título do site</h1>
      </header>
      <hr />
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/sobre' element={<About/>} />
          <Route path='/sobre/lorenzo' element={<AboutLorenzo />} />
          <Route path='/sobre/matheus' element={<AboutMatheus/>} />
        </Routes>
      </div>
      <hr />
      <footer>
        Todos os direitos reservados
      </footer>
    </div>
  )
}

export default App