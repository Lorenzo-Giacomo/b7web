import { ChangeEvent, useState } from "react"
import { usePeopleList } from "./hooks/peopleList"

const App = () => {
  const [list, dispatch] = usePeopleList()
  const [nameInput, setNameInput] = useState('')

  const handleAddButton = () => {
    if(nameInput) {
      // manda o que deseja ser executado dentro do reducer
      dispatch({
        type: 'ADD',
        payload: {
          name: nameInput
        }
      })
      setNameInput('')
    }
  }
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value)
  }
  const deletePerson = (id: string) => {
    dispatch({
      type: 'DEL',
      payload: {id}
    })
  }
  const handleOrderButton = () => {
    dispatch({
      type: 'ORDER'
    })
  }

  return (
    <div>
      <input type="text" value={nameInput} onChange={handleInputChange} />
      <button onClick={handleAddButton}>Adicionar</button>
      <hr />
      <button onClick={handleOrderButton}>Ordenar</button>
      <br />
      Lista de pessoas:
      {list.map((item, index) => (
        <div>
          <li key={index}>
            {item.name}
            <button onClick={() => deletePerson(item.id)}>[ deletar ]</button>
          </li>
        </div>
      ))}
    </div>
  )
}

export default App