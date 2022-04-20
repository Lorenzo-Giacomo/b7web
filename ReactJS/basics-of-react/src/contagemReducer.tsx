import { useContagem } from "./hooks/contagem"


const App = () => {
  const [contagem, contagemDispatch] = useContagem()
  // acesso as infos, função que vai executar a função que quer executar. É como se fosse uma função chamando dentro dela várias funções
  return (
    <div>
      Contagem: {contagem.count}
      <hr/>
      <button onClick={()=> contagemDispatch({type: 'ADD'})}>Adicionar</button>
      <button onClick={()=> contagemDispatch({type: 'DEL'})}>Remover</button>
      <button onClick={()=> contagemDispatch({type: 'RESET'})}>Resetar</button>

    </div>
  )
}

export default App