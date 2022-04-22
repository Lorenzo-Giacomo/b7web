import { Link, useSearchParams } from "react-router-dom"

export const About = () => {
  // pegar as informações e modificar as informações
  const [searchParams, setSearchParams] = useSearchParams()
  
  // especifica os possívei tipos
  const setOrder = (order: 'asc' | 'desc') => {
    searchParams.set('order', order) // mudar o valor da url
    // pegar/altera somente aquele valor do "order" e não mexer no filter para que quando clicarmos no button atualizar só order
    setSearchParams(searchParams)
  }

  return (
    <div>
      Filtro: {searchParams.get('filter')} <br />
      Ordem: {searchParams.get('order')}
      <hr />
      <button onClick={()=> setOrder('asc')}>Ascedente</button>
      <button onClick={()=> setOrder('desc')}>Descendente</button>
    <br /> <hr />

      Página SOBRE: 
      <ul>
        <li><Link to='/sobre/lorenzo'>Lorenzo</Link></li>
        <li><Link to='/sobre/matheus'>Matheus</Link></li>
      </ul>
    </div>
  )
}