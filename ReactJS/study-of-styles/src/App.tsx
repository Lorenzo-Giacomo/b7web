// import { Container } from "./components/Container";
// import { Botao } from "./components/Botao";
// import { Container, Botao } from "./AppStyles"
import * as C from './AppStyles'

const App = () => { 

  return (
    <C.Container bgColor="#0000ff">
      <span>Texto do componente</span>
      <a href="" className='link'>Link</a>
      <C.Botao bg="#ff0000">Botão grande</C.Botao>
      <C.Botao bg="#00ff00"small>Botão menor</C.Botao>

    </C.Container>
  )
}

export default App
