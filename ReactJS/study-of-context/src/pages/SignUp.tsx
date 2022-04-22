import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { Context } from "../contexts/Context"


export const SignUp = () => {
  const {state, dispatch} = useContext(Context)
  const [nameInput, setNameInput] = useState('')
  const [ageInput, setAgeInput] = useState(0)

  // const handleChangeName = () => {
  //   dispatch({
  //     type: 'CHANGE_NAME',
  //     payload: {
  //       name: 'Matheus'
  //     }
  //   })
  // }


  return (
    <div>
      <h3>Tela SignUp</h3> 
      <input type="text"
        placeholder="Digite um nome"
        value={}
      />
      <br />
      <Link to="/exibir"> Ir para ShowData</Link>
    </div>
  )
}